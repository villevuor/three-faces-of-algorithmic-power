import { h, Component, render } from 'preact';
import Helmet from "preact-helmet";
import { Router } from 'preact-router';
import { useEffect, useState } from "preact/hooks";

import Header from './header';

import Home from '../routes/home';
import DirectPower from '../routes/direct';
import UndirectPower from '../routes/undirect';
import HiddenPower from '../routes/hidden';

const Login = () => <a href="/auth/login" >Login with Spotify</a>

class App extends Component {
	constructor() {
    super();

		this.state = {
			loginNeeded: true,
			spotifyReady: false,
			player: undefined,
			playerState: undefined,
			playSong: undefined
		}
	}

	componentDidMount() {
		fetch('/auth/token').then((response) => {
			response.json().then((json) => {
				const token = json.access_token;
				if (token !== '') {
					this.setState({ loginNeeded: false })
					this.initSpotify(token);
				}
			});
		});
	}

	initSpotify(token) {
		const script = document.createElement("script");
		script.src = "https://sdk.scdn.co/spotify-player.js";
		script.async = true;
		document.body.appendChild(script);

		window.onSpotifyWebPlaybackSDKReady = () => {
			console.log('connecting to spotify...');

			const player = new Spotify.Player({
				name: 'Web Playback SDK Player',
				getOAuthToken: cb => { cb(token); },
				volume: 0.5
			});

			const play = ({ song, device_id, player: { _options: { getOAuthToken } } }) => {
				const uris = (typeof song === 'String' ? [song] : song);
				getOAuthToken(access_token => {
					fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
						method: 'PUT',
						body: JSON.stringify({ uris }),
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${access_token}`
						}
					});
				});
			};

			player.addListener('ready', ({ device_id }) => {
				console.log('Spotify Ready with Device ID', device_id);

				this.setState({ player });

				this.setState({
					spotifyReady: true,
					playSong: (song) => play({ player, song, device_id })
				});
			});

			player.addListener('not_ready', ({ device_id }) => {
				console.log('Device ID has gone offline', device_id);
			});

			player.addListener('initialization_error', ({ message }) => {
				console.error('Failed to initialize', message);
			});

			player.addListener('authentication_error', ({ message }) => {
				console.error('Failed to authenticate', message);
				this.setState({ loginNeeded: true });
			});

			player.addListener('account_error', ({ message }) => {
				console.error('Failed to validate Spotify account', message);
			});

			// Todo: add error handling

			player.addListener('player_state_changed', ( playerState => {
				console.log(playerState);
				this.setState({ playerState });
			}));

			player.connect();
		}
	}

	render(props, { loginNeeded, spotifyReady, playSong, player, playerState }) {
		return <div id="app">
			<Helmet title="Demo" />
			{ loginNeeded
				? <Login />
				: <div>
						{ !spotifyReady
						? <p>Loading...</p>
						: <div>
								<Header />
								<Router>
									<Home path="/" />
									<DirectPower
										path="/direct"
										playSong={playSong}
										playerState={playerState}
										player={player} />
									<UndirectPower path="/undirect" />
									<HiddenPower path="/hidden" />
								</Router>
							</div>
						}
					</div>
			}
		</div>
	}
}

export default App;

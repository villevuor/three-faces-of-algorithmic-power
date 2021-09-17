import { Component } from 'preact';
import { useEffect, useState } from "preact/hooks";
import style from './style.css';

import ProgressBar from '../../components/progressbar';

// playSong={this.state.playSong}
// playerState={this.state.playerState} />

class DirectPower extends Component {
	constructor() {
    super();
  }

	componentDidMount()	{
		const playlist = [
			'spotify:track:7zyHjiSi5heAVF9UjFMCL2',
			'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
			'spotify:track:1fJk3axZoC08r2KYROIucj'
		];

		this.props.playSong(playlist)
	}
	render({ playerState, playSong }) {
		let albumCover = '';
		let length = 0;
		let title = '';
		let artists = '';

		if (playerState && playerState.track_window) {
			albumCover = playerState.track_window.current_track.album.images[2].url;
			title = playerState.track_window.current_track.name;
			artists = playerState.track_window.current_track.artists.map(artist => artist.name).join(', ');
			length = Math.round(playerState.track_window.current_track.duration_ms / 1000);
		}

		const position = (playerState ? Math.round(playerState.position / 1000) : null);

		return <div class={style.direct}>
			<img src={albumCover} width="300" height="300" />
			<h3>{title}</h3>
			<p>{artists}</p>
			{position ? <ProgressBar length={length} position={position} /> : ''}
		</div>;
	}
}

//

{/*  */}



export default DirectPower;

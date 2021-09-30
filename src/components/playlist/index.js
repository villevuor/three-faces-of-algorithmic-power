import { h, Component } from 'preact';
import style from './style.css';

class PlayList extends Component {
	constructor() {
    super();

		this.state = {
			playlist: null
		};
  }

	addSong() {
		const { current_track } = this.props.playerState.track_window;
		const trackToAdd = {
			name: current_track.name,
			image: current_track.album.images[1].url,
			artists: current_track.artists.map(artist => artist.name).join(', '),
			spotifyUri: current_track.uri
		};
		const playlist = [...this.state.playlist, trackToAdd];
		this.setState({ playlist });
		this.props.afterClick();
	}

	componentDidMount()	{
		this.setState({ playlist: [] });
	}

	componentWillUnmount()	{
		// Todo: save playlist somewhere
	}

	shouldComponentUpdate(nextProps, nextState)	{
		if (this.state === nextState) {
			return false;
		}
	}

	render(_, { playlist }) {
		const Track = ({ name, image, artists }) => <div class={style.track}>
			<img src={image} width="35" height="35" />
			<h4>{artists}: {name}</h4>
		</div>

		return <div>
			<button
				class={ style.addButton }
				onClick={() => this.addSong()}>
				+ Lisää soittolistalle
			</button>
			<div class={ style.playlist }>
				<h3>Soittolistalle tallennetut kappaleet</h3>
				{ playlist && playlist.length > 0
					? playlist.map(track => <Track {...track} />)
					: <p>Lisäämäsi kappaleet ilmestyvät tänne</p>}
			</div>
		</div>;
	}
}

export default PlayList;

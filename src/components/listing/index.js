import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Track = ({ track, playSong }) => (
	<div class={ style.track } onClick={() => playSong(track.uri) }>
		<img src={track.album.images[1].url} title="" width="70" height="70" />
		<h4>{track.name}</h4>
		<span class={style.artist}>{track.artists.map(artist => artist.name).join(', ')}</span>
	</div>
)

const Listing = ({ tracks, playSong }) => (
	<div class={ style.listing }>
		{(tracks && tracks.items && tracks.items.length > 0
			? tracks.items.map(item => <Track track={item} playSong={playSong} />)
			: null)}
	</div>
);

export default Listing;

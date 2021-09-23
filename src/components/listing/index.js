import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

// album: {album_type: 'album', artists: Array(1), external_urls: {…}, href: 'https://api.spotify.com/v1/albums/7v1e4jHG8B86JeLsyQvmyc', id: '7v1e4jHG8B86JeLsyQvmyc', …}
// artists: [{…}]
// disc_number: 1
// duration_ms: 138948
// explicit: false
// external_ids: {isrc: 'QMDA71582181'}
// external_urls: {spotify: 'https://open.spotify.com/track/3l3Wh4KRKll7nFdpCFfDe5'}
// href: "https://api.spotify.com/v1/tracks/3l3Wh4KRKll7nFdpCFfDe5"
// id: "3l3Wh4KRKll7nFdpCFfDe5"
// is_local: false
// is_playable: true
// name: "Undefined"
// popularity: 28
// preview_url: "https://p.scdn.co/mp3-preview/493d52ddfb17e87e5a1624530f6db44bf5bfda98?cid=86cbcec0ddb74337bcb3d6e7b7b78d50"
// track_number: 6
// type: "track"
// uri: "spotify:track:3l3Wh4KRKll7nFdpCFfDe5"

const Track = ({ track }) => (
	<div class={ style.track }>
		<img src={track.album.images[1].url} title="" width="70" height="70" />
		<h4>{track.name}</h4>
		<span class={style.artist}>{track.artists.map(artist => artist.name).join(', ')}</span>
	</div>
)

const Listing = ({ tracks }) => (
	<div class={ style.listing }>
		{(tracks && tracks.items && tracks.items.length > 0
			? tracks.items.map(item => <Track track={item} />)
			: 'boohoo')}
	</div>
);

export default Listing;

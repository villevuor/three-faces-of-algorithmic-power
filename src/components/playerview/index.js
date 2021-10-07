import { h } from 'preact';

import ProgressBar from '../progressbar';

import style from './style.css';

const PlayerView = ({ playerState, width, forceLength, hideTime }) => {
  const maxWidth = width || 350;

  if (
    playerState === null ||
    typeof playerState === 'undefined' ||
    typeof playerState.track_window === 'undefined' ||
    typeof playerState.track_window.current_track === 'undefined' ||
    playerState.paused
  ) {
    return <div class={style.defaultCover} style={{ width: maxWidth, height: maxWidth }}></div>;
  }

  const track = playerState.track_window.current_track;

  const length = forceLength || Math.floor(track.duration_ms / 1000);
  const position = Math.floor(playerState.position / 1000);

	return <div class={style.player} style={{ maxWidth }}>
    <img src={track.album.images[2].url} width={maxWidth} height={maxWidth} />
    <h3 class={ style.title }>{track.name}</h3>
    <p class={ style.artist}>{track.artists.map(artist => artist.name).join(', ')}</p>
    <ProgressBar length={length} position={position} hideTime={hideTime} />
  </div>;
};

export default PlayerView;

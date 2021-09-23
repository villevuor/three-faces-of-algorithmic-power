import { h } from 'preact';

import ProgressBar from '../progressbar';

import style from './style.css';

const PlayerView = ({ playerState, width }) => {
  const maxWidth = width || 300;

  if (
    typeof playerState === 'undefined' ||
    typeof playerState.track_window === 'undefined' ||
    typeof playerState.track_window.current_track === 'undefined'
  ) {
    return <div class={style.defaultCover} style={{ width: maxWidth, height: maxWidth }}></div>;
  }

  console.log()

  const track = playerState.track_window.current_track;

  const length = Math.round(track.duration_ms / 1000);
  const position = Math.round(playerState.position / 1000);

	return <div class={style.direct} style={{ maxWidth }}>
    <img src={track.album.images[2].url} width={maxWidth} height={maxWidth} />
    <h3>{track.name}</h3>
    <p>{track.artists.map(artist => artist.name).join(', ')}</p>
    <ProgressBar length={length} position={position} />
  </div>;
};

export default PlayerView;

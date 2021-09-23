import { h, Component } from 'preact';

import style from './style.css';

import Listing from '../../components/listing';
import PlayerView from '../../components/playerview';

class UndirectPower extends Component {
  state = {
		query: ''
	};

  onSubmit = e => {
		e.preventDefault();
		this.props.searchFromAPI(this.state.query)
  }

  onInput = e => {
    const { value } = e.target;
    this.setState({ query: value })
  }

  render({ searchResults, playerState, playSong }, { query }) {
    return (
			<div class={style.undirect}>
        <div class={style.left}>
          <form onSubmit={this.onSubmit}>
            <input type="text" value={query} onInput={this.onInput} placeholder="Kirjoita hakusana..." />
            <button type="submit">Hae</button>
          </form>
          <Listing tracks={searchResults.tracks} playSong={playSong} />
        </div>
        <div class={style.right}>
          <PlayerView playerState={playerState} />
        </div>
			</div>
    );
  }
}

export default UndirectPower;

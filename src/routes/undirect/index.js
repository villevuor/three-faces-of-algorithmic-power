import { h, Component } from 'preact';

import style from './style.css';

import { mostPopularWithSmallVariance } from '../../algorithms';

import Listing from '../../components/listing';
import PlayerView from '../../components/playerview';
import PlayList from '../../components/playlist';

class UndirectPower extends Component {
  state = {
		query: ''
	};

  onSubmit = e => {
		e.preventDefault();
		this.props.searchFromAPI(this.state.query, mostPopularWithSmallVariance)
  }

  onInput = e => {
    const { value } = e.target;
    this.setState({ query: value })
  }

  render({ searchResults, playerState, playSong, player }, { query }) {
    return (
			<div class={style.undirect}>
        <div class={style.left}>
          <form onSubmit={this.onSubmit}>
            <input type="text" value={query} onInput={this.onInput} placeholder="Hae musiikkia kappaleen tai artistin nimellä" />
            <button type="submit" class={ style.searchButton }>Hae</button>
          </form>
          {searchResults && searchResults.tracks && searchResults.tracks.items
            ? <Listing tracks={searchResults.tracks.items} playSong={playSong} />
            : null
          }
        </div>
        <div class={style.right}>
          <PlayerView playerState={playerState} />
          <PlayList playerState={playerState} player={player} afterClick={() => this.playSongWithTimeout()} />
        </div>
			</div>
    );
  }
}

export default UndirectPower;

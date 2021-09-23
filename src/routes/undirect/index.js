import { h, Component } from 'preact';

import style from './style.css';

import Listing from '../../components/listing';
import PlayerView from '../../components/playerview';
import Sticky from '../../components/sticky';

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
        <Sticky>
          <p>Epäsuora valta. Perinteinen hakunäkymä. Ajatuksena, että algoritmin valta ilmenee hakutulosten kevyenä manipulointina</p>
          <p>Tyhjä hakupalkki voi olla vähän lamauttava, niin tähän voisi ehkä antaa jotain esimerkkejä, mitä hakea</p>
			</Sticky>
			</div>
    );
  }
}

export default UndirectPower;

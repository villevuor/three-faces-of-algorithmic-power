import { h, Component } from 'preact';

import style from './style.css';

import Listing from '../../components/listing';
import PlayerView from '../../components/playerview';

const TagSelector = ({ selectedTags, toggleTag }) => {
  const tags = ['Dynaaminen', 'Rento', 'Värikäs', 'Tuore', 'Tyylikäs'];

  return <div>
    {tags.map(tag => <a class={(selectedTags.includes(tag) ? style.selectedTag : style.tag)} onClick={() => toggleTag(tag)}>{tag}</a>)}
  </div>;
}

class HiddenPower extends Component {
  state = {
		selectedTags: []
	};

  toggleTag = (tag) => {
    let { selectedTags } = this.state;

    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter(t => t !== tag);
    } else {
      selectedTags.push(tag);
    }

    this.setState({ selectedTags });

    const queries = ['abba', 'eppu normaali', 'bezos', 'pave maijanen', 'ursus factory'];
    this.props.searchFromAPI(queries[Math.floor(Math.random() * queries.length)])
  }

  render({ searchResults, playerState, playSong }, { selectedTags }) {
    console.log(selectedTags);
    return (
			<div class={style.hidden}>
        <div class={style.left}>
          <h2>Minkälainen musiikki sinua kiinnostaa?</h2>
          <TagSelector selectedTags={selectedTags} toggleTag={(t) => this.toggleTag(t)} />
          <h2>Valintojesi perusteella sinulle suositeltua musiikkia</h2>
          <Listing tracks={searchResults.tracks} playSong={playSong} />
        </div>
        <div class={style.right}>
          <PlayerView playerState={playerState} />
        </div>
			</div>
    );
  }
}

export default HiddenPower;

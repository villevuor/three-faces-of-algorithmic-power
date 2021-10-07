import { h, Component } from 'preact';

import style from './style.css';

import Listing from '../../components/listing';
import PlayerView from '../../components/playerview';
import PlayList from '../../components/playlist';
import Loader from '../../components/loader';

import { shuffle, mostSuitableByTags, randomIntFromInterval } from '../../algorithms';

import songs from './songs';

const TagSelector = ({ selectedTags, toggleTag }) => {
  const tags = [
    { key: 'dynamic', label: 'Dynaaminen' },
    { key: 'chill', label: 'Rento' },
    { key: 'colorful', label: 'Värikäs' },
    { key: 'stylish', label: 'Tyylikäs' },
    { key: 'playful', label: 'Leikkisä' },
    { key: 'inspiring', label: 'Inspiroiva' },
    { key: 'fresh', label: 'Tuore' },
    { key: 'fascinating', label: 'Kiehtova' },
    { key: 'oldbutgold', label: 'Ikivihreä' }
  ];

  return <div>
    {tags.map(tag => <a class={(selectedTags.includes(tag.key) ? style.selectedTag : style.tag)} onClick={() => toggleTag(tag.key)}>{tag.label}</a>)}
  </div>;
}

class HiddenPower extends Component {
  state = {
		selectedTags: [],
    loading: false
	};

  toggleTag = (tag) => {
    let { selectedTags } = this.state;

    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter(t => t !== tag);
    } else {
      selectedTags.push(tag);
    }

    this.setState({ selectedTags });

    if (selectedTags.length >= 2) {
      const tracksToSearch = mostSuitableByTags(songs, selectedTags).map(t => t.id);
      this.props.getTracks(tracksToSearch, shuffle);

      this.setState({ loading: true });
      this.timeOut = setTimeout(() => {
        this.setState({ loading: false });
      }, randomIntFromInterval(1500, 5000));
    }
  }

  render({ searchResults, playerState, playSong, player }, { selectedTags, loading }) {
    return (
			<div class={style.hidden}>
        <div class={style.left}>
          <h2>Minkälainen musiikki sinua kiinnostaa?</h2>
          <TagSelector selectedTags={selectedTags} toggleTag={(t) => this.toggleTag(t)} />
          <h2 style={{ marginTop: '2em' }}>Valintojesi perusteella sinulle suositeltua musiikkia</h2>
          <div style={{ position: 'relative' }}>
            {!searchResults.tracks ? <p>Valitse vähintään kaksi eri avainsanaa.</p> : null }
            {loading ? <Loader /> : <Listing tracks={searchResults.tracks} playSong={playSong} />}
          </div>
        </div>
        <div class={style.right}>
          <PlayerView playerState={playerState} />
          <PlayList playerState={playerState} player={player} />
        </div>
			</div>
    );
  }
}

export default HiddenPower;

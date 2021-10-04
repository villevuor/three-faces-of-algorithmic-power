import { h, Component } from 'preact';

import style from './style.css';

import Listing from '../../components/listing';
import PlayerView from '../../components/playerview';
import Sticky from '../../components/sticky';

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
        <Sticky>
          <p>Piilevä valta (kolmas ulottuvuus). Tämä on vielä eniten kesken.</p>
          <p>Aluksi ajatuksena oli hyödyntää tarkkailuvallan muotoja, eli kuunteluhistoria vaikuttaisi siihen, mitä käyttäjälle suositellaan. Ongelma voi kuitenkin olla, että historiaa ei ole kovin paljoa tämän sessarin ajalta.</p>
          <p>Nyt vaihtoehtona on vähän tällaiset hähmäiset adjektiivit, joiden perusteella algoritmi tekee suosituksen. Noita adjektiiveja voisi olla enemmänkin, nyt muutama esimerkin vuoksi.</p>
          <p>(Tällä hetkellä hakutulokset on lähinnä satunnaisia, älä ihmettele)</p>
          <p>Hakutulosten hakeminen voisi ehkä kestää 1-2 sek / näyttää jonkun hakuanimaation. Se voisi tuoda tunnetta, että algoritmi "laskee" jotain</p>
			</Sticky>
			</div>
    );
  }
}

export default HiddenPower;

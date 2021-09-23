import { Component } from 'preact';
import { useEffect, useState } from "preact/hooks";
import style from './style.css';

import PlayerView from '../../components/playerview';
import Sticky from '../../components/sticky';

class DirectPower extends Component {
	constructor() {
    super();
  }

	componentDidMount()	{
		const playlist = [
			'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
			'spotify:track:1fJk3axZoC08r2KYROIucj',
			'spotify:track:7zyHjiSi5heAVF9UjFMCL2'
		];

		this.props.playSong(playlist)
	}

	componentWillUnmount() {
		this.props.player.pause();
	}

	render({ playerState }) {
		return <div class={style.direct}>
			<PlayerView playerState={playerState} />
			<Sticky>
				<p>Suora valta. Tässä ajatuksena, että järjestelmä vaan päättää mitä musiikkia soitetaan. Käytännössä "algoritmi" = joku valmis (itse tehty) soittolista.</p>
				<p>Järjestelmä voisi soittaa jokaisesta 30-45 sek, tai sitten käyttäjälle voidaan antaa käyttöön next-painike. (Käytännön syistä voisi olla kiva, että käyttäjä ehtisi kuunnella edes muutamaa eri kappaletta.)</p>
			</Sticky>
		</div>;
	}
}

export default DirectPower;

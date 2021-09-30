import { Component } from 'preact';
import { useEffect, useState } from "preact/hooks";
import shuffle from '../../helpers';
import style from './style.css';

import PlayerView from '../../components/playerview';
import Sticky from '../../components/sticky';

const sampleLength = 25; // sec

class DirectPower extends Component {
	constructor() {
    super();
  }

	componentDidMount()	{
		const playlist = [
			'spotify:track:2lvZlCIDkDHWc2Q9Y51GUJ',
			'spotify:track:3Pakcg38hbn3d3YZYRQ7LE',
			'spotify:track:4QjVfuu7om31HBan0jlX4p',
			'spotify:track:44BHl3n0aFIzMhz1bv7jUG',
			'spotify:track:0uUNN1nSoUx1A4fkDCWDQ7',
			'spotify:track:2nNRWUZBeGLuxegmFhJeCZ',
			'spotify:track:7AUFwSivoAvJoh1OJDLrGJ',
			'spotify:track:4y3OI86AEP6PQoDE6olYhO',
			'spotify:track:1rqqCSm0Qe4I9rUvWncaom',
			'spotify:track:25sgk305KZfyuqVBQIahim',
			'spotify:track:2WyRfGeHo97VC5mP1BBSzr',
			'spotify:track:3EPXxR3ImUwfayaurPi3cm',
			'spotify:track:20Lq4oIqlCDOKkw7yPHaQw',
			'spotify:track:6xtcFXSo8H9BZN637BMVKS',
			'spotify:track:4Sk3IcLo2nDenuBs8JBWBg',
			'spotify:track:2Fxmhks0bxGSBdJ92vM42m',
			'spotify:track:1erDNx55IWAE9OYuBTRYgc',
			'spotify:track:2TIlqbIneP0ZY1O0EzYLlc',
			'spotify:track:7AUFwSivoAvJoh1OJDLrGJ',
			'spotify:track:6WMRAp4dG3g1Ils9BbrQLA',
			'spotify:track:7mGdJWJETc696zijUeZ2FD',
			'spotify:track:1yn5xgyK5SuEukAcqs0X9N',
			'spotify:track:3hBHT6EFwiAABsMA1ZZBhf',
			'spotify:track:2tYDR0h6i8KuWDJoYPlyj0',
			'spotify:track:5SxkdsY1ufZzoq9iXceLw9',
			'spotify:track:3seNictp7GWitSNKlujwnY',
			'spotify:track:7AUFwSivoAvJoh1OJDLrGJ',
			'spotify:track:7GywmNFyZbKvEBkBR2gxOs',
			'spotify:track:7FxidSR6IoL3qMRXxFJ8pd',
			'spotify:track:19MBk3PbNFE36wqIqkMq9H',
			'spotify:track:4h1nlsgutqwzk2ZqYaZdOF',
			'spotify:track:7FRmWYGyVGHRikck2A2NP2',
			'spotify:track:55S2PQgSMYAhgoTCcGCDfw',
			'spotify:track:79jX8RM5CgPqDKdGEKNW9K',
			'spotify:track:7rehjyv0IQ0WQoB6wZRfnY',
			'spotify:track:7AUFwSivoAvJoh1OJDLrGJ',
			'spotify:track:5VGBgPVFO3e0lWz4WHYntQ',
			'spotify:track:4Zt76QBD0dVdEa4VnUd2Sl',
			'spotify:track:02pGdlK2UgDoPqWu0d4pZq',
			'spotify:track:48BhFviee97yuYMh4IqMXJ',
			'spotify:track:4Q7NePRrh6S0WzKMz8CbCA',
			'spotify:track:1wAXODAAL6hY64ZdhrnjBO',
			'spotify:track:4PazzXLJb56Afcyh20zfhm',
			'spotify:track:2cijv3TEyA7WmXFcHbUjXh',
			'spotify:track:2ABJ0REB7mwS792y1AMrkT',
			'spotify:track:4bCOAuhvjsxbVBM5MM8oik',
			'spotify:track:6xf85mBVo3o0E4oZHurPcB',
			'spotify:track:0AzAKlEGsBfigjWpp9AOdE',
			'spotify:track:2NZeivlB6l6SYShgexgcB9',
			'spotify:track:6fvRNluQqH2XBuNrF5N7PB',
			'spotify:track:7q5vLran701pFHiu6Lw5nX',
			'spotify:track:3Rzvgy2HjTKKHMcKU3X5gB',
			'spotify:track:3rgobpftjUoUTxURC4sw8k',
			'spotify:track:3gwWNMjqyz2nmkm8NBz5e1',
			'spotify:track:5x57rkFCUreqWU0GhIDiQi',
			'spotify:track:73ZCyrTwTbkSVPXMMIeOQu',
			'spotify:track:1xN7BpTAWnZkuSLOtRP6Qc',
			'spotify:track:66QouRqsyl2RpZfjysEfOe',
			'spotify:track:6PxQvNC0mkyb9DaBmYwgTL',
			'spotify:track:7EkWy2cj5jchNPtoTUgjdd'
		];

		this.props.playSong(shuffle(playlist));

		this.timer = setInterval(() => {
			this.props.player.nextTrack();
		}, sampleLength * 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		this.props.player.pause();
	}

	render({ playerState }) {
		return <div class={style.direct}>
			<PlayerView playerState={playerState} forceLength={sampleLength} hideTime={true} />
			<Sticky>
				<p>Suora valta. Tässä ajatuksena, että järjestelmä vaan päättää mitä musiikkia soitetaan. Käytännössä "algoritmi" = joku valmis (itse tehty) soittolista.</p>
				<p>Järjestelmä voisi soittaa jokaisesta 30-45 sek, tai sitten käyttäjälle voidaan antaa käyttöön next-painike. (Käytännön syistä voisi olla kiva, että käyttäjä ehtisi kuunnella edes muutamaa eri kappaletta.)</p>
			</Sticky>
		</div>;
	}
}

export default DirectPower;

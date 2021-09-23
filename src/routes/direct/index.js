import { Component } from 'preact';
import { useEffect, useState } from "preact/hooks";
import style from './style.css';

import PlayerView from '../../components/playerview';

class DirectPower extends Component {
	constructor() {
    super();
  }

	componentDidMount()	{
		const playlist = [
			'spotify:track:7zyHjiSi5heAVF9UjFMCL2',
			'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
			'spotify:track:1fJk3axZoC08r2KYROIucj'
		];

		this.props.playSong(playlist)
	}

	componentWillUnmount() {
		this.props.player.pause();
	}

	render({ playerState }) {
		return <div class={style.direct}>
			<PlayerView playerState={playerState} />
		</div>;
	}
}

export default DirectPower;

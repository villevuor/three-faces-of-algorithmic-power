import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import style from './style.css';

import ProgressBar from '../../components/progressbar';

const DirectPower = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		let timer = setInterval(() => setSeconds(seconds + 1), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div class={style.direct}>
			<img src="https://via.placeholder.com/300" width="300" height="300" />
			<ProgressBar length={250} position={seconds} />
		</div>
	);
}

export default DirectPower;

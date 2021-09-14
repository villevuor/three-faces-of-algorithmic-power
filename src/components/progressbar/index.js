import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const ProgressBar = ({ length, position }) => {
	const formatSeconds = (seconds) => {
		let minutes = 0;

		while (seconds >= 60) {
			minutes += 1;
			seconds -= 60;
		}

		const padWithZero = n => n < 10 ? "0" + n : n;

		return `${padWithZero(minutes)}:${padWithZero(seconds)}`;
	}

	return (
		<div class={style.wrapper}>
			<div class={style.position}>{formatSeconds(position)}</div>
			<div class={style.barBackground}>
				<div class={style.bar} style={{ width: `${(position / length)}%` }}></div>
			</div>
			<div class={style.length}>{formatSeconds(length)}</div>
		</div>
	);
}

export default ProgressBar;

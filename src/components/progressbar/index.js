import { h, Component } from 'preact';
import style from './style.css';

class ProgressBar extends Component {
	constructor() {
    super();

		this.state = {
			position: 0
		};
  }

	getDerivedStateFromProps({ position })	 {
		this.setState({ position });
	}

	componentDidMount()	{
		this.interval = setInterval(() => {
			this.setState({ position: this.state.position + 1 })
		}, 1000);
	}

	componentWillUnmount()	{
		clearInterval(this.interval);
	}

	render({ length }, { position }) {
		if (length < 1) return;

		const formatSeconds = (seconds) => {
			let minutes = 0;

			while (seconds >= 60) {
				minutes += 1;
				seconds -= 60;
			}

			const padWithZero = n => n < 10 ? "0" + n : n;

			return `${padWithZero(minutes)}:${padWithZero(seconds)}`;
		}

		return <div class={style.wrapper}>
			<div class={style.position}>{formatSeconds(position)}</div>
			<div class={style.barBackground}>
				<div class={style.bar} style={{ width: `${(position / length) * 100}%` }}></div>
			</div>
			<div class={style.length}>{formatSeconds(length)}</div>
		</div>;
	}
}

export default ProgressBar;

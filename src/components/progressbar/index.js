import { h, Component } from 'preact';
import style from './style.css';

class ProgressBar extends Component {
	constructor() {
    super();

		this.state = {
			position: 0
		};
  }

	componentWillReceiveProps({ position })	 {
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

	render({ length, hideTime }, { position }) {
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

		const showTime = !(hideTime || false);

		return <div class={style.wrapper}>
			{showTime ? <div class={style.position}>{formatSeconds(position)}</div> : null }
			<div class={style.barBackground}>
				<div
					class={style.bar}
					style={{
						width: (position < 1 ? 0 : `${((position) / (length - 2)) * 100}%`),
						transition: (position < 1 ? 'none' : 'width 1s linear')
					}}></div>
			</div>
			{showTime ? <div class={style.length}>{formatSeconds(length)}</div> : null }
		</div>;
	}
}

export default ProgressBar;

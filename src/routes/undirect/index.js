import { h, Component } from 'preact';
import style from './style.css';

class UndirectPower extends Component {
  state = {
		value: ''
	};

  onSubmit = e => {
    alert("Submitted a todo");
    e.preventDefault();
  }

  onInput = e => {
    const { value } = e.target;
    this.setState({ value })
  }

  render(_, { value }) {
    return (
			<div class={style.undirect}>
				<form onSubmit={this.onSubmit}>
					<input type="text" value={value} onInput={this.onInput} placeholder="Kirjoita hakusana..." />
					<button type="submit">Hae</button>
				</form>
			</div>
    );
  }
}

export default UndirectPower;

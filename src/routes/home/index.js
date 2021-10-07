import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>Tervetuloa</h1>
		<p>Aloita valitsemalla kokeiltava käyttöliittymä oikealta ylänurkasta.</p>
	</div>
);

export default Home;

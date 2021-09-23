import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<img src="../style/music.svg" width="40" height="40" />
		<nav>
			<Link activeClassName={style.active} href="/direct">Suora</Link>
			<Link activeClassName={style.active} href="/undirect">Epäsuora</Link>
			<Link activeClassName={style.active} href="/hidden">Piilevä</Link>
		</nav>
	</header>
);

export default Header;

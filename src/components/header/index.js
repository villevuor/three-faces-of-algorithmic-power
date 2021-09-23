import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<img src="../style/music.svg" width="40" height="40" />
		<nav>
			<Link activeClassName={style.active} href="/direct">Eka</Link>
			<Link activeClassName={style.active} href="/undirect">Toka</Link>
			<Link activeClassName={style.active} href="/hidden">Kolmas</Link>
		</nav>
	</header>
);

export default Header;

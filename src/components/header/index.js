import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} href="/direct">Eka</Link>
			<Link activeClassName={style.active} href="/undirect">Toka</Link>
			<Link activeClassName={style.active} href="/hidden">Kolmas</Link>
		</nav>
	</header>
);

export default Header;

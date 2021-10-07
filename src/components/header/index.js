import { h } from 'preact';
import { Link } from 'preact-router/match';
import { moveItem } from '../../algorithms';
import style from './style.css';

const links = () => {
	// Shuffle menu order by fixed value (so we can have different order in each interview)

	const o = localStorage.getItem('menu_order');

	const items = ['/test-A5Ccg9x', '/test-SdJPNgT', '/test-24FjShb'];

	if (o == 1 || o == 2) moveItem(items, 0, 1); // 2, 1, 3
	if (o == 3 || o == 4) moveItem(items, 1, 2); // 1, 3, 2
	if (o == 1 || o == 3) moveItem(items, 0, 2); // 3, 1, 2 or 2, 3, 1
	if (o == 5) return items.reverse();

	return items;
};

const Header = () => (
	<header class={style.header}>
		<img src="../style/music.svg" width="40" height="40" />
		<nav>
			{links().map((url, index) =>
				<Link activeClassName={style.active} href={url}>Testi {index+1}</Link>)}
		</nav>
	</header>
);

export default Header;
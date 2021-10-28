import { h } from 'preact';
import { Link } from 'preact-router/match';
import { moveItem } from '../../algorithms';
import style from './style.css';

const links = () => {
	// Shuffle menu order by fixed value (so we can have different order in each interview)

	const o = localStorage.getItem('menu_order');

	let items = ['/test-SdJPNgT', '/test-24FjShb', '/test-A5Ccg9x']; // 1-2-3

	if (o == 2) items = ['/test-SdJPNgT', '/test-A5Ccg9x', '/test-24FjShb']; // 1-3-2
	if (o == 3) items = ['/test-24FjShb', '/test-SdJPNgT', '/test-A5Ccg9x']; // 2-1-3
	if (o == 4) items = ['/test-24FjShb', '/test-A5Ccg9x', '/test-SdJPNgT']; // 2-3-1
	if (o == 5) items = ['/test-A5Ccg9x', '/test-SdJPNgT', '/test-24FjShb']; // 3-1-2

	if (o == 6) return items.reverse(); // 3-2-1

	return items;
};

const Header = () => (
	<header class={style.header}>
		<img src="../assets/music.svg" width="40" height="40" />
		<nav>
			{links().map((url, index) =>
				<Link activeClassName={style.active} href={url}>Testi {index+1}</Link>)}
		</nav>
	</header>
);

export default Header;
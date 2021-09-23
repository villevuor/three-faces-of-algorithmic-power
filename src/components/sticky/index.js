import { h } from 'preact';

import style from './style.css';

const Sticky = ({ children }) => (
	<p class={style.sticky}>{children}</p>
);

export default Sticky;

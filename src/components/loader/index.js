import { h } from 'preact';

import style from './style.css';

const Loader = () => (
	<div class={style.loaderWrapper}>
    <div class={style.loader}></div>
  </div>
);

export default Loader;

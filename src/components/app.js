import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import DirectPower from '../routes/direct';
import UndirectPower from '../routes/undirect';
import HiddenPower from '../routes/hidden';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<DirectPower path="/direct" />
			<UndirectPower path="/undirect" />
			<HiddenPower path="/hidden" />
		</Router>
	</div>
)

export default App;

import React from 'react';
import './App.css';
import Scrollable from './components/scrollable';

function App() {
	return (
		<div>
			<Scrollable title="Most Popular" />
			<Scrollable title="Top Comedy" />
		</div>
	);
}

export default App;
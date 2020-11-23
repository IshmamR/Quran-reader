import React from 'react';
import Reader from './components/Reader';
import logo from './imgs/quran-logo.png';

function App() {
  return (
	<div className="App">
		<div className="nav">
			<img className="logo" src={logo} alt="..." />
		</div>
		<Reader />
	</div>
  );
}

export default App;

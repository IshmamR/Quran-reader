import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Reader from './components/Reader';
import HadithReader from './components/HadithReader';
import logo from './imgs/quran-logo.png';

function App() {
  return (
	<div className="App">
		<BrowserRouter>
			<div className="nav">
				<Link to='/'>
					<img className="logo" src={logo} alt="..." />
				</Link>
				<h2 style={{color: 'white'}}>بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
				<div className='link'>
					<Link to="/hadith">Hadiths</Link>
				</div>
			</div>
			<Switch>
				<Route exact path='/' component={Reader} />
				<Route exact path='/hadith' component={HadithReader} />
			</Switch>
		</BrowserRouter>
	</div>
  );
}

export default App;

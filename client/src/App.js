import React, { useEffect, useState } from 'react';
import Header from './Header';
import DropDownMenu from './DropDownMenu';
import Categories from './Categories';
import './App.css';

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('/api')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setData(data.message);
			});
	}, []);

	return (
		<div className='App'>
			<Header />
			<nav className='navigation'>
				<DropDownMenu />
				<Categories />
			</nav>
		</div>
	);
}

export default App;

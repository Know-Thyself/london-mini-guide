import React, { useEffect, useState } from 'react';
import Header from './Header';
import DropDownMenu from './DropDownMenu';
import Categories from './Categories';
import UsefulInfoTable from './UsefulInfoTable';
import './App.css';

function App() {
	const [cityData, setCityData] = useState(null);
	const [selectedCity, setSelectedCity] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');

	useEffect(() => {
		if (selectedCity && selectedCategory) {
			let category = selectedCategory.toLowerCase();
			if (category.includes('&')) category = category.split(' ').slice(-1);
			fetch(`/api/${selectedCity}/${category}`)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setCityData(data);
				})
				.catch((err) => console.error(err));
		}
	}, [selectedCity, selectedCategory]);

	return (
		<div className='App'>
			<Header />
			<nav className='navigation'>
				<DropDownMenu
					selectedCity={selectedCity}
					setSelectedCity={setSelectedCity}
				/>
				<Categories
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
			</nav>
			<UsefulInfoTable cityData={cityData} />
		</div>
	);
}

export default App;

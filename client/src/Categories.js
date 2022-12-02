const Categories = ({
	selectedCategory,
	setSelectedCategory,
	selectedCity,
	setPage,
	setOpenAlert
}) => {
	const categories = [
		'Pharmacies',
		'Schools & Colleges',
		'Hospitals',
		'Doctors',
	];
	const changeHandler = (e) => {
		if (selectedCity === '') {
			setOpenAlert(true);
			setSelectedCategory('');
		} else {
			setPage(0);
			setSelectedCategory(e.target.value);
			window.scrollTo(0, 0);
		}
	};

	return (
		<div key='radio' className='radio-container'>
			{categories.map((category, index) => (
				<>
					<input
						className='radio-input'
						key={index}
						type='radio'
						value={category}
						name='selector'
						id={category}
						checked={selectedCategory === category}
						onChange={changeHandler}
					/>
					<label key={category} htmlFor={category} className='radio-label'>
						{category}
					</label>
				</>
			))}
		</div>
	);
};

export default Categories;

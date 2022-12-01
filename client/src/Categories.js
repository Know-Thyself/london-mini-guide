const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['Pharmacies', 'Schools & Colleges', 'Hospitals', 'Doctors'];
  const RadioButtonsToggler = (e) => {
    console.log(e.target.value)
    setSelectedCategory(e.target.value)
		// if (e.target.value === 'boys') {
		// 	return setBabyNames(boysCategory);
		// } else if (e.target.value === 'girls') setBabyNames(girlsCategory);
		// else if (e.target.value === 'boys & girls') setBabyNames(props.babyNames);
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
						onChange={(e) => {
							setSelectedCategory(e.target.value);
						}}
						onClick={RadioButtonsToggler}
					/>
					<label key={category} htmlFor={category} className='radio-label'>
						{category}
					</label>
				</>
			))}
		</div>
	);

}

export default Categories;
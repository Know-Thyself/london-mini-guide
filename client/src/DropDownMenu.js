import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function DropDownMenu({ selectedCity, setSelectedCity, setPage }) {
  const cities = ['Harrow', 'Heathrow', 'Stratford']

	const handleChange = (e) => {
    console.log(e.target.value)
		setSelectedCity(e.target.value);
		setPage(0);
	};

	return (
		<Box sx={{ minWidth: 140 }}>
			<FormControl fullWidth size='small'>
				<InputLabel id='select-label'>Select A City</InputLabel>
				<Select
					labelId='select-label'
					id='select'
					value={selectedCity}
					label='Select A City'
					onChange={handleChange}
					style={{ backgroundColor: 'aliceblue' }}
				>
					{cities.map((city, index) => (
						<MenuItem key={index} value={city}>
							{city}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}

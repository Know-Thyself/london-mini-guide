import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDownMenu({
	selectedCity,
	setSelectedCity,
	setPage,
}) {
	const cities = ['Harrow', 'Heathrow', 'Stratford'];
	const [select, setSelect] = React.useState('Select a City')

	const handleChange = (e) => {
		setSelect('');
		setSelectedCity(e.target.value);
		setPage(0);
	};

	return (
		<Box
			sx={{
				minWidth: 140,
				'& .MuiSvgIcon-root': {
					color: 'white',
				},
			}}
		>
			<FormControl
				sx={{ color: 'white', backgroundColor: '#8d99ae' }}
				fullWidth
				size='small'
				focused={false}
			>
				<InputLabel
					sx={{ color: 'white' }}
					id='select-label'
					disableAnimation={true}
					shrink={false}
				>
					{select}
				</InputLabel>
				<Select
					labelId='select-label'
					id='select'
					value={selectedCity}
					label='Select A City'
					onChange={handleChange}
					sx={{
						backgroundColor: '#2b2d42',
						color: 'white',
						'& .MuiMenuItem-gutters': {
							backgroundColor: 'white',
							color: 'white',
						},
					}}
					MenuProps={{
						PaperProps: {
							sx: {
								'& .MuiMenuItem-root.Mui-selected': {
									color: 'black',
									backgroundColor: '#edf2f4',
								},
								'& .MuiMenuItem-root.Mui-selected:hover': {
									backgroundColor: '#8d99ae',
								},
								'& .MuiMenuItem-root:hover': {
									backgroundColor: '#2b2d42',
									color: 'white',
								},
								'& .MuiList-root': {
									backgroundColor: '#edf2f4',
									color: 'black',
								},
							},
						},
					}}
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

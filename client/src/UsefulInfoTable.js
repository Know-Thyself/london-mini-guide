import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

export default function UsefulInfoTable({ cityData }) {
  console.log(cityData)
	return (
		<TableContainer component={Paper}>
			<Table sx={{ width: '90%', margin: 'auto' }} aria-label='customized table'>
				<TableHead>
					<TableRow className='table-row'>
						<StyledTableCell align='left'>#</StyledTableCell>
						<StyledTableCell align='left'>Name</StyledTableCell>
						<StyledTableCell align='right'>Phone</StyledTableCell>
						<StyledTableCell align='right'>Address</StyledTableCell>
						<StyledTableCell align='right'>Website</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{cityData &&
						cityData.map((row, index) => (
							<StyledTableRow key={index}>
								<StyledTableCell component='th' scope='row'>
									{index + 1}
								</StyledTableCell>
								<StyledTableCell component='th' scope='row'>
									{row.name}
								</StyledTableCell>
								<StyledTableCell align='center'>{row.phone}</StyledTableCell>
								<StyledTableCell align='right'>{row.address}</StyledTableCell>
								<StyledTableCell align='right'>
									{row.website ? <a href={row.website}>{row.name}</a> : 'N/A'}
								</StyledTableCell>
							</StyledTableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

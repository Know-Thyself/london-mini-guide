import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

function TablePaginationActions(props) {
	const theme = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;

	const handleFirstPageButtonClick = (event) => {
		onPageChange(event, 0);
	};

	const handleBackButtonClick = (event) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event) => {
		onPageChange(event, page + 1);
	};

	const handleLastPageButtonClick = (event) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<Box sx={{ flexShrink: 0, ml: 2.5 }}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label='first page'
			>
				{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label='previous page'
			>
				{theme.direction === 'rtl' ? (
					<KeyboardArrowRight />
				) : (
					<KeyboardArrowLeft />
				)}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label='next page'
			>
				{theme.direction === 'rtl' ? (
					<KeyboardArrowLeft />
				) : (
					<KeyboardArrowRight />
				)}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label='last page'
			>
				{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</Box>
	);
}

TablePaginationActions.propTypes = {
	count: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
		fontFamily: 'Source Sans Pro',
		fontSize: 16,
		fontWeight: '700',
	},
	[`&.${tableCellClasses.body}`]: {
		fontFamily: 'Montserrat',
		fontSize: 14,
		fontWeight: '600',
		height: '3rem',
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

export default function CityInfoTable({ cityData, page, setPage }) {
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - cityData.length) : 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<TableContainer component={Paper} sx={{ width: '95%', margin: 'auto' }}>
			<Table aria-label='custom pagination table'>
				<TableHead>
					<TableRow>
						<StyledTableCell
							style={{ width: '5%', borderRight: 'solid 2px grey' }}
							align='center'
						>
							#
						</StyledTableCell>
						<StyledTableCell
							style={{ width: '25%', borderRight: 'solid 2px grey' }}
							align='center'
						>
							Name
						</StyledTableCell>
						<StyledTableCell
							style={{ width: '15%', borderRight: 'solid 2px grey' }}
							align='center'
						>
							Phone
						</StyledTableCell>
						<StyledTableCell
							style={{ width: '30%', borderRight: 'solid 2px grey' }}
							align='center'
						>
							Address
						</StyledTableCell>
						<StyledTableCell style={{ width: '25%' }} align='center'>
							Website
						</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{cityData &&
						(rowsPerPage > 0
							? cityData.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
							  )
							: cityData
						).map((row, idx) => (
							<StyledTableRow>
								<StyledTableCell
									component='th'
									scope='row'
									align='left'
									style={{ width: '5%', borderRight: 'solid 2px grey' }}
								>
									{cityData ? cityData.indexOf(row) + 1 : null}
								</StyledTableCell>
								<StyledTableCell
									align='left'
									component='th'
									scope='row'
									style={{
										width: '25%',
										borderRight: 'solid 2px grey',
									}}
								>
									{row.name}
								</StyledTableCell>
								<StyledTableCell
									align='center'
									scope='row'
									style={{ width: '15%', borderRight: 'solid 2px grey' }}
								>
									{row.phone ? row.phone : 'N/A'}
								</StyledTableCell>
								<StyledTableCell
									align='left'
									scope='row'
									style={{ width: '30%', borderRight: 'solid 2px grey' }}
								>
									{row.address}
								</StyledTableCell>
								<StyledTableCell
									align='left'
									scope='row'
									style={{ width: '25%' }}
								>
									{row.website && row.website !== '#' ? (
										<a
											href={row.website}
											target='_blank'
											rel='noreferrer noopener'
											style={{ textDecoration: 'none' }}
										>
											{row.name}
										</a>
									) : (
										'N/A'
									)}
								</StyledTableCell>
							</StyledTableRow>
						))}

					{emptyRows > 0 && (
						<TableRow style={{ height: 53 * emptyRows }}>
							<TableCell colSpan={6} />
						</TableRow>
					)}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TablePagination
							sx={{ backgroundColor: '#edf2f4' }}
							rowsPerPageOptions={[5, 10, 15, 20, { label: 'All', value: -1 }]}
							colSpan={5}
							count={cityData ? cityData.length : 0}
							rowsPerPage={rowsPerPage}
							page={page}
							SelectProps={{
								inputProps: {
									'aria-label': 'rows per page',
								},
								native: true,
							}}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
							ActionsComponent={TablePaginationActions}
						/>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	);
}

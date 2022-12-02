import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';

export default function InfoAlert({ openAlert, setOpenAlert }) {
	return (
		<Box sx={{ width: 'max-content' }}>
				<Collapse in={openAlert}>
					<Alert
						severity='info'
						action={
							<IconButton
								aria-label='close'
								color='inherit'
								size='small'
								onClick={() => {
									setOpenAlert(false);
								}}
							>
								<CloseIcon fontSize='inherit' />
							</IconButton>
						}
						sx={{ mb: 2 }}
					>
						<strong>Please select a city first</strong>
					</Alert>
				</Collapse>
		</Box>
	);
}

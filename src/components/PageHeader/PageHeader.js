import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import AuthButton from '../AuthButton';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { withFirebase, withAuth } from '../hoc';

import './PageHeader.css';

const PageHeader = ({ isAuth, login, logout }) => {

	return (
		<Box component="header" className="page-header">
			<Container>
				<Grid container alignItems="center" justify="space-between">
					<Grid>
						<Link to="/">
							<Logo />
						</Link>
					</Grid>
					<Grid>
						<AuthButton isAuth={isAuth}
												login={login}
												logout={logout}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
	
};

PageHeader.propTypes = {
	isAuth: PropTypes.bool,
	login: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired
};

export default withFirebase(
								withAuth(PageHeader)
							);
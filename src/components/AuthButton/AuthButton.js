import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const AuthButton = ({ isAuth, login, logout}) => {

	if (isAuth) {
		return (
			<Button variant="contained"
							color="secondary"
							onClick={logout}
			>
				Log out
			</Button>
		);
	}

	return (
		<Button variant="contained"
						color="primary"
						onClick={login}
		>
			Sign in
		</Button>
	);

};

AuthButton.propTypes = {
	isAuth: PropTypes.bool,
	login: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired
};

export default AuthButton;
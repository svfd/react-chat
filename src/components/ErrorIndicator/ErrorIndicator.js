import React from 'react';

import errorIcon from './ErrorIndicator.svg';
import './ErrorIndicator.css';

const ErrorIndicator = () => {

	return (
		<div className="error-indicator">
			<img className="error-indicator-img" src={errorIcon} alt="error icon" />
			<h3 className="error-indicator-title">
				Something went wrong...
			</h3>
			<p className="error-indicator-subtitle">
				But we have already fixing it
			</p>
		</div>
	);

};

export default ErrorIndicator;
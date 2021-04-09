import React from 'react';

import './WelcomeMessage.css';

const WelcomeMessage = () => {

	return (
		<div className="welcome-message">
			<h2 className="welcome-message-title">
				Welcome!
			</h2>
			<p className="welcome-message-subtitle">
				Please login or register to start using this app
			</p>
		</div>
	);

}

export default WelcomeMessage;
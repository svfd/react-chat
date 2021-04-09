import React from 'react';

import logo from './Logo.svg';
import './Logo.css';

const Logo = () => {

	return (
		<img className="logo" 
					src={logo}
					width="100"
					height="80"
					alt="Chat App logo"
		/>
	);

};

export default Logo;
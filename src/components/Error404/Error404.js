import React from 'react';

import ErrorImg from './Error404.svg';
import './Error404.css';

const Error404 = () => {

	return (
		<section className="error404">
			<div className="error404-wrapper">
				<h3 className="error404-title">Aw, you have gotten a wrong page...</h3>
				<img className="error404-img" src={ErrorImg} alt="page error" />
			</div>
		</section>
	);

};

export default Error404;
import React from 'react';
import Container from '@material-ui/core/Container';

import WelcomeMessage from '../WelcomeMessage';

const HomePage  = () => {

	return (
		<main>
			<Container>
				<WelcomeMessage />
			</Container>
		</main>

	);

};

export default HomePage;
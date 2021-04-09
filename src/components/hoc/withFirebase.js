import React from 'react';
import { FirebaseServiceConsumer } from '../firebaseContext';

const withFirebase = (Wrapped) => {
	return (props) => {
		return (
			<FirebaseServiceConsumer>
				{
					(firebase) => {
						return (
							<Wrapped {...props} firebase={firebase} />
						);
					}
				}
			</FirebaseServiceConsumer>
		);
	};
};

export default withFirebase;
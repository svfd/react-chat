import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ErrorIndicator from '../ErrorIndicator';

const withAuth = (View) => {

	return (props) => {

		const firebase = props.firebase;
		
		const [user, , error] = useAuthState(firebase.auth());

		const isAuth = user ? true : false;

		const _transformUser = () => {

			if (!user) {
				return {};
			}

			return {
				avatar: user.photoURL,
				name: user.displayName,
				email: user.email,
				uid: user.uid
			};

		};

		const login = async () => {
			try {
				const provider = new firebase.auth.GoogleAuthProvider();
				await firebase.auth().signInWithPopup(provider);
			} catch(err) {
				alert('Ooops.. authorization error, please try again');
			}
		};

		const logout = () => firebase.auth().signOut();

		if (error) {
			return <ErrorIndicator />;
		}

		const transformedUser = _transformUser();

		return (
			<View {...props}
						isAuth={isAuth}
						user={transformedUser}
						login={login}
						logout={logout}
			/>
		);

	}	

}

export default withAuth;
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { withFirebase, withAuth } from '../hoc';
import { HomePage, ChatPage, ErrorPage } from '../Pages';

import PageHeader from '../PageHeader';

import 'fontsource-roboto';
import 'normalize.css';
import './App.css';

const App = ({ isAuth }) => {

	const content = isAuth ? ChatPage : HomePage;

	return (
		<React.Fragment>
			<PageHeader isAuth={isAuth} />
			<Switch>
				<Route path="/" component={content} exact />
				<Route component={ErrorPage} />
			</Switch>
		</React.Fragment>
	);

};

export default withFirebase(
								withAuth(App)
							);
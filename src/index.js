import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundry from './components/ErrorBoundry';
import App from './components/App';

import { FirebaseServiceProvider } from './components/firebaseContext';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { firebaseConfig } from './utils';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <ErrorBoundry>
    <FirebaseServiceProvider value={firebase}>
      <Router>
        <App />
      </Router>
    </FirebaseServiceProvider>
  </ErrorBoundry>,
  document.getElementById('root')
);
import React from 'react';
import { useObject } from 'react-firebase-hooks/database';
import ErrorIndicator from '../ErrorIndicator';

const withDatabase = (View) => {

	return (props) => {

		const database = props.firebase.database();
		const messagesRef = database.ref('messages');

		const [ snapshot, loading, error ] = useObject(messagesRef);

		const writeMessage = ({uid, name, avatar}) => (message) => {

			try {

				messagesRef.push({
					uid,
					name,
					avatar,
					message,
					key: messagesRef.push().key,
					timestamp: Date.now()
				});

			} catch(err) {
				alert('Message send failure...');
			}

		};

		let messages = [];

		if (snapshot) {

			snapshot.forEach((snap) => {
				messages.push(snap.val());
			});

		}

		if (error) {
			return <ErrorIndicator />;
		}

		return (
			<View {...props}
						loading={loading}
						messages={messages}
						writeMessage={writeMessage}
			/>
		);

	}	

}

export default withDatabase;
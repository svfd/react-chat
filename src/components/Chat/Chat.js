import React from 'react';
import PropTypes from 'prop-types';

import { withFirebase, withAuth, withDatabase } from '../../components/hoc';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import MessageList from '../MessageList';
import MessageForm from '../MessageForm';
import Spinner from '../Spinner';

import './Chat.css';

const Chat = ({ loading, messages, user, writeMessage }) => {

	const { uid: userUid } = user;

	const spinner = loading ? <Spinner /> : null;
	const content = !loading ? <MessageList messages={messages}
																					userUid={userUid} />
															: null;

	const writeMessageWithUserData = writeMessage(user);

	return (
		<Box className="chat">
			<Grid container className="chat-wrapper" direction="column" justify="space-between" wrap="nowrap">
				<Box className="chat-messages">
					{spinner}
					{content}
				</Box>
				<MessageForm writeMessage={writeMessageWithUserData} />
			</Grid>
		</Box>
	);
};

Chat.propTypes = {
	loading: PropTypes.bool.isRequired,
	messages: PropTypes.array.isRequired,
	writeMessage: PropTypes.func.isRequired,
	user: PropTypes.shape({
		uid: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired
	})
};

export default withFirebase(
								withAuth(
									withDatabase(Chat)
								)
							);
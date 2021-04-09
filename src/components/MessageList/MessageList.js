import React, { useEffect, useRef } from 'react';

import { autoScrollChat, formatDate } from '../../utils';

import './MessageList.css';

const MessageList = ({ messages, userUid }) => {

	const messageRef = useRef();

	useEffect(() => {

		autoScrollChat(messageRef);

	}, [messages, messageRef]);

	const createMessage = ({ message, avatar, name, timestamp, uid, key }) => {

		const { hours, minutes } = formatDate(timestamp);

		const isUserMessage = uid === userUid;

		return (
			<li key={key} ref={messageRef} className={`message-item ${isUserMessage && 'message-from-user'}`}>
				<img className="message-avatar" src={avatar} width="50" height="50" alt={name} />
				<p className={`message-text ${isUserMessage && 'message-text-from-user'}`}>
					{message}
					<span className="message-time">{hours}:{minutes}</span>
				</p>
			</li>
		);

	}

	const content = messages.length ?
									<ul className="message-list">{messages.map(createMessage)}</ul> :
									<p className="empty-message-list">There are no messages yet</p>

	return content;
};

export default MessageList;
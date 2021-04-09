import React, { useState } from 'react';

import './MessageForm.css';

const MessageForm = ({ writeMessage }) => {

	const [ messageValue, setMessageValue ] = useState('');
	const [ isFieldError, setFieldError ] = useState(false);

	const updateMessageState = (value) => {
		setMessageValue(value);
		setFieldError(false);
	};

	const validateField = (value) => {

		value = value.trim();

		if (value.length === 0) {
			setFieldError(true);
			return true;
		}

		return false;
	};

	const submitForm = (evt) => {

		evt.preventDefault();

		const isError = validateField(messageValue);

		if (isError) {
			return;
		}

		writeMessage(messageValue);

		updateMessageState('');
	};

	return (

		<form onSubmit={submitForm}>
			<p className="field-wrap">
				<input className={`message-form-input ${isFieldError ? 'message-form-error' : ''}`}
								placeholder="Type your message here"
								value={messageValue}
								onChange={(evt) => updateMessageState(evt.target.value)}
				/>
				<button className="message-form-button"
								aria-label="send message"
				>
				</button>
			</p>
		</form>

	);

};

export default MessageForm;
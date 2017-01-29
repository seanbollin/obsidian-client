import React, { Component } from 'react';

class MessageList extends Component {
	constructor(props) {
		super(props);
		const messages = props.messages;
    this.state = {
      listMessages: messages.map((message) => <li key={message}>{message}</li>)
    };
	}

	render() {
		return (
			<ul>{this.state.listMessages}</ul>
		);
	}
}

export default MessageList;
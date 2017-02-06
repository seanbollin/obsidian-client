import React, { Component } from 'react';

class MessageList extends Component {
	constructor(props) {
		super(props);
		const messages = props.messages;
    	this.state = {
      		listMessages: messages.map((message, i) => <li key={i}>{message}</li>)
    	};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({listMessages: nextProps.messages.map((message, i) => <li key={i}>{message}</li>)});
	}

	render() {
		return (
			<ul>{this.state.listMessages}</ul>
		);
	}
}

export default MessageList;
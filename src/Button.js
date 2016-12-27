import React, { Component } from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('hello');
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				Send to server
			</button>
		);
	}
}

export default Button;
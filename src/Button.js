import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {text: props.text};
	}

	render() {
		return (
			<button className={this.props.class} onClick={this.props.onClick}>
				{this.state.text}
			</button>
		);
	}
}

export default Button;
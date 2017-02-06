import React, { Component } from 'react';
import Button from './Button'
import MessageList from './MessageList'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      responses: []
    }

    this.connect = this.connect.bind(this);
    this.send = this.send.bind(this);
    this.disconnect = this.disconnect.bind(this);
  }

  componentDidMount() {
    if (typeof WebSocket !== "undefined") this.connect();
  }

  connect() {
    this.socket = new WebSocket("ws://159.203.196.212:33435");
    
    this.socket.onmessage =  (e) => { 
      console.log(e.data);
      const responses = this.state.responses.slice();
      responses.push(e.data);
      this.setState({responses: responses});
    };
  }

  send() {
    // TODO: check connection available, re-connect if not?
    this.socket.send("Hello from obsidian-client!");
  }

  disconnect() {
    this.socket.close();
  }

  render() {
    return (
      <div className="App">
        <Button text="Send" class="send" onClick={() => this.send()} />
        <Button text="Disconnect" onClick={() => this.disconnect()} />
        <MessageList messages={this.state.responses} />
      </div>
    );
  }
}

export default App;

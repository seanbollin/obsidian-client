import * as React from 'react';
import Button from './Button'
import MessageList from './MessageList'
import './App.css';

interface Props {
  responses: Array<any>;
  connectToServer: () => void;
}

function App({ connectToServer, responses }: Props) {
  connectToServer();
  return (
    <div className="app">
      <Button text="Send" className="send" onClick={() => {}} />
      <Button text="Disconnect" className="disconnect" onClick={() => {}} />
      <MessageList responses={responses} />
    </div>
  );
}

export default App;

// componentDidMount() {
//   if (typeof WebSocket !== "undefined") this.connect();
// }
//
// connect() {
//   this.socket = new WebSocket("ws://159.203.196.212:33435");
//
//   this.socket.onmessage = (e) => {
//     console.log('Received message from server: ' + e.data);
//     const responses = this.state.responses.slice();
//     responses.push(e.data);
//     this.setState({responses: responses});
//   };
// }
//
// send() {
//   // TODO: check connection available, re-connect if not?
//   this.socket.send("Hello from obsidian-client!");
// }
//
// disconnect() {
//   this.socket.close();
// }

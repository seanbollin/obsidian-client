import {StoreState} from '../types/index';
import {CONNECT_TO_SERVER, RECEIVE_FROM_SERVER, SEND_TO_SERVER} from '../constants/index';
import {ServerMessage, SendMessage, ReceiveMessage} from '../actions/index';

export function messages(state: StoreState, action: ServerMessage): StoreState {
  switch (action.type) {
    case CONNECT_TO_SERVER:
      const socket = new WebSocket('ws://159.203.196.212:33435');
      socket.onmessage = (e) => {
        console.log('Received message from server: ' + e.data);
        // const responses = this.state.responses.slice();
        // responses.push(e.data);
        // this.setState({responses: responses});
      };
      return { ...state, socket: socket };

    case SEND_TO_SERVER:
      if (state.socket) {
        const msg = (action as SendMessage).msg;
        console.log("Sending ", msg);
        state.socket.send(msg);
      } else {
        throw "Not connected to the server.";
      }

      return { ...state };

    case RECEIVE_FROM_SERVER:
      const newResponses = state.responses.slice();
      const msg = (action as ReceiveMessage).msg;
      newResponses.push(msg);
      return { ...state, responses: newResponses };

    default:
      return { ...state };
  }
}
import {StoreState} from '../types/index';
import {CONNECT_TO_SERVER, RECEIVE_MESSAGE, SEND_MESSAGE} from '../constants/index';
import {ServerMessage} from '../actions/index';

export function messages(state: StoreState, action: ServerMessage): StoreState {
  switch (action.type) {
    case CONNECT_TO_SERVER:
      return { ...state, socket: new WebSocket('ws://159.203.196.212:33435') };
    case SEND_MESSAGE:
      return { ...state };
    case RECEIVE_MESSAGE:
      const newResponses = state.responses.slice();
      newResponses.push(action.data);
      return { ...state, responses: newResponses };
    default:
      return { ...state };
  }
}
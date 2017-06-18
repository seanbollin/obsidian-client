import {StoreState} from '../types/index';
import {CONNECT_TO_SERVER, RECEIVE_MESSAGE, SEND_MESSAGE} from '../constants/index';

export function messages(state: StoreState, action: any): StoreState {
  switch (action.type) {
    case CONNECT_TO_SERVER:
      return { ...state };
    case SEND_MESSAGE:
      return { ...state };
    case RECEIVE_MESSAGE:
      const newResponses = state.responses.slice();
      newResponses.push(action.data);
      return { ...state, responses: newResponses };
    default:
      throw Error('Invalid or unimplemented action received: ' + action.type);
  }
}
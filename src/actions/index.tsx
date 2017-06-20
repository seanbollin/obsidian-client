import * as constants from '../constants';

export interface ConnectToServer {
  type: constants.CONNECT_TO_SERVER;
}

export interface SendMessage {
  type: constants.SEND_MESSAGE;
  data: any;
}

export interface ReceiveMessage {
  type: constants.RECEIVE_MESSAGE;
  data: any;
}

export type ServerMessage = ConnectToServer | SendMessage | ReceiveMessage;

export function connectToServer(): ConnectToServer {
  return {
    type: constants.CONNECT_TO_SERVER
  };
}

export function sendMessage(msg: any): SendMessage {
  return {
    type: constants.SEND_MESSAGE,
    data: msg
  };
}

export function receiveMessage(msg: any): ReceiveMessage {
  return {
    type: constants.RECEIVE_MESSAGE,
    data: msg
  };
}
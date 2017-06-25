import * as constants from '../constants';

export interface ConnectMessage {
  type: constants.CONNECT_TO_SERVER;
}

export interface DisconnectMessage {
  type: constants.SEND_TO_SERVER;
}

export interface ReceiveMessage {
  type: constants.RECEIVE_FROM_SERVER;
  msg: any;
}

export interface SendMessage {
  type: constants.SEND_TO_SERVER;
  msg: any;
}

export type ServerMessage = ConnectMessage | DisconnectMessage | ReceiveMessage | SendMessage;

export function connectToServer(): ConnectMessage {
  return {
    type: constants.CONNECT_TO_SERVER
  };
}

export function disconnectFromServer(): ConnectMessage {
  return {
    type: constants.CONNECT_TO_SERVER
  };
}

export function sendToServer(msg: any): SendMessage {
  return {
    type: constants.SEND_TO_SERVER,
    msg: msg
  };
}

export function receiveFromServer(msg: any): ReceiveMessage {
  return {
    type: constants.RECEIVE_FROM_SERVER,
    msg: msg
  };
}
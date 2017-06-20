export interface StoreState {
  readonly socket?: WebSocket;
  responses: Array<any>;
}

type MessageKey = 'GET_CONFIG';

export interface IMessage<T = any> {
  key: MessageKey;
  payload?: T;
}

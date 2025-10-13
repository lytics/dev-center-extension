import { IMessage } from './types';

export class MessageBroker {
  constructor(private readonly browser: typeof chrome) {}

  async send<T>(message: IMessage): Promise<T> {
    return await this.browser.runtime.sendMessage(message);
  }

  handle<T>(key: IMessage['key'], handler: (message: IMessage) => Promise<T>): void {
    this.browser.runtime.onMessage.addListener((incomingMessage: IMessage, sender, sendResponse) => {
      if (incomingMessage.key === key) {
        Promise.resolve(handler(incomingMessage))
          .then(result => sendResponse(result))
          .catch(error => sendResponse(error.message));

        return true;
      }
    });
  }

  async sendToTab<T>(tabId: number, message: IMessage): Promise<T> {
    return await this.browser.tabs.sendMessage(tabId, message);
  }
}

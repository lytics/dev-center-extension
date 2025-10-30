import { IMessage } from './types';

export class MessageBroker {
  constructor(private readonly browser: typeof chrome) {}

  async send<T>(message: IMessage): Promise<T> {
    if (!message || !message.key) {
      throw new Error('Invalid message: key is required');
    }

    try {
      if (!this.browser?.runtime) {
        throw new Error('Chrome runtime is not available');
      }

      const response = await this.browser.runtime.sendMessage(message);

      if (this.browser.runtime.lastError) {
        throw new Error(this.browser.runtime.lastError.message || 'Unknown runtime error');
      }

      if (response.error) {
        throw new Error(response.error);
      }

      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

      if (errorMessage.includes('Receiving end does not exist')) {
        throw new Error('Message receiver not available. The extension context may have been invalidated.');
      }

      if (errorMessage.includes('Extension context invalidated')) {
        throw new Error('Extension context has been invalidated. Please reload the extension.');
      }

      throw new Error(`Failed to send message: ${errorMessage}`);
    }
  }

  handle<T>(key: IMessage['key'], handler: (message: IMessage) => Promise<T>): void {
    this.browser.runtime.onMessage.addListener((incomingMessage: IMessage, sender, sendResponse) => {
      if (incomingMessage?.key === key) {
        Promise.resolve(handler(incomingMessage))
          .then(result => {
            sendResponse(result);
          })
          .catch(error => {
            const errorResponse = {
              error: error instanceof Error ? error.message : 'Unknown error occurred',
            };
            sendResponse(errorResponse);
          });

        return true;
      }
    });
  }

  async sendToTab<T>(tabId: number, message: IMessage): Promise<T> {
    if (!Number.isInteger(tabId) || tabId < 0) {
      throw new Error('Invalid tabId: must be a positive integer');
    }

    if (!message || !message.key) {
      throw new Error('Invalid message: key is required');
    }

    try {
      if (!this.browser?.tabs) {
        throw new Error('Chrome tabs API is not available');
      }

      const response = await this.browser.tabs.sendMessage(tabId, message);

      if (this.browser.runtime.lastError) {
        throw new Error(this.browser.runtime.lastError.message || 'Unknown runtime error');
      }

      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

      if (errorMessage.includes('Receiving end does not exist')) {
        throw new Error(`Tab ${tabId} is not available or does not have a message receiver`);
      }

      if (errorMessage.includes('No tab with id')) {
        throw new Error(`Tab with id ${tabId} does not exist`);
      }

      throw new Error(`Failed to send message to tab ${tabId}: ${errorMessage}`);
    }
  }
}

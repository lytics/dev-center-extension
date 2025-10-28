import { beforeEach, describe, expect, it, type MockedFunction, vi } from 'vitest';

import { MessageBroker } from './broker';
import { IMessage } from './types';

describe('MessageBroker', () => {
  let mockBrowser: typeof chrome;
  let mockSendMessage: MockedFunction<(message: any) => Promise<any>>;
  let mockTabsSendMessage: MockedFunction<(tabId: number, message: any) => Promise<any>>;

  beforeEach(() => {
    vi.clearAllMocks();

    mockSendMessage = vi.fn().mockResolvedValue({});
    mockTabsSendMessage = vi.fn().mockResolvedValue({});

    mockBrowser = {
      runtime: {
        sendMessage: mockSendMessage as any,
        lastError: undefined,
        onMessage: {
          addListener: vi.fn() as any,
        } as any,
      },
      tabs: {
        sendMessage: mockTabsSendMessage as any,
      } as any,
    } as unknown as typeof chrome;
  });

  describe('send', () => {
    it('sends message successfully and returns response', async () => {
      const mockResponse = { success: true, data: 'test' };
      mockSendMessage.mockResolvedValue(mockResponse);
      const broker = new MessageBroker(mockBrowser);

      const result = await broker.send({ key: 'GET_CONFIG' });

      expect(result).toEqual(mockResponse);
      expect(mockSendMessage).toHaveBeenCalledWith({ key: 'GET_CONFIG' });
      expect(mockSendMessage).toHaveBeenCalledTimes(1);
    });

    it('throws error when message has no key', async () => {
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.send({} as IMessage)).rejects.toThrow('Invalid message: key is required');
      expect(mockSendMessage).not.toHaveBeenCalled();
    });

    it('throws error when message is null', async () => {
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.send(null as unknown as IMessage)).rejects.toThrow('Invalid message: key is required');
      expect(mockSendMessage).not.toHaveBeenCalled();
    });

    it('throws error when chrome runtime is not available', async () => {
      const browserWithoutRuntime = {} as typeof chrome;
      const broker = new MessageBroker(browserWithoutRuntime);

      await expect(broker.send({ key: 'GET_CONFIG' })).rejects.toThrow('Chrome runtime is not available');
    });

    it('throws error when chrome runtime.lastError is set', async () => {
      mockSendMessage.mockResolvedValue({});
      mockBrowser.runtime.lastError = { message: 'Runtime error occurred' };
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.send({ key: 'GET_CONFIG' })).rejects.toThrow('Runtime error occurred');
    });

    it('throws error when chrome runtime.lastError has no message', async () => {
      mockSendMessage.mockResolvedValue({});
      mockBrowser.runtime.lastError = {} as chrome.runtime.LastError;
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.send({ key: 'GET_CONFIG' })).rejects.toThrow('Unknown runtime error');
    });

    it('throws error when response contains error property', async () => {
      mockSendMessage.mockResolvedValue({ error: 'Custom error message' });
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.send({ key: 'GET_CONFIG' })).rejects.toThrow('Custom error message');
    });

    it('throws specific error for "Receiving end does not exist"', async () => {
      mockSendMessage.mockRejectedValue(new Error('Receiving end does not exist'));
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.send({ key: 'GET_CONFIG' })).rejects.toThrow(
        'Message receiver not available. The extension context may have been invalidated.',
      );
    });

    it('throws specific error for "Extension context invalidated"', async () => {
      mockSendMessage.mockRejectedValue(new Error('Extension context invalidated'));
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.send({ key: 'GET_CONFIG' })).rejects.toThrow(
        'Extension context has been invalidated. Please reload the extension.',
      );
    });

    it('throws generic error for unknown errors', async () => {
      mockSendMessage.mockRejectedValue(new Error('Unknown error'));
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.send({ key: 'GET_CONFIG' })).rejects.toThrow('Failed to send message: Unknown error');
    });

    it('handles non-Error thrown values', async () => {
      mockSendMessage.mockRejectedValue('String error');
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.send({ key: 'GET_CONFIG' })).rejects.toThrow(
        'Failed to send message: Unknown error occurred',
      );
    });
  });

  describe('handle', () => {
    let mockAddListener: MockedFunction<(callback: (...args: any[]) => any) => void>;

    beforeEach(() => {
      mockAddListener = vi.fn();
      mockBrowser.runtime.onMessage = {
        addListener: mockAddListener,
      } as any;
    });

    it('registers a message listener for the specified key', () => {
      const broker = new MessageBroker(mockBrowser);
      const mockHandler = vi.fn().mockResolvedValue({ success: true });

      broker.handle('GET_CONFIG', mockHandler);

      expect(mockAddListener).toHaveBeenCalledTimes(1);
      expect(mockAddListener).toHaveBeenCalledWith(expect.any(Function));
    });

    it('calls handler when message with matching key is received', async () => {
      const broker = new MessageBroker(mockBrowser);
      const mockHandler = vi.fn().mockResolvedValue({ success: true });
      const mockSendResponse = vi.fn();

      broker.handle('GET_CONFIG', mockHandler);

      const listener = mockAddListener.mock.calls[0][0] as (
        message: any,
        sender: any,
        sendResponse: (response?: any) => void,
      ) => boolean | undefined;
      const result = listener({ key: 'GET_CONFIG', payload: 'test' }, {}, mockSendResponse);

      expect(result).toBe(true);
      await vi.waitFor(() => {
        expect(mockHandler).toHaveBeenCalledWith({ key: 'GET_CONFIG', payload: 'test' });
        expect(mockSendResponse).toHaveBeenCalledWith({ success: true });
      });
    });

    it('does not call handler when message key does not match', () => {
      const broker = new MessageBroker(mockBrowser);
      const mockHandler = vi.fn().mockResolvedValue({ success: true });
      const mockSendResponse = vi.fn();

      broker.handle('GET_CONFIG', mockHandler);

      const listener = mockAddListener.mock.calls[0][0] as (
        message: any,
        sender: any,
        sendResponse: (response?: any) => void,
      ) => boolean | undefined;
      const result = listener({ key: 'OTHER_KEY', payload: 'test' }, {}, mockSendResponse);

      expect(result).toBeUndefined();
      expect(mockHandler).not.toHaveBeenCalled();
      expect(mockSendResponse).not.toHaveBeenCalled();
    });

    it('sends error response when handler throws error', async () => {
      const broker = new MessageBroker(mockBrowser);
      const mockHandler = vi.fn().mockRejectedValue(new Error('Handler error'));
      const mockSendResponse = vi.fn();

      broker.handle('GET_CONFIG', mockHandler);

      const listener = mockAddListener.mock.calls[0][0] as (
        message: any,
        sender: any,
        sendResponse: (response?: any) => void,
      ) => boolean | undefined;
      listener({ key: 'GET_CONFIG' }, {}, mockSendResponse);

      await vi.waitFor(() => {
        expect(mockSendResponse).toHaveBeenCalledWith({ error: 'Handler error' });
      });
    });

    it('sends generic error response when handler throws non-Error value', async () => {
      const broker = new MessageBroker(mockBrowser);
      const mockHandler = vi.fn().mockRejectedValue('String error');
      const mockSendResponse = vi.fn();

      broker.handle('GET_CONFIG', mockHandler);

      const listener = mockAddListener.mock.calls[0][0] as (
        message: any,
        sender: any,
        sendResponse: (response?: any) => void,
      ) => boolean | undefined;
      listener({ key: 'GET_CONFIG' }, {}, mockSendResponse);

      await vi.waitFor(() => {
        expect(mockSendResponse).toHaveBeenCalledWith({ error: 'Unknown error occurred' });
      });
    });
  });

  describe('sendToTab', () => {
    it('sends message to tab successfully', async () => {
      const mockResponse = { success: true, data: 'test' };
      mockTabsSendMessage.mockResolvedValue(mockResponse);
      const broker = new MessageBroker(mockBrowser);

      const result = await broker.sendToTab(123, { key: 'GET_CONFIG' });

      expect(result).toEqual(mockResponse);
      expect(mockTabsSendMessage).toHaveBeenCalledWith(123, { key: 'GET_CONFIG' });
      expect(mockTabsSendMessage).toHaveBeenCalledTimes(1);
    });

    it('throws error when tabId is negative', async () => {
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.sendToTab(-1, { key: 'GET_CONFIG' })).rejects.toThrow(
        'Invalid tabId: must be a positive integer',
      );
      expect(mockTabsSendMessage).not.toHaveBeenCalled();
    });

    it('throws error when tabId is not an integer', async () => {
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.sendToTab(123.45, { key: 'GET_CONFIG' })).rejects.toThrow(
        'Invalid tabId: must be a positive integer',
      );
      expect(mockTabsSendMessage).not.toHaveBeenCalled();
    });

    it('throws error when message has no key', async () => {
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.sendToTab(123, {} as IMessage)).rejects.toThrow('Invalid message: key is required');
      expect(mockTabsSendMessage).not.toHaveBeenCalled();
    });

    it('throws error when message is null', async () => {
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.sendToTab(123, null as unknown as IMessage)).rejects.toThrow(
        'Invalid message: key is required',
      );
      expect(mockTabsSendMessage).not.toHaveBeenCalled();
    });

    it('throws error when chrome tabs API is not available', async () => {
      const browserWithoutTabs = {
        runtime: mockBrowser.runtime,
      } as typeof chrome;
      const broker = new MessageBroker(browserWithoutTabs);

      await expect(broker.sendToTab(123, { key: 'GET_CONFIG' })).rejects.toThrow('Chrome tabs API is not available');
    });

    it('throws error when chrome runtime.lastError is set', async () => {
      mockTabsSendMessage.mockResolvedValue({});
      mockBrowser.runtime.lastError = { message: 'Tab error occurred' };
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.sendToTab(123, { key: 'GET_CONFIG' })).rejects.toThrow('Tab error occurred');
    });

    it('throws error when chrome runtime.lastError has no message', async () => {
      mockTabsSendMessage.mockResolvedValue({});
      mockBrowser.runtime.lastError = {} as chrome.runtime.LastError;
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.sendToTab(123, { key: 'GET_CONFIG' })).rejects.toThrow('Unknown runtime error');
    });

    it('throws specific error for "Receiving end does not exist" in tab', async () => {
      mockTabsSendMessage.mockRejectedValue(new Error('Receiving end does not exist'));
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.sendToTab(123, { key: 'GET_CONFIG' })).rejects.toThrow(
        'Tab 123 is not available or does not have a message receiver',
      );
    });

    it('throws specific error for "No tab with id"', async () => {
      mockTabsSendMessage.mockRejectedValue(new Error('No tab with id: 999'));
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.sendToTab(999, { key: 'GET_CONFIG' })).rejects.toThrow('Tab with id 999 does not exist');
    });

    it('throws generic error for unknown errors', async () => {
      mockTabsSendMessage.mockRejectedValue(new Error('Unknown tab error'));
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.sendToTab(123, { key: 'GET_CONFIG' })).rejects.toThrow(
        'Failed to send message to tab 123: Unknown tab error',
      );
    });

    it('handles non-Error thrown values', async () => {
      mockTabsSendMessage.mockRejectedValue('String error');
      const broker = new MessageBroker(mockBrowser);

      await expect(broker.sendToTab(123, { key: 'GET_CONFIG' })).rejects.toThrow(
        'Failed to send message to tab 123: Unknown error occurred',
      );
    });
  });
});

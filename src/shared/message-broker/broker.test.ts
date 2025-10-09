import { type MockedFunction, vi } from 'vitest';

import { MessageBroker } from './broker';

const mockChrome = {
  runtime: {
    sendMessage: vi.fn(),
  },
} as unknown as typeof chrome;

const mockBrowser = mockChrome;

describe('MessageBroker', () => {
  describe('send', () => {
    it('calls sends message to background', async () => {
      const mockResponse = { success: true, tag: '' };
      (mockBrowser.runtime.sendMessage as MockedFunction<any>).mockResolvedValue(mockResponse);
      const broker = new MessageBroker(mockBrowser);

      const result = await broker.send({ key: 'GET_CONFIG' });

      expect(result).toEqual(mockResponse);
      expect(mockBrowser.runtime.sendMessage).toHaveBeenCalled();
    });
  });

  describe('handle', () => {
    let mockAddListener: MockedFunction<any>;

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
  });
});

import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { setupChromeMessageListener } from './messageHandler';

vi.mock('@src/shared/components/EmitLog', () => ({
  EmitLog: vi.fn(),
}));

vi.mock('@src/shared/storages/extensionStateStorage', () => ({
  default: {
    get: vi.fn().mockResolvedValue(true),
  },
}));

vi.mock('../../../shared/message-broker', () => ({
  messageBroker: {
    handle: vi.fn(),
  },
}));

vi.mock('./autoDetection', () => ({
  startAutoDetection: vi.fn().mockResolvedValue(undefined),
}));

global.chrome = {
  runtime: {
    onMessage: {
      addListener: vi.fn(),
    },
    sendMessage: vi.fn().mockResolvedValue({ success: true }),
  },
} as any;

Object.defineProperty(window, 'location', {
  value: { hostname: 'example.com' },
  writable: true,
});

describe('Message Handler Module', () => {
  let mockExtensionStateStorage: any;
  let mockStartAutoDetection: any;
  let messageListener: any;

  beforeEach(async () => {
    vi.clearAllMocks();

    const extensionStateStorage = await import('@src/shared/storages/extensionStateStorage');
    mockExtensionStateStorage = extensionStateStorage.default;
    vi.mocked(mockExtensionStateStorage.get).mockResolvedValue(true);

    const autoDetection = await import('./autoDetection');
    mockStartAutoDetection = autoDetection.startAutoDetection;

    global.chrome.runtime.onMessage.addListener = vi.fn(listener => {
      messageListener = listener;
    });

    window.postMessage = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('setupChromeMessageListener', () => {
    test('should set up chrome message listener', () => {
      setupChromeMessageListener();

      expect(global.chrome.runtime.onMessage.addListener).toHaveBeenCalled();
    });

    test('should handle getConfig message', async () => {
      setupChromeMessageListener();

      const message = { action: 'getConfig' };
      const sendResponse = vi.fn();

      await messageListener(message, {}, sendResponse);

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(window.postMessage).toHaveBeenCalledWith({ action: 'getConfig' }, '*');
      expect(sendResponse).toHaveBeenCalledWith({ success: true });
    });

    test('should handle getEntity message', async () => {
      setupChromeMessageListener();

      const message = { action: 'getEntity' };
      const sendResponse = vi.fn();

      await messageListener(message, {}, sendResponse);

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(window.postMessage).toHaveBeenCalledWith({ action: 'getEntity' }, '*');
      expect(sendResponse).toHaveBeenCalledWith({ success: true });
    });

    test('should handle startAutoDetection message', async () => {
      setupChromeMessageListener();

      const message = { action: 'startAutoDetection', domain: 'test.com' };
      const sendResponse = vi.fn();

      await messageListener(message, {}, sendResponse);

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(mockStartAutoDetection).toHaveBeenCalledWith('test.com');
      expect(sendResponse).toHaveBeenCalledWith({ success: true });
    });

    test('should use window.location.hostname if domain is not provided', async () => {
      setupChromeMessageListener();

      const message = { action: 'startAutoDetection' };
      const sendResponse = vi.fn();

      await messageListener(message, {}, sendResponse);

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(mockStartAutoDetection).toHaveBeenCalledWith('example.com');
      expect(sendResponse).toHaveBeenCalledWith({ success: true });
    });

    test('should handle detectionSuccess message', async () => {
      setupChromeMessageListener();

      const message = { action: 'detectionSuccess', domain: 'test.com', confidence: 0.9 };
      const sendResponse = vi.fn();

      await messageListener(message, {}, sendResponse);

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(global.chrome.runtime.sendMessage).toHaveBeenCalledWith({
        action: 'recordDetection',
        domain: 'test.com',
        confidence: 0.9,
      });
      expect(sendResponse).toHaveBeenCalledWith({ success: true });
    });

    test('should not process messages when extension is disabled', async () => {
      vi.mocked(mockExtensionStateStorage.get).mockResolvedValue(false);

      setupChromeMessageListener();

      const message = { action: 'getConfig' };
      const sendResponse = vi.fn();

      await messageListener(message, {}, sendResponse);

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(window.postMessage).not.toHaveBeenCalled();
      expect(sendResponse).toHaveBeenCalledWith({ success: false, error: 'Extension is disabled' });
    });

    test('should handle errors gracefully', async () => {
      setupChromeMessageListener();

      const message = { action: 'startAutoDetection', domain: 'test.com' };
      const sendResponse = vi.fn();

      vi.mocked(mockStartAutoDetection).mockRejectedValue(new Error('Test error'));

      await messageListener(message, {}, sendResponse);

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(sendResponse).toHaveBeenCalledWith({ success: false, error: 'Test error' });
    });

    test('should ignore messages with key property', async () => {
      setupChromeMessageListener();

      const message = { key: 'someKey', action: 'getConfig' };
      const sendResponse = vi.fn();

      const result = messageListener(message, {}, sendResponse);

      expect(result).toBeUndefined();
      expect(sendResponse).not.toHaveBeenCalled();
    });
  });
});

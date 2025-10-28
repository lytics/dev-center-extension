import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { setupConfigEventListener, setupEntityEventListener } from './eventHandler';

vi.mock('@src/shared/components/EmitLog', () => ({
  EmitLog: vi.fn(),
}));

vi.mock('@src/shared/storages/entityStorage', () => ({
  default: {
    set: vi.fn().mockResolvedValue(undefined),
  },
}));

vi.mock('@src/shared/storages/tagConfigStorage', () => ({
  default: {
    set: vi.fn().mockResolvedValue(undefined),
  },
}));

vi.mock('@src/shared/storages/extensionStateStorage', () => ({
  default: {
    get: vi.fn().mockResolvedValue(true),
  },
}));

global.chrome = {
  runtime: {
    sendMessage: vi.fn().mockResolvedValue({ success: true }),
  },
} as any;

Object.defineProperty(window, 'location', {
  value: { hostname: 'example.com' },
  writable: true,
});

describe('Event Handler Module', () => {
  let mockExtensionStateStorage: any;
  let mockTagConfigStore: any;
  let mockEntityStore: any;

  beforeEach(async () => {
    vi.clearAllMocks();

    const extensionStateStorage = await import('@src/shared/storages/extensionStateStorage');
    mockExtensionStateStorage = extensionStateStorage.default;
    vi.mocked(mockExtensionStateStorage.get).mockResolvedValue(true);

    const tagConfigStorage = await import('@src/shared/storages/tagConfigStorage');
    mockTagConfigStore = tagConfigStorage.default;
    vi.mocked(mockTagConfigStore.set).mockResolvedValue(undefined);

    const entityStorage = await import('@src/shared/storages/entityStorage');
    mockEntityStore = entityStorage.default;
    vi.mocked(mockEntityStore.set).mockResolvedValue(undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('setupConfigEventListener', () => {
    test('should set up config event listener', () => {
      const handler = setupConfigEventListener();

      expect(handler).toBeDefined();
      expect(typeof handler).toBe('function');
    });

    test('should handle config event', async () => {
      setupConfigEventListener();

      const configData = { cid: 'test-cid', stream: 'test-stream' };
      const event = new CustomEvent('config', {
        detail: { data: configData },
      });

      document.dispatchEvent(event);

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(global.chrome.runtime.sendMessage).toHaveBeenCalledWith({
        action: 'saveTagConfig',
        payload: configData,
      });

      expect(mockTagConfigStore.set).toHaveBeenCalledWith(configData);

      expect(global.chrome.runtime.sendMessage).toHaveBeenCalledWith({
        action: 'recordDetection',
        domain: 'example.com',
        confidence: 0.95,
      });
    });

    test('should not process config event when extension is disabled', async () => {
      vi.mocked(mockExtensionStateStorage.get).mockResolvedValue(false);

      setupConfigEventListener();

      const configData = { cid: 'test-cid', stream: 'test-stream' };
      const event = new CustomEvent('config', {
        detail: { data: configData },
      });

      document.dispatchEvent(event);

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(global.chrome.runtime.sendMessage).not.toHaveBeenCalled();
      expect(mockTagConfigStore.set).not.toHaveBeenCalled();
    });

    test('should handle config save errors gracefully', async () => {
      vi.mocked(mockTagConfigStore.set).mockRejectedValue(new Error('Storage error'));

      setupConfigEventListener();

      const configData = { cid: 'test-cid', stream: 'test-stream' };
      const event = new CustomEvent('config', {
        detail: { data: configData },
      });

      document.dispatchEvent(event);

      await new Promise(resolve => setTimeout(resolve, 100));

      expect(global.chrome.runtime.sendMessage).toHaveBeenCalledWith({
        action: 'saveTagConfig',
        payload: configData,
      });
    });
  });

  describe('setupEntityEventListener', () => {
    test('should set up entity event listener', () => {
      const handler = setupEntityEventListener();

      expect(handler).toBeDefined();
      expect(typeof handler).toBe('function');
    });

    test('should handle entity event', async () => {
      setupEntityEventListener();

      const entityData = { _uid: 'test-uid', email: 'test@example.com' };
      const event = new CustomEvent('entity', {
        detail: { data: entityData },
      });

      document.dispatchEvent(event);

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(global.chrome.runtime.sendMessage).toHaveBeenCalledWith({
        action: 'saveEntity',
        payload: entityData,
      });

      expect(mockEntityStore.set).toHaveBeenCalledWith(entityData);
    });

    test('should not process entity event when extension is disabled', async () => {
      vi.mocked(mockExtensionStateStorage.get).mockResolvedValue(false);

      setupEntityEventListener();

      const entityData = { _uid: 'test-uid', email: 'test@example.com' };
      const event = new CustomEvent('entity', {
        detail: { data: entityData },
      });

      document.dispatchEvent(event);

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(global.chrome.runtime.sendMessage).not.toHaveBeenCalled();
      expect(mockEntityStore.set).not.toHaveBeenCalled();
    });

    test('should handle entity save successfully', async () => {
      setupEntityEventListener();

      const entityData = { _uid: 'test-uid', email: 'test@example.com' };
      const event = new CustomEvent('entity', {
        detail: { data: entityData },
      });

      document.dispatchEvent(event);

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(mockEntityStore.set).toHaveBeenCalledWith(entityData);
    });
  });

  describe('Extension State Guards', () => {
    test('should respect extension state for config events', async () => {
      vi.mocked(mockExtensionStateStorage.get).mockResolvedValue(false);

      setupConfigEventListener();

      const configData = { cid: 'test-cid', stream: 'test-stream' };
      const event = new CustomEvent('config', {
        detail: { data: configData },
      });

      document.dispatchEvent(event);

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(mockTagConfigStore.set).not.toHaveBeenCalled();
    });

    test('should respect extension state for entity events', async () => {
      vi.mocked(mockExtensionStateStorage.get).mockResolvedValue(false);

      setupEntityEventListener();

      const entityData = { _uid: 'test-uid', email: 'test@example.com' };
      const event = new CustomEvent('entity', {
        detail: { data: entityData },
      });

      document.dispatchEvent(event);

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(mockEntityStore.set).not.toHaveBeenCalled();
    });

    test('should allow operations when extension is enabled', async () => {
      vi.mocked(mockExtensionStateStorage.get).mockResolvedValue(true);

      setupConfigEventListener();

      const configData = { cid: 'test-cid', stream: 'test-stream' };
      const event = new CustomEvent('config', {
        detail: { data: configData },
      });

      document.dispatchEvent(event);

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(mockTagConfigStore.set).toHaveBeenCalled();
    });
  });
});

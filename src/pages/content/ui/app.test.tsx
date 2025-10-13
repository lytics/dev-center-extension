import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  isJstagAvailable,
  pollForJstag,
  startAutoDetection,
  notifyAutoDetectionSuccess,
  notifyAutoDetectionFailed,
} from './app';

// Mock EmitLog
vi.mock('@src/shared/components/EmitLog', () => ({
  EmitLog: vi.fn(),
}));

// Mock storage modules
vi.mock('@src/shared/storages/entityStorage', () => ({
  default: {
    set: vi.fn().mockResolvedValue(undefined),
    get: vi.fn().mockResolvedValue({}),
    clear: vi.fn().mockResolvedValue(undefined),
  },
}));

vi.mock('@src/shared/storages/tagConfigStorage', () => ({
  default: {
    set: vi.fn().mockResolvedValue(undefined),
    get: vi.fn().mockResolvedValue({}),
    clear: vi.fn().mockResolvedValue(undefined),
  },
}));

// Mock chrome.runtime
global.chrome = {
  runtime: {
    sendMessage: vi.fn(),
    getURL: vi.fn(),
  },
} as any;

// Mock window.location
Object.defineProperty(window, 'location', {
  value: { hostname: 'example.com' },
  writable: true,
});

// Mock document methods used in the component
Object.defineProperty(document, 'createElement', {
  writable: true,
  value: vi.fn(() => ({
    onload: null,
    onerror: null,
    remove: vi.fn(),
  })),
});

Object.defineProperty(document, 'documentElement', {
  writable: true,
  value: { appendChild: vi.fn() },
});

Object.defineProperty(document, 'addEventListener', {
  writable: true,
  value: vi.fn(),
});

describe('Auto-Detection Functions', () => {
  let mockChromeRuntime: any;

  beforeEach(() => {
    vi.clearAllMocks();

    // Setup Chrome API mocks
    global.chrome = {
      runtime: {
        sendMessage: vi.fn().mockResolvedValue({ success: true }),
        getURL: vi.fn().mockReturnValue('chrome-extension://test/path'),
      },
    } as any;

    mockChromeRuntime = global.chrome.runtime;

    // Mock window.jstag property
    Object.defineProperty(window, 'jstag', {
      writable: true,
      value: undefined,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('isJstagAvailable', () => {
    test('should return true when jstag is available on window', () => {
      // Setup jstag as available
      (window as any).jstag = { someMethod: vi.fn() };

      const result = isJstagAvailable();
      expect(result).toBe(true);
    });

    test('should return false when jstag is not available on window', () => {
      // Ensure jstag is undefined
      (window as any).jstag = undefined;

      const result = isJstagAvailable();
      expect(result).toBe(false);
    });

    test('should return false when jstag is null', () => {
      (window as any).jstag = null;

      const result = isJstagAvailable();
      expect(result).toBe(false);
    });
  });

  describe('pollForJstag', () => {
    test('should detect jstag immediately and notify success', async () => {
      // Setup jstag as available
      (window as any).jstag = { someMethod: vi.fn() };

      pollForJstag('example.com');

      // Wait for next tick to allow async operations
      await new Promise(resolve => setTimeout(resolve, 0));

      expect(mockChromeRuntime.sendMessage).toHaveBeenCalledWith({
        action: 'recordDetection',
        domain: 'example.com',
        confidence: 0.9,
      });
    });

    test('should poll and detect jstag after retries', async () => {
      // Setup jstag as initially unavailable, then available after some time
      (window as any).jstag = undefined;

      // Start polling
      pollForJstag('example.com');

      // Wait a bit
      await new Promise(resolve => setTimeout(resolve, 100));

      // Make jstag available
      (window as any).jstag = { someMethod: vi.fn() };

      // Wait for polling to detect it
      await new Promise(resolve => setTimeout(resolve, 800));

      expect(mockChromeRuntime.sendMessage).toHaveBeenCalledWith({
        action: 'recordDetection',
        domain: 'example.com',
        confidence: 0.9,
      });
    });

    test('should fail after max retries and notify failure', async () => {
      // Ensure jstag remains unavailable
      (window as any).jstag = undefined;

      pollForJstag('example.com');

      // Wait for all retries to complete (5 retries * 750ms = ~3.75s)
      await new Promise(resolve => setTimeout(resolve, 4000));

      expect(mockChromeRuntime.sendMessage).toHaveBeenCalledWith({
        action: 'autoDetectionFailed',
        domain: 'example.com',
        retryCount: 0,
      });
    });

    test('should handle sendMessage errors gracefully', async () => {
      // Setup jstag as available but sendMessage to fail
      (window as any).jstag = { someMethod: vi.fn() };
      mockChromeRuntime.sendMessage.mockRejectedValue(new Error('Network error'));

      pollForJstag('example.com');

      // Wait for detection
      await new Promise(resolve => setTimeout(resolve, 100));

      // Should have attempted to send message despite error
      expect(mockChromeRuntime.sendMessage).toHaveBeenCalledWith({
        action: 'recordDetection',
        domain: 'example.com',
        confidence: 0.9,
      });
    });
  });

  describe('startAutoDetection', () => {
    test('should detect jstag immediately when available', async () => {
      // Setup jstag as available
      (window as any).jstag = { someMethod: vi.fn() };

      await startAutoDetection('example.com');

      expect(mockChromeRuntime.sendMessage).toHaveBeenCalledWith({
        action: 'recordDetection',
        domain: 'example.com',
        confidence: 0.9,
      });
    });

    test('should start polling when jstag is not immediately available', async () => {
      // Setup jstag as unavailable
      (window as any).jstag = undefined;

      await startAutoDetection('example.com');

      // Should not have sent success message immediately
      expect(mockChromeRuntime.sendMessage).not.toHaveBeenCalled();
    });

    test('should handle sendMessage errors during immediate detection', async () => {
      // Setup jstag as available but sendMessage to fail
      (window as any).jstag = { someMethod: vi.fn() };
      mockChromeRuntime.sendMessage.mockRejectedValue(new Error('Network error'));

      await startAutoDetection('example.com');

      // Should have attempted to send message despite error
      expect(mockChromeRuntime.sendMessage).toHaveBeenCalledWith({
        action: 'recordDetection',
        domain: 'example.com',
        confidence: 0.9,
      });
    });
  });

  describe('notifyAutoDetectionSuccess', () => {
    test('should send success message to background', async () => {
      await notifyAutoDetectionSuccess('example.com');

      expect(mockChromeRuntime.sendMessage).toHaveBeenCalledWith({
        action: 'recordDetection',
        domain: 'example.com',
        confidence: 0.9,
      });
    });

    test('should handle sendMessage errors gracefully', async () => {
      mockChromeRuntime.sendMessage.mockRejectedValue(new Error('Network error'));

      await notifyAutoDetectionSuccess('example.com');

      // Function should not throw despite error
      expect(mockChromeRuntime.sendMessage).toHaveBeenCalledWith({
        action: 'recordDetection',
        domain: 'example.com',
        confidence: 0.9,
      });
    });
  });

  describe('notifyAutoDetectionFailed', () => {
    test('should send failure message to background', async () => {
      await notifyAutoDetectionFailed('example.com');

      expect(mockChromeRuntime.sendMessage).toHaveBeenCalledWith({
        action: 'autoDetectionFailed',
        domain: 'example.com',
        retryCount: 0,
      });
    });

    test('should handle sendMessage errors gracefully', async () => {
      mockChromeRuntime.sendMessage.mockRejectedValue(new Error('Network error'));

      await notifyAutoDetectionFailed('example.com');

      // Function should not throw despite error
      expect(mockChromeRuntime.sendMessage).toHaveBeenCalledWith({
        action: 'autoDetectionFailed',
        domain: 'example.com',
        retryCount: 0,
      });
    });
  });
});

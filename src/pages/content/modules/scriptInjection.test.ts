import React from 'react';

import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { injectScript, setupBackgroundToContentListener, setupRetryHandler } from './scriptInjection';

vi.mock('@src/shared/components/EmitLog', () => ({
  EmitLog: vi.fn(),
}));

global.chrome = {
  runtime: {
    getURL: vi.fn().mockReturnValue('chrome-extension://test/tagLink.js'),
  },
} as any;

describe('Script Injection Module', () => {
  let mockScript: any;

  beforeEach(() => {
    vi.clearAllMocks();

    mockScript = {
      src: '',
      onload: null,
      onerror: null,
      remove: vi.fn(),
    };

    document.createElement = vi.fn().mockReturnValue(mockScript);
    Object.defineProperty(document, 'documentElement', {
      writable: true,
      value: {
        appendChild: vi.fn(),
      },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('injectScript', () => {
    test('should inject script successfully', () => {
      injectScript();

      expect(document.createElement).toHaveBeenCalledWith('script');
      expect(mockScript.src).toBe('chrome-extension://test/tagLink.js');
      expect(document.documentElement.appendChild).toHaveBeenCalledWith(mockScript);
    });

    test('should handle script load successfully', () => {
      injectScript();

      if (mockScript.onload) {
        mockScript.onload();
      }

      expect(mockScript.remove).toHaveBeenCalled();
    });

    test('should handle script load error', () => {
      injectScript();

      if (mockScript.onerror) {
        mockScript.onerror();
      }

      expect(mockScript.remove).not.toHaveBeenCalled();
    });

    test('should skip injection when already injected', () => {
      const scriptInjectedRef = { current: true };

      injectScript(scriptInjectedRef);

      expect(document.createElement).not.toHaveBeenCalled();
      expect(document.documentElement.appendChild).not.toHaveBeenCalled();
    });

    test('should update scriptInjectedRef on successful load', () => {
      const scriptInjectedRef = { current: false };

      injectScript(scriptInjectedRef);

      if (mockScript.onload) {
        mockScript.onload();
      }

      expect(scriptInjectedRef.current).toBe(true);
    });
  });

  describe('setupRetryHandler', () => {
    test('should handle retry messages', () => {
      const retriesRef = { current: 0 } as React.MutableRefObject<number>;
      const scriptInjectedRef = { current: false };

      setupRetryHandler(retriesRef, scriptInjectedRef);

      const retryEvent = {
        data: { type: 'retry' },
      };

      window.dispatchEvent(new MessageEvent('message', { data: retryEvent.data }));

      expect(retriesRef.current).toBe(1);
    });

    test('should not handle non-retry messages', () => {
      const retriesRef = { current: 0 } as React.MutableRefObject<number>;
      const scriptInjectedRef = { current: false };

      setupRetryHandler(retriesRef, scriptInjectedRef);

      const nonRetryEvent = {
        data: { type: 'other' },
      };

      window.dispatchEvent(new MessageEvent('message', { data: nonRetryEvent.data }));

      expect(retriesRef.current).toBe(0);
    });

    test('should inject script on retry message', () => {
      const retriesRef = { current: 0 } as React.MutableRefObject<number>;
      const scriptInjectedRef = { current: false };

      setupRetryHandler(retriesRef, scriptInjectedRef);

      const retryEvent = {
        data: { type: 'retry' },
      };

      window.dispatchEvent(new MessageEvent('message', { data: retryEvent.data }));

      expect(document.createElement).toHaveBeenCalledWith('script');
    });

    test('should handle multiple retries', () => {
      const retriesRef = { current: 0 } as React.MutableRefObject<number>;
      const scriptInjectedRef = { current: false };

      setupRetryHandler(retriesRef, scriptInjectedRef);

      window.dispatchEvent(new MessageEvent('message', { data: { type: 'retry' } }));
      window.dispatchEvent(new MessageEvent('message', { data: { type: 'retry' } }));

      expect(retriesRef.current).toBe(2);
    });

    test('should return handler function', () => {
      const retriesRef = { current: 0 } as React.MutableRefObject<number>;
      const handler = setupRetryHandler(retriesRef);

      expect(handler).toBeDefined();
      expect(typeof handler).toBe('function');
    });
  });

  describe('setupBackgroundToContentListener', () => {
    test('should handle backgroundToContent messages', () => {
      setupBackgroundToContentListener();

      const backgroundEvent = {
        source: window,
        data: {
          action: 'backgroundToContent',
          data: { test: 'data' },
        },
      };

      window.dispatchEvent(new MessageEvent('message', { ...backgroundEvent }));
    });

    test('should ignore messages from other sources', () => {
      setupBackgroundToContentListener();

      const externalEvent = {
        source: null as any,
        data: {
          action: 'backgroundToContent',
          data: { test: 'data' },
        },
      };

      window.dispatchEvent(new MessageEvent('message', { source: externalEvent.source, data: externalEvent.data }));
    });

    test('should ignore messages with different actions', () => {
      setupBackgroundToContentListener();

      const differentActionEvent = {
        source: window,
        data: {
          action: 'differentAction',
          data: { test: 'data' },
        },
      };

      window.dispatchEvent(new MessageEvent('message', { ...differentActionEvent }));
    });

    test('should return handler function', () => {
      const handler = setupBackgroundToContentListener();

      expect(handler).toBeDefined();
      expect(typeof handler).toBe('function');
    });
  });
});

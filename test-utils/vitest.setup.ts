import '@testing-library/jest-dom';

import { vi } from 'vitest';

type StorageKeys = string | string[] | Record<string, unknown> | null | undefined;
type StorageItems = Record<string, unknown>;
type StorageCallback = (items: StorageItems) => void;

interface TabQueryInfo {
  active?: boolean;
  currentWindow?: boolean;
  [key: string]: unknown;
}

interface TabItem {
  id?: number;
  url?: string;
  [key: string]: unknown;
}

type TabsCallback = (tabs: TabItem[]) => void;

const chromeMock = {
  storage: {
    onChanged: {
      addListener: vi.fn(),
      removeListener: vi.fn(),
    },
    local: {
      get: vi.fn((keys?: StorageKeys, callback?: StorageCallback): Promise<StorageItems> => {
        if (typeof callback === 'function') {
          callback({});
        }
        return Promise.resolve({});
      }),
      set: vi.fn((): Promise<void> => Promise.resolve()),
      onChanged: {
        addListener: vi.fn(),
        removeListener: vi.fn(),
      },
    },
    session: {
      get: vi.fn((keys?: StorageKeys, callback?: StorageCallback): Promise<StorageItems> => {
        if (typeof callback === 'function') {
          callback({});
        }
        return Promise.resolve({});
      }),
      set: vi.fn((): Promise<void> => Promise.resolve()),
      setAccessLevel: vi.fn((): Promise<void> => Promise.resolve()),
      onChanged: {
        addListener: vi.fn(),
        removeListener: vi.fn(),
      },
    },
  },
  tabs: {
    query: vi.fn((queryInfo?: TabQueryInfo, callback?: TabsCallback): Promise<TabItem[]> => {
      if (typeof callback === 'function') {
        callback([{ id: 1, url: 'https://example.com', active: true }]);
      }
      return Promise.resolve([{ id: 1, url: 'https://example.com', active: true }]);
    }),
    get: vi.fn((): Promise<TabItem> => Promise.resolve({ id: 1, url: 'https://example.com' })),
    sendMessage: vi.fn((tabId: number, message: unknown, callback?: (response?: unknown) => void): Promise<void> => {
      if (typeof callback === 'function') {
        callback({});
      }
      return Promise.resolve();
    }),
    onActivated: {
      addListener: vi.fn(),
      removeListener: vi.fn(),
    },
    onUpdated: {
      addListener: vi.fn(),
      removeListener: vi.fn(),
    },
  },
  runtime: {
    lastError: undefined,
  },
};

Object.defineProperty(global, 'chrome', {
  value: chromeMock,
  writable: true,
});

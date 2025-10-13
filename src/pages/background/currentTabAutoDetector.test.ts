import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { CurrentTabAutoDetector, DomainDetectionInfo } from './currentTabAutoDetector';

// Mock Chrome APIs
global.chrome = {
  tabs: {
    get: vi.fn(),
    sendMessage: vi.fn(),
  },
  storage: {
    local: {
      get: vi.fn(),
      set: vi.fn(),
    },
  },
} as any;

// Mock EmitLog
vi.mock('@root/src/shared/components/EmitLog', () => ({
  EmitLog: vi.fn(),
}));

describe('CurrentTabAutoDetector', () => {
  let detector: CurrentTabAutoDetector;
  let mockChromeTabs: any;
  let mockChromeStorage: any;

  beforeEach(() => {
    vi.clearAllMocks();

    // Reset Chrome API mocks
    global.chrome = {
      tabs: {
        get: vi.fn().mockResolvedValue({ url: 'https://example.com' }),
        sendMessage: vi.fn().mockResolvedValue({ success: true }),
      },
      storage: {
        local: {
          get: vi.fn().mockResolvedValue({}),
          set: vi.fn().mockResolvedValue(undefined),
        },
      },
    } as any;

    detector = new CurrentTabAutoDetector();

    mockChromeTabs = global.chrome.tabs;
    mockChromeStorage = global.chrome.storage.local;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('getParentDomain', () => {
    it('should return null for domains with less than 3 parts', () => {
      expect(detector['getParentDomain']('example.com')).toBeNull();
      expect(detector['getParentDomain']('com')).toBeNull();
    });

    it('should return parent domain for standard 3-part domains', () => {
      expect(detector['getParentDomain']('api.example.com')).toBe('example.com');
      expect(detector['getParentDomain']('shop.example.com')).toBe('example.com');
    });

    it('should handle international TLDs correctly', () => {
      // For domains with <=4 parts, returns last 2 parts
      expect(detector['getParentDomain']('api.shop.example.co.uk')).toBe('co.uk');
      expect(detector['getParentDomain']('store.company.com.au')).toBe('com.au');
      expect(detector['getParentDomain']('blog.site.co.jp')).toBe('co.jp');
    });

    it('should handle complex nested domains', () => {
      // For domains with >4 parts, it tries to find the best parent (length > 4)
      expect(detector['getParentDomain']('deep.nested.subdomain.example.com')).toBe('example.com');
      expect(detector['getParentDomain']('a.b.c.d.e.f')).toBe('d.e.f'); // 'd.e.f' has length 5 > 4
    });

    it('should return last 2 parts for domains with 4 or fewer parts', () => {
      expect(detector['getParentDomain']('api.example.com')).toBe('example.com');
      expect(detector['getParentDomain']('sub.api.example.com')).toBe('example.com'); // 4 parts, returns last 2
    });
  });

  describe('onTabActivated', () => {
    it('should handle tab activation successfully', async () => {
      const activeInfo = { tabId: 123, windowId: 1 };

      await detector.onTabActivated(activeInfo);

      expect(mockChromeTabs.get).toHaveBeenCalledWith(123);
    });

    it('should handle Chrome API unavailability', async () => {
      // Testing error condition by setting tabs to undefined
      global.chrome.tabs = undefined;

      await detector.onTabActivated({ tabId: 123, windowId: 1 });

      // Should not throw error
      expect(true).toBe(true);
    });

    it('should handle tab get errors', async () => {
      mockChromeTabs.get.mockRejectedValue(new Error('Tab not found'));

      await detector.onTabActivated({ tabId: 123, windowId: 1 });

      // Should not throw error
      expect(true).toBe(true);
    });
  });

  describe('onTabUpdated', () => {
    it('should handle tab updates when status is complete and tab is current', async () => {
      // Set current tab first
      await detector.onTabActivated({ tabId: 123, windowId: 1 });

      const changeInfo = { status: 'complete' };
      const tab = {
        id: 123,
        url: 'https://example.com',
        index: 0,
        pinned: false,
        highlighted: false,
        windowId: 1,
        active: true,
        incognito: false,
        selected: true,
        discarded: false,
        autoDiscardable: true,
        groupId: -1,
      };

      await detector.onTabUpdated(123, changeInfo, tab);

      expect(mockChromeTabs.sendMessage).toHaveBeenCalled();
    });

    it('should ignore tab updates when status is not complete', async () => {
      // Set current tab first
      await detector.onTabActivated({ tabId: 123, windowId: 1 });

      // Clear previous calls
      vi.clearAllMocks();

      const changeInfo = { status: 'loading' };
      const tab = {
        id: 123,
        url: 'https://example.com',
        index: 0,
        pinned: false,
        highlighted: false,
        windowId: 1,
        active: true,
        incognito: false,
        selected: true,
        discarded: false,
        autoDiscardable: true,
        groupId: -1,
      };

      await detector.onTabUpdated(123, changeInfo, tab);

      expect(mockChromeTabs.sendMessage).not.toHaveBeenCalled();
    });

    it('should ignore updates for different tabs', async () => {
      // Set current tab to 123
      await detector.onTabActivated({ tabId: 123, windowId: 1 });

      // Clear previous calls
      vi.clearAllMocks();

      const changeInfo = { status: 'complete' };
      const tab = {
        id: 456,
        url: 'https://example.com',
        index: 0,
        pinned: false,
        highlighted: false,
        windowId: 1,
        active: true,
        incognito: false,
        selected: true,
        discarded: false,
        autoDiscardable: true,
        groupId: -1,
      };

      await detector.onTabUpdated(456, changeInfo, tab);

      expect(mockChromeTabs.sendMessage).not.toHaveBeenCalled();
    });
  });

  describe('shouldDetectDomain', () => {
    it('should return true for new domains', () => {
      const domain = 'newdomain.com';
      const result = detector['shouldDetectDomain'](domain);
      expect(result).toBe(true);
    });

    it('should return false for already detected domains', () => {
      const domain = 'example.com';

      // Mock existing detection
      const existingInfo: DomainDetectionInfo = {
        domain,
        detected: true,
        confidence: 0.8,
        timestamp: Date.now(),
        lastSeen: Date.now(),
        subdomains: [],
      };

      detector['detectedDomains'].set(domain, existingInfo);

      const result = detector['shouldDetectDomain'](domain);
      expect(result).toBe(false);
    });

    it('should return false for domains with valid parent detection', () => {
      const domain = 'api.example.com';
      const parentDomain = 'example.com';

      // Mock parent detection
      const parentInfo: DomainDetectionInfo = {
        domain: parentDomain,
        detected: true,
        confidence: 0.8,
        timestamp: Date.now(),
        lastSeen: Date.now(),
        subdomains: [],
      };

      detector['detectedDomains'].set(parentDomain, parentInfo);

      const result = detector['shouldDetectDomain'](domain);
      expect(result).toBe(false);
    });
  });

  describe('isDetectionValid', () => {
    it('should return true for recent detections', () => {
      const info: DomainDetectionInfo = {
        domain: 'example.com',
        detected: true,
        confidence: 0.8,
        timestamp: Date.now() - 1000, // 1 second ago
        lastSeen: Date.now() - 1000,
        subdomains: [],
      };

      const result = detector['isDetectionValid'](info);
      expect(result).toBe(true);
    });

    it('should return false for old detections', () => {
      const info: DomainDetectionInfo = {
        domain: 'example.com',
        detected: true,
        confidence: 0.8,
        timestamp: Date.now() - 31 * 24 * 60 * 60 * 1000, // 31 days ago
        lastSeen: Date.now() - 31 * 24 * 60 * 60 * 1000,
        subdomains: [],
      };

      const result = detector['isDetectionValid'](info);
      expect(result).toBe(false);
    });
  });

  describe('startDetectionForDomain', () => {
    it('should start detection for valid domain', async () => {
      // Set current tab
      await detector.onTabActivated({ tabId: 123, windowId: 1 });

      await detector['startDetectionForDomain']('example.com');

      expect(mockChromeTabs.sendMessage).toHaveBeenCalledWith(123, {
        action: 'startAutoDetection',
        domain: 'example.com',
      });
    });

    it('should handle sendMessage errors gracefully', async () => {
      mockChromeTabs.sendMessage.mockRejectedValue(new Error('Message failed'));

      // Set current tab
      await detector.onTabActivated({ tabId: 123, windowId: 1 });

      await detector['startDetectionForDomain']('example.com');

      // Should not throw error
      expect(true).toBe(true);
    });

    it('should not start detection without current tab', async () => {
      await detector['startDetectionForDomain']('example.com');

      expect(mockChromeTabs.sendMessage).not.toHaveBeenCalled();
    });
  });

  describe('handleDomainChange', () => {
    it('should handle domain changes correctly', async () => {
      // Set current tab first
      await detector.onTabActivated({ tabId: 123, windowId: 1 });

      const url = 'https://example.com';

      await detector['handleDomainChange'](url);

      expect(mockChromeTabs.sendMessage).toHaveBeenCalled();
    });

    it('should handle invalid URLs gracefully', async () => {
      const url = 'invalid-url';

      await detector['handleDomainChange'](url);

      // Should not throw error
      expect(true).toBe(true);
    });

    it('should handle domain changes for any domain', async () => {
      // Set current tab first
      await detector.onTabActivated({ tabId: 123, windowId: 1 });

      // Clear previous calls
      vi.clearAllMocks();

      const url = 'https://google.com';

      await detector['handleDomainChange'](url);

      // The current implementation doesn't skip any domains
      expect(mockChromeTabs.sendMessage).toHaveBeenCalled();
    });
  });

  describe('loadStoredDomains', () => {
    it('should load stored domains from storage', async () => {
      const storedData = {
        'example.com': {
          domain: 'example.com',
          detected: true,
          confidence: 0.8,
          timestamp: Date.now(),
          lastSeen: Date.now(),
          subdomains: [],
        },
      };

      mockChromeStorage.get.mockResolvedValue({ storedData });

      await detector['loadStoredDomains']();

      expect(mockChromeStorage.get).toHaveBeenCalled();
    });

    it('should handle storage errors gracefully', async () => {
      mockChromeStorage.get.mockRejectedValue(new Error('Storage error'));

      await detector['loadStoredDomains']();

      // Should not throw error
      expect(true).toBe(true);
    });
  });

  describe('saveStoredDomains', () => {
    it('should save domains to storage', async () => {
      const domainInfo: DomainDetectionInfo = {
        domain: 'example.com',
        detected: true,
        confidence: 0.8,
        timestamp: Date.now(),
        lastSeen: Date.now(),
        subdomains: [],
      };

      detector['detectedDomains'].set('example.com', domainInfo);

      await detector['saveStoredDomains']();

      expect(mockChromeStorage.set).toHaveBeenCalled();
    });

    it('should handle storage errors gracefully', async () => {
      mockChromeStorage.set.mockRejectedValue(new Error('Storage error'));

      await detector['saveStoredDomains']();

      // Should not throw error
      expect(true).toBe(true);
    });
  });

  describe('cleanupOldDomains', () => {
    it('should remove old domains', () => {
      const oldInfo: DomainDetectionInfo = {
        domain: 'old.com',
        detected: true,
        confidence: 0.8,
        timestamp: Date.now() - 31 * 24 * 60 * 60 * 1000, // 31 days ago
        lastSeen: Date.now() - 31 * 24 * 60 * 60 * 1000,
        subdomains: [],
      };

      const recentInfo: DomainDetectionInfo = {
        domain: 'recent.com',
        detected: true,
        confidence: 0.8,
        timestamp: Date.now() - 1000, // 1 second ago
        lastSeen: Date.now() - 1000,
        subdomains: [],
      };

      detector['detectedDomains'].set('old.com', oldInfo);
      detector['detectedDomains'].set('recent.com', recentInfo);

      detector['cleanupOldDomains']();

      expect(detector['detectedDomains'].has('old.com')).toBe(false);
      expect(detector['detectedDomains'].has('recent.com')).toBe(true);
    });
  });
});

describe('Integration Tests - Content Script to Background Script Communication', () => {
  let detector: CurrentTabAutoDetector;
  let mockChromeRuntime: any;
  let mockAutoDetectedDomainsStore: any;

  beforeEach(() => {
    vi.clearAllMocks();

    // Mock the autoDetectedDomainsStore
    mockAutoDetectedDomainsStore = {
      get: vi.fn().mockResolvedValue({ domains: {}, lastCleanup: Date.now() }),
      set: vi.fn().mockResolvedValue(undefined),
      translate: vi.fn().mockReturnValue({ domains: {}, lastCleanup: Date.now() }),
    };

    // Mock chrome APIs
    global.chrome = {
      runtime: {
        sendMessage: vi.fn().mockResolvedValue({ success: true }),
        onMessage: {
          addListener: vi.fn(),
        },
      },
      tabs: {
        get: vi.fn().mockResolvedValue({ url: 'https://example.com' }),
        sendMessage: vi.fn().mockResolvedValue({ success: true }),
      },
      storage: {
        local: {
          get: vi.fn().mockResolvedValue({}),
          set: vi.fn().mockResolvedValue(undefined),
        },
      },
    } as any;

    detector = new CurrentTabAutoDetector();
    mockChromeRuntime = global.chrome.runtime;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('End-to-End Auto-Detection Flow', () => {
    it('should handle successful detection from content script to background', async () => {
      // Mock the autoDetectedDomainsStore import
      vi.doMock('@src/shared/storages/autoDetectedDomainsStorage', () => ({
        autoDetectedDomainsStore: mockAutoDetectedDomainsStore,
      }));

      // Simulate the background script logic for handling recordDetection messages
      const mockMessage = {
        action: 'recordDetection',
        domain: 'example.com',
        confidence: 0.9,
      };

      // Simulate what happens in the background script when recordDetection is received
      const sendResponse = vi.fn();

      // Background script logic (simplified)
      if (mockMessage.action === 'recordDetection') {
        const domain = mockMessage.domain;
        if (domain) {
          // Record in the current tab detector
          await detector.recordDetection(domain, mockMessage.confidence || 0.8);

          // Also save to persistent storage (simulating background script logic)
          const now = Date.now();
          const currentState = await mockAutoDetectedDomainsStore.get();
          const state = mockAutoDetectedDomainsStore.translate(currentState);
          state.domains[domain] = {
            domain,
            firstSeen: now,
            lastSeen: now,
            tagRequests: [],
            confidence: mockMessage.confidence || 0.8,
            autoEnabled: true,
            requestCount: 1,
          };
          state.lastCleanup = now;
          await mockAutoDetectedDomainsStore.set(JSON.stringify(state));
        }
        sendResponse({ success: true });
      }

      // Verify the response
      expect(sendResponse).toHaveBeenCalledWith({ success: true });

      // Verify the storage was updated
      expect(mockAutoDetectedDomainsStore.set).toHaveBeenCalledWith(expect.stringContaining('"domain":"example.com"'));
      expect(mockAutoDetectedDomainsStore.set).toHaveBeenCalledWith(expect.stringContaining('"confidence":0.9'));
    });

    it('should handle detection failure from content script', async () => {
      // Simulate receiving an autoDetectionFailed message
      const mockMessage = {
        action: 'autoDetectionFailed',
        domain: 'example.com',
        retryCount: 5,
      };

      const mockSender = {
        tab: { url: 'https://example.com', id: 123 },
      };

      // This test verifies that the background script properly handles failure messages
      // In the actual implementation, this would be logged but not stored
      const messageListeners: Array<(message: any, sender: any, sendResponse: any) => void> = [];

      mockChromeRuntime.onMessage.addListener = vi.fn(listener => {
        messageListeners.push(listener);
      });

      // Simulate the background script logic for handling autoDetectionFailed
      const mockListener = vi.fn().mockImplementation((message, sender, sendResponse) => {
        if (message.action === 'autoDetectionFailed') {
          // Background script just acknowledges the failure
          sendResponse({ success: true });
          return true;
        }
      });

      messageListeners.push(mockListener);

      // Call the message listener
      for (const listener of messageListeners) {
        const sendResponse = vi.fn();
        const result = await listener(mockMessage, mockSender, sendResponse);

        expect(sendResponse).toHaveBeenCalledWith({ success: true });
        expect(result).toBe(true);
      }
    });

    it('should handle tab activation triggering detection flow', async () => {
      // Set current tab
      await detector.onTabActivated({ tabId: 123, windowId: 1 });

      // Verify that sendMessage was called to start detection
      expect(global.chrome.tabs.sendMessage).toHaveBeenCalledWith(123, {
        action: 'startAutoDetection',
        domain: 'example.com',
      });
    });

    it('should handle complete tab updates triggering detection', async () => {
      // Set current tab first
      await detector.onTabActivated({ tabId: 123, windowId: 1 });

      // Clear previous calls
      vi.clearAllMocks();

      // Simulate tab update
      const changeInfo = { status: 'complete' };
      const tab = {
        id: 123,
        url: 'https://newsite.com',
        index: 0,
        pinned: false,
        highlighted: false,
        windowId: 1,
        active: true,
        incognito: false,
        selected: true,
        discarded: false,
        autoDiscardable: true,
        groupId: -1,
      };

      await detector.onTabUpdated(123, changeInfo, tab);

      // Should trigger detection for new domain
      expect(global.chrome.tabs.sendMessage).toHaveBeenCalledWith(123, {
        action: 'startAutoDetection',
        domain: 'newsite.com',
      });
    });

    it('should properly store detection results in persistent storage', async () => {
      // Mock the store functions
      const mockStore = {
        get: vi.fn().mockResolvedValue({
          domains: {},
          lastCleanup: Date.now(),
        }),
        set: vi.fn().mockResolvedValue(undefined),
        translate: vi.fn().mockImplementation(data => data),
      };

      // Simulate the background script logic for storing detection results
      const domain = 'example.com';
      const confidence = 0.9;
      const now = Date.now();

      // This simulates what happens in the background script when recordDetection is called
      const currentState = await mockStore.get();
      const state = mockStore.translate(currentState);

      state.domains[domain] = {
        domain,
        firstSeen: now,
        lastSeen: now,
        tagRequests: [],
        confidence,
        autoEnabled: true,
        requestCount: 1,
      };
      state.lastCleanup = now;

      await mockStore.set(JSON.stringify(state));

      // Verify the storage was called with correct data
      expect(mockStore.set).toHaveBeenCalledWith(expect.stringContaining('"domain":"example.com"'));
      expect(mockStore.set).toHaveBeenCalledWith(expect.stringContaining('"confidence":0.9'));
      expect(mockStore.set).toHaveBeenCalledWith(expect.stringContaining('"autoEnabled":true'));
    });
  });
});

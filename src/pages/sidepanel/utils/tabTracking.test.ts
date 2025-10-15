import { describe, it, expect } from 'vitest';
import { extractTabInfo, TabInfo } from './tabTracking';

describe('tabTracking utilities', () => {
  describe('extractTabInfo', () => {
    it('should extract tab information correctly from a valid tab', () => {
      const mockTab = {
        id: 123,
        url: 'https://example.com/path?query=test',
        active: true,
      } as chrome.tabs.Tab;

      const result = extractTabInfo(mockTab);

      expect(result).toEqual({
        tabId: '123',
        url: 'https://example.com/path?query=test',
        domain: 'example.com',
      });
    });

    it('should handle tabs with different ports', () => {
      const mockTab = {
        id: 456,
        url: 'http://localhost:3000/app',
      } as chrome.tabs.Tab;

      const result = extractTabInfo(mockTab);

      expect(result).toEqual({
        tabId: '456',
        url: 'http://localhost:3000/app',
        domain: 'localhost',
      });
    });

    it('should handle tabs with subdomains', () => {
      const mockTab = {
        id: 789,
        url: 'https://app.staging.example.com/dashboard',
      } as chrome.tabs.Tab;

      const result = extractTabInfo(mockTab);

      expect(result).toEqual({
        tabId: '789',
        url: 'https://app.staging.example.com/dashboard',
        domain: 'app.staging.example.com',
      });
    });

    it('should return null when tab is undefined', () => {
      const result = extractTabInfo(undefined);
      expect(result).toBeNull();
    });

    it('should return null when tab has no id', () => {
      const mockTab = {
        url: 'https://example.com',
      } as chrome.tabs.Tab;

      const result = extractTabInfo(mockTab);
      expect(result).toBeNull();
    });

    it('should return null when tab has no url', () => {
      const mockTab = {
        id: 123,
      } as chrome.tabs.Tab;

      const result = extractTabInfo(mockTab);
      expect(result).toBeNull();
    });

    it('should return null for invalid URL', () => {
      const mockTab = {
        id: 123,
        url: 'not-a-valid-url',
      } as chrome.tabs.Tab;

      const result = extractTabInfo(mockTab);
      expect(result).toBeNull();
    });

    it('should handle chrome:// URLs', () => {
      const mockTab = {
        id: 999,
        url: 'chrome://extensions/',
      } as chrome.tabs.Tab;

      const result = extractTabInfo(mockTab);

      expect(result).toEqual({
        tabId: '999',
        url: 'chrome://extensions/',
        domain: 'extensions',
      });
    });

    it('should handle file:// URLs', () => {
      const mockTab = {
        id: 888,
        url: 'file:///Users/test/file.html',
      } as chrome.tabs.Tab;

      const result = extractTabInfo(mockTab);

      expect(result).toEqual({
        tabId: '888',
        url: 'file:///Users/test/file.html',
        domain: '',
      });
    });

    it('should convert tab id to string', () => {
      const mockTab = {
        id: 12345,
        url: 'https://example.com',
      } as chrome.tabs.Tab;

      const result = extractTabInfo(mockTab) as TabInfo;

      expect(typeof result.tabId).toBe('string');
      expect(result.tabId).toBe('12345');
    });
  });
});

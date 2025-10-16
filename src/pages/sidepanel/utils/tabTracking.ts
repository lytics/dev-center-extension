/**
 * Pure utility functions for tab tracking
 * These functions are easily testable and have no side effects
 */

export interface TabInfo {
  tabId: string;
  url: string;
  domain: string;
}

/**
 * Extracts tab information from a Chrome tab object
 * @param tab - Chrome tab object
 * @returns TabInfo object or null if invalid
 */
export const extractTabInfo = (tab: chrome.tabs.Tab | undefined): TabInfo | null => {
  if (!tab?.id || !tab?.url) {
    return null;
  }

  try {
    return {
      tabId: tab.id.toString(),
      url: tab.url,
      domain: new URL(tab.url).hostname,
    };
  } catch (error) {
    // Invalid URL
    return null;
  }
};

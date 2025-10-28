/**
 * Internal hook for tracking active Chrome tab
 * Handles tab activation, URL changes, and domain registration
 */

import { useState, useEffect } from 'react';
import domainStateStore from '@src/shared/storages/tabStateStorage';
import { extractTabInfo } from '@root/src/pages/sidepanel/utils/tabTracking';

interface UseTabTrackingReturn {
  tabId: string | null;
  domain: string;
  url: string;
}

/**
 * Custom hook to track the current active Chrome tab
 * Automatically registers tabs with the domain state store
 *
 * @returns Current tab ID, domain, and URL
 */
export const useTabTracking = (): UseTabTrackingReturn => {
  const [tabId, setTabId] = useState<string | null>(null);
  const [domain, setDomain] = useState<string>('');
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    /**
     * Updates state and registers tab with domain store
     */
    const handleTabChange = async (tab: chrome.tabs.Tab) => {
      const info = extractTabInfo(tab);
      if (!info) return;

      setTabId(info.tabId);
      setDomain(info.domain);
      setUrl(info.url);

      // Register this tab as viewing this domain
      await domainStateStore.registerTab(info.domain, info.tabId);
    };

    /**
     * Initial load - Get current active tab
     */
    const initializeCurrentTab = async () => {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });

      if (tab) {
        await handleTabChange(tab);
      }
    };

    /**
     * Listener for tab activation (user switches tabs)
     */
    const handleTabActivated = async (activeInfo: chrome.tabs.TabActiveInfo) => {
      const tab = await chrome.tabs.get(activeInfo.tabId);
      if (tab.url) {
        await handleTabChange(tab);
      }
    };

    /**
     * Listener for tab URL updates (navigation within tab)
     */
    const handleTabUpdated = async (tabId: number, changeInfo: chrome.tabs.TabChangeInfo, tab: chrome.tabs.Tab) => {
      // Only handle URL changes for active tabs
      if (changeInfo.url && tab.active) {
        await handleTabChange(tab);
      }
    };

    // Initialize and setup listeners
    initializeCurrentTab();
    chrome.tabs.onActivated.addListener(handleTabActivated);
    chrome.tabs.onUpdated.addListener(handleTabUpdated);

    // Cleanup listeners on unmount
    return () => {
      chrome.tabs.onActivated.removeListener(handleTabActivated);
      chrome.tabs.onUpdated.removeListener(handleTabUpdated);
    };
  }, []); // Empty deps - listeners setup once

  return { tabId, domain, url };
};

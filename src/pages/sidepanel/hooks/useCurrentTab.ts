import { useEffect, useState } from 'react';

export function useCurrentTab() {
  const [tab, setTab] = useState<chrome.tabs.Tab | undefined>(undefined);

  useEffect(() => {
    let currentTabId: number | undefined;

    const updateActiveTab = async () => {
      const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
      currentTabId = activeTab?.id;
      setTab(activeTab);
    };

    const handleActivated = async (activeInfo: chrome.tabs.TabActiveInfo) => {
      currentTabId = activeInfo.tabId;
      const activeTab = await chrome.tabs.get(activeInfo.tabId);
      setTab(activeTab);
    };

    const handleRemoved = (removedTabId: number) => {
      if (removedTabId === currentTabId) {
        setTab(undefined);
        updateActiveTab();
      }
    };

    const handleUpdated = (updatedTabId: number, changeInfo: chrome.tabs.TabChangeInfo) => {
      if (updatedTabId === currentTabId) {
        setTab(prev => (prev ? { ...prev, ...changeInfo } : prev));
      }
    };

    updateActiveTab();

    chrome.tabs.onActivated.addListener(handleActivated);
    chrome.tabs.onRemoved.addListener(handleRemoved);
    chrome.tabs.onUpdated.addListener(handleUpdated);

    return () => {
      chrome.tabs.onActivated.removeListener(handleActivated);
      chrome.tabs.onRemoved.removeListener(handleRemoved);
      chrome.tabs.onUpdated.removeListener(handleUpdated);
    };
  }, []);

  return tab;
}

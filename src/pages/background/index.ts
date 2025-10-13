import 'webextension-polyfill';

import { currentTabAutoDetector } from '@root/src/pages/background/currentTabAutoDetector';
import { createNetworkTrafficHandler } from '@root/src/pages/background/lyticsNetworkHandler';
import { EmitLog } from '@root/src/shared/components/EmitLog';
import { autoDetectedDomainsStore } from '@src/shared/storages/autoDetectedDomainsStorage';
import entityStore from '@src/shared/storages/entityStorage';
import { domainStore } from '@src/shared/storages/extensionDomainStorage';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';
import domainStateStore from '@src/shared/storages/tabStateStorage';
import tagActivityStore from '@src/shared/storages/tagActivityStorage';
import tagConfigStore from '@src/shared/storages/tagConfigStorage';

import { messageBroker } from '../../shared/message-broker';
import { IMessage } from '../../shared/message-broker/types';

chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(error => console.error(error));

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url) return;
  try {
    await chrome.sidePanel.setOptions({
      tabId,
      path: 'src/pages/sidepanel/index.html',
      enabled: true,
    });
  } catch (error) {
    EmitLog({ name: 'background', payload: { msg: 'Failed to set side panel options', error: error.message, tabId } });
  }
});

// --------------------------------------------------------
// Handle State Management
// --------------------------------------------------------
const handleStateChange = () => {
  extensionStateStorage
    .get()
    .then(state => {
      try {
        if (state === true) {
          chrome.action
            .setIcon({
              path: {
                '16': '../../../assets/img/icon-active.png',
                '48': '../../../assets/img/icon-active.png',
                '128': '../../../assets/img/icon-active.png',
              },
            })
            .catch(error => {
              EmitLog({ name: 'background', payload: { msg: 'Failed to set active icon', error: error.message } });
            });
          EmitLog({ name: 'background', payload: { msg: 'Extension Activated' } });
          clearAllThings();
          try {
            chrome.webRequest.onBeforeRequest.addListener(
              handleNetworkTraffic,
              {
                urls: ['*://*.lytics.io/*'],
              },
              ['requestBody'],
            );
          } catch (error) {
            EmitLog({
              name: 'background',
              payload: { msg: 'Failed to add web request listener', error: error.message },
            });
          }
        } else {
          chrome.action
            .setIcon({
              path: {
                '16': '../../../assets/img/icon-inactive.png',
                '48': '../../../assets/img/icon-inactive.png',
                '128': '../../../assets/img/icon-inactive.png',
              },
            })
            .catch(error => {
              EmitLog({ name: 'background', payload: { msg: 'Failed to set inactive icon', error: error.message } });
            });
          EmitLog({ name: 'background', payload: { msg: 'Extension Deactivated' } });
          clearAllThings();
          try {
            chrome.webRequest.onBeforeRequest.removeListener(handleNetworkTraffic);
          } catch (error) {
            EmitLog({
              name: 'background',
              payload: { msg: 'Failed to remove web request listener', error: error.message },
            });
          }
        }
      } catch (error) {
        EmitLog({ name: 'background', payload: { msg: 'Error in handleStateChange', error: error.message } });
      }
    })
    .catch(error => {
      EmitLog({ name: 'background', payload: { msg: 'Failed to get extension state', error: error.message } });
    });
};
extensionStateStorage.subscribe(handleStateChange);

// --------------------------------------------------------
// Handle Storage Clear on Tab Change
// --------------------------------------------------------
const clearAllThings = () => {
  tagConfigStore.clear();
  entityStore.clear();
  tagActivityStore.clear();
  domainStore.clear();
};

// --------------------------------------------------------
// Manage Sticky Domain
// --------------------------------------------------------
let stickyDomain = '';

domainStore
  .get()
  .then(domain => {
    try {
      const translated = domainStore.translate(domain);
      stickyDomain = translated.pinnedURL;
      EmitLog({ name: 'background', payload: { msg: `Sticky Domain initially loaded as <${stickyDomain}>` } });
    } catch (error) {
      EmitLog({ name: 'background', payload: { msg: 'Error loading initial sticky domain', error: error.message } });
    }
  })
  .catch(error => {
    EmitLog({
      name: 'background',
      payload: { msg: 'Failed to get initial domain from storage', error: error.message },
    });
  });

domainStore.subscribe(() => {
  domainStore
    .get()
    .then(domain => {
      try {
        const translated = domainStore.translate(domain);
        stickyDomain = translated.pinnedURL;
        EmitLog({ name: 'background', payload: { msg: `Sticky Domain updated to <${stickyDomain}>` } });
      } catch (error) {
        EmitLog({ name: 'background', payload: { msg: 'Error updating sticky domain', error: error.message } });
      }
    })
    .catch(error => {
      EmitLog({
        name: 'background',
        payload: { msg: 'Failed to get updated domain from storage', error: error.message },
      });
    });
});

// --------------------------------------------------------
// Handle Listen for Requests to lytics.io
// --------------------------------------------------------
const handleNetworkTraffic = createNetworkTrafficHandler({
  getStickyDomain: () => stickyDomain,
});

// --------------------------------------------------------
// Handle Auto-Detection Messages
// --------------------------------------------------------
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'autoDetectionSuccess') {
    EmitLog({
      name: 'background',
      payload: {
        msg: 'Auto-detection success',
        domain: message.domain,
        confidence: message.confidence,
      },
    });
    sendResponse({ success: true });
  }

  if (message.action === 'autoDetectionFailed') {
    EmitLog({
      name: 'background',
      payload: {
        msg: 'Auto-detection failed',
        domain: message.domain,
        retryCount: message.retryCount,
      },
    });
    sendResponse({ success: true });
  }
});

// --------------------------------------------------------
// Handle Extension Lifecycle
// --------------------------------------------------------
chrome.runtime.onInstalled.addListener(async () => {
  EmitLog({ name: 'background', payload: { msg: 'Extension installed/updated' } });
  // Clear cache and re-detect on installation/update
  await currentTabAutoDetector.clearCacheAndRedetect();
  // Run cleanup on storage
  await autoDetectedDomainsStore.cleanup();
});

chrome.runtime.onSuspend.addListener(() => {
  EmitLog({ name: 'background', payload: { msg: 'Extension suspending' } });
  // Cleanup before suspension
});

// --------------------------------------------------------
// Current Tab Auto-Detection
// --------------------------------------------------------

// Current tab auto-detection monitoring - only when extension is enabled
chrome.tabs.onActivated.addListener(activeInfo => {
  extensionStateStorage
    .get()
    .then(state => {
      try {
        if (state === true) {
          currentTabAutoDetector.onTabActivated(activeInfo);
        }
      } catch (error) {
        EmitLog({
          name: 'background',
          payload: { msg: 'Error in tab activation handler', error: error.message, tabId: activeInfo?.tabId },
        });
      }
    })
    .catch(error => {
      EmitLog({
        name: 'background',
        payload: { msg: 'Failed to get extension state for tab activation', error: error.message },
      });
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  extensionStateStorage
    .get()
    .then(state => {
      try {
        if (state === true) {
          currentTabAutoDetector.onTabUpdated(tabId, changeInfo, tab);
        }
      } catch (error) {
        EmitLog({ name: 'background', payload: { msg: 'Error in tab update handler', error: error.message, tabId } });
      }
    })
    .catch(error => {
      EmitLog({
        name: 'background',
        payload: { msg: 'Failed to get extension state for tab update', error: error.message },
      });
    });
});

// Handle extension enable/disable for re-detection
if (chrome.management && chrome.management.onEnabled) {
  chrome.management.onEnabled.addListener(async () => {
    try {
      EmitLog({ name: 'background', payload: { msg: 'Extension enabled - clearing cache and re-detecting' } });
      await currentTabAutoDetector.clearCacheAndRedetect();
    } catch (error) {
      EmitLog({
        name: 'background',
        payload: { msg: 'Error during extension re-enable detection', error: error.message },
      });
    }
  });

  chrome.management.onDisabled.addListener(() => {
    try {
      EmitLog({ name: 'background', payload: { msg: 'Extension disabled - stopping detection' } });
    } catch (error) {
      EmitLog({
        name: 'background',
        payload: { msg: 'Error during extension disable handling', error: error.message },
      });
    }
  });
}

// Handle detection success messages from content scripts
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  try {
    if (message.action === 'autoDetectionSuccess') {
      const domain = message.domain || (sender.tab ? new URL(sender.tab.url).hostname : null);
      if (domain) {
        await currentTabAutoDetector.recordDetection(domain, message.confidence || 0.8);
      }
      sendResponse({ success: true });
    }

    if (message.action === 'recordDetection') {
      const domain = message.domain;
      if (domain) {
        // Record in both the current tab detector and the persistent storage
        await currentTabAutoDetector.recordDetection(domain, message.confidence || 0.8);

        // Also save to persistent storage for UI display
        const now = Date.now();
        const currentState = await autoDetectedDomainsStore.get();
        const state = autoDetectedDomainsStore.translate(currentState);
        state.domains[domain] = {
          domain,
          firstSeen: now,
          lastSeen: now,
          tagRequests: [],
          confidence: message.confidence || 0.8,
          autoEnabled: true,
          requestCount: 1,
        };
        state.lastCleanup = now;
        await autoDetectedDomainsStore.set(JSON.stringify(state));

        // Run cleanup if needed
        if (await autoDetectedDomainsStore.shouldRunCleanup()) {
          await autoDetectedDomainsStore.cleanup();
        }

        EmitLog({
          name: 'background',
          payload: {
            msg: 'Auto-detection recorded in persistent storage',
            domain,
            confidence: message.confidence,
          },
        });
      }
      sendResponse({ success: true });
    }

    // Handle tagConfig save from content script
    if (message.action === 'saveTagConfig') {
      const tabId = sender.tab?.id?.toString();
      const tabUrl = sender.tab?.url;
      if (tabId && tabUrl && message.payload) {
        const domain = new URL(tabUrl).hostname;

        // Parse the payload if it's a string (tagLink sends stringified data)
        let parsedConfig = message.payload;
        if (typeof message.payload === 'string') {
          try {
            parsedConfig = JSON.parse(message.payload);
          } catch (error) {
            EmitLog({
              name: 'background',
              payload: { msg: `Error parsing tag config`, error: error.message },
            });
            sendResponse({ success: false, error: 'Invalid JSON' });
            return;
          }
        }

        // Save to domain state (shared across all tabs on this domain)
        await domainStateStore.updateDomainState(domain, {
          tagConfig: parsedConfig,
        });
        EmitLog({
          name: 'background',
          payload: {
            msg: `Tag config saved for domain ${domain}`,
            hasData: Object.keys(parsedConfig).length > 0,
            tabId,
          },
        });
      }
      sendResponse({ success: true });
    }

    // Handle entity save from content script
    if (message.action === 'saveEntity') {
      const tabId = sender.tab?.id?.toString();
      const tabUrl = sender.tab?.url;
      if (tabId && tabUrl && message.payload) {
        const domain = new URL(tabUrl).hostname;

        // Parse the payload if it's a string (tagLink sends stringified data)
        let parsedProfile = message.payload;
        if (typeof message.payload === 'string') {
          try {
            parsedProfile = JSON.parse(message.payload);
          } catch (error) {
            EmitLog({
              name: 'background',
              payload: { msg: `Error parsing entity profile`, error: error.message },
            });
            sendResponse({ success: false, error: 'Invalid JSON' });
            return;
          }
        }

        // Save to domain state (shared across all tabs on this domain)
        await domainStateStore.updateDomainState(domain, {
          profile: parsedProfile,
        });
        EmitLog({
          name: 'background',
          payload: { msg: `Entity profile saved for domain ${domain}`, tabId },
        });
      }
      sendResponse({ success: true });
    }
  } catch (error) {
    EmitLog({
      name: 'background',
      payload: { msg: 'Error handling detection message', error: error.message, action: message?.action },
    });
    sendResponse({ success: false, error: error.message });
  }

  // Return true for async operations
  return true;
});

// --------------------------------------------------------
// Per-Domain Storage Cleanup
// --------------------------------------------------------

// Unregister tab from domain when tab is closed
chrome.tabs.onRemoved.addListener(async (tabId: number) => {
  try {
    const tabIdStr = tabId.toString();

    // Get all domains and unregister this tab from each
    const allDomains = await domainStateStore.getAllDomains();
    for (const domain of allDomains) {
      await domainStateStore.unregisterTab(domain, tabIdStr);
    }

    // Immediately cleanup domains with no active tabs
    await domainStateStore.cleanupInactiveDomains();

    EmitLog({
      name: 'background',
      payload: { msg: `Tab ${tabIdStr} closed, unregistered and cleaned up inactive domains` },
    });
  } catch (error) {
    EmitLog({
      name: 'background',
      payload: { msg: 'Error cleaning up closed tab', error: error.message, tabId },
    });
  }
});

// Periodic cleanup of inactive domains (every 60 seconds)
setInterval(async () => {
  try {
    await domainStateStore.cleanupInactiveDomains();
  } catch (error) {
    EmitLog({
      name: 'background',
      payload: { msg: 'Error in periodic domain cleanup', error: error.message },
    });
  }
}, 60000);
messageBroker.handle('GET_CONFIG', async (message: IMessage) => {
  const tabMessage: IMessage = {
    key: 'GET_CONFIG',
  };

  return await messageBroker.sendToTab(message.payload.currentTabId, tabMessage);
});

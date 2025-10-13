import 'webextension-polyfill';

import { currentTabAutoDetector } from '@root/src/pages/background/currentTabAutoDetector';
import { EmitLog } from '@root/src/shared/components/EmitLog';
import { EventModel } from '@src/shared/models/eventModel';
import { autoDetectedDomainsStore } from '@src/shared/storages/autoDetectedDomainsStorage';
import entityStore from '@src/shared/storages/entityStorage';
import { domainStore } from '@src/shared/storages/extensionDomainStorage';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';
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
const parseURL = (url: string, body: any, type: string): EventModel => {
  // Parse URL
  const parsedURL = new URL(url);
  const parsedBody = new URLSearchParams(body);

  // Get URL components
  const protocol = parsedURL.protocol; // e.g., 'https:'
  const host = parsedURL.host; // e.g., 'example.com'
  const pathname = parsedURL.pathname; // e.g., '/path/to/page'
  const search = parsedURL.search; // e.g., '?param1=value1&param2=value2'

  // Parse query parameters into an object
  const queryParams = new URLSearchParams(search);
  const queryParamObj: Record<string, string> = {};
  queryParams.forEach((value, key) => {
    queryParamObj[key] = value;
  });

  const parsedBodyDataObj = {};
  if (parsedBody) {
    parsedBody.forEach((value, key) => {
      parsedBodyDataObj[key] = decodeURIComponent(value);
    });
  }

  let ts: string;
  if (queryParamObj.ts) {
    ts = queryParamObj.ts;
  } else if ((parsedBodyDataObj as any).ts) {
    ts = (parsedBodyDataObj as any).ts;
  } else {
    ts = Date.now().toString();
  }

  // Assign description based on type
  let description: string;
  switch (type) {
    case 'load-js-tag':
      description =
        'Loaded the core Lytics JavaScript SDK. Used for collecting data and surfacing the active visitors profile back to the browser.';
      break;
    case 'load-profile':
      description = 'Loaded the active visitors full profile from Lytics.';
      break;
    case 'collect-data':
      description = 'Collected data via jstag.send based on visitor activity.';
      break;
    case 'load-pathfora-tag':
      description = 'Loaded the Pathfora JavaScript SDK for advanced onsite personalization.';
      break;
    case 'load-pathfora-css':
      description =
        'Loaded the default Pathfora JavaScript SDK styles to ensure modals and inline widgets are styled correctly.';
      break;
    case 'load-experience-config':
      description = 'Loaded the experience configurations from the Lytics Experience Engine.';
      break;
    case 'load-campaign-config':
      description =
        'Loaded the legacy campaign configurations from Lytics. This feature is being deprecated. Reach out to support for additional guidance.';
      break;
    default:
      description = `Communicated with Lytics via a generic or unhandled request (${type}).`;
  }

  return {
    protocol,
    host,
    pathname,
    queryParamObj,
    parsedBodyDataObj,
    ts: parseInt(ts),
    type,
    description,
  } as EventModel;
};

const handleNetworkTraffic = details => {
  try {
    // get the active tab url that generated the request
    const activeTabUrl = details.initiator;
    if (!activeTabUrl) {
      return;
    }

    // parse the active tab url
    const activeDomain = new URL(activeTabUrl).hostname;

    // if the active domain matches the sticky domain, then we can proceed with existing logic
    if (activeDomain !== stickyDomain) {
      EmitLog({ name: 'background', payload: { msg: `Request from non-sticky domain <${activeDomain}>` } });
      return;
    }

    const url = details.url;
    let postData;
    let result: EventModel;

    switch (true) {
      case url.includes('/api/tag/'):
        EmitLog({ name: 'background', payload: { msg: 'Called Core Tag', url: url } });
        result = parseURL(url, {}, 'load-js-tag');
        break;

      case url.includes('/api/personalize/'):
        EmitLog({ name: 'background', payload: { msg: 'Called Entity API', url: url } });
        result = parseURL(url, {}, 'load-profile');
        break;

      case url.includes('/c/'):
        EmitLog({ name: 'background', payload: { msg: 'Collection API', url: url } });
        if (details.requestBody) {
          postData = details?.requestBody?.formData?._js[0];
        }
        result = parseURL(url, postData || {}, 'collect-data');
        break;

      case url.includes('/static/pathfora.min.js'):
        EmitLog({ name: 'background', payload: { msg: 'Called Pathfora Tag', url: url } });
        result = parseURL(url, {}, 'load-pathfora-tag');
        break;

      case url.includes('static/pathfora.min.css'):
        EmitLog({ name: 'background', payload: { msg: 'Called Pathfora Styles', url: url } });
        result = parseURL(url, {}, 'load-pathfora-css');
        break;

      case url.includes('/experience/candidate'):
        EmitLog({ name: 'background', payload: { msg: 'Called Experience Config API', url: url } });
        result = parseURL(url, {}, 'load-experience-config');
        break;

      case url.includes('/api/program/campaign/config'):
        EmitLog({ name: 'background', payload: { msg: 'Called Legacy Campaign Config API', url: url } });
        result = parseURL(url, {}, 'load-campaign-config');
        break;

      default:
        EmitLog({ name: 'background', payload: { msg: 'Unhandled API Requset', url: url } });
    }
    tagActivityStore.add(JSON.stringify(result));
  } catch (error) {
    EmitLog({
      name: 'background',
      payload: { msg: 'Error in handleNetworkTraffic', error: error.message, url: details?.url },
    });
  }
};

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

messageBroker.handle('GET_CONFIG', async (message: IMessage) => {
  const tabMessage: IMessage = {
    key: 'GET_CONFIG',
  };

  return await messageBroker.sendToTab(message.payload.currentTabId, tabMessage);
});

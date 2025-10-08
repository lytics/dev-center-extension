import 'webextension-polyfill';

import { currentTabAutoDetector } from '@root/src/pages/background/currentTabAutoDetector';
import { EmitLog } from '@root/src/shared/components/EmitLog';
import { EventModel } from '@src/shared/models/eventModel';
import entityStore from '@src/shared/storages/entityStorage';
import { domainStore } from '@src/shared/storages/extensionDomainStorage';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';
import tagActivityStore from '@src/shared/storages/tagActivityStorage';
import tagConfigStore from '@src/shared/storages/tagConfigStorage';

chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(error => console.error(error));

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url) return;
  await chrome.sidePanel.setOptions({
    tabId,
    path: 'src/pages/sidepanel/index.html',
    enabled: true,
  });
});

// --------------------------------------------------------
// Handle State Management
// --------------------------------------------------------
const handleStateChange = () => {
  extensionStateStorage.get().then(state => {
    if (state === true) {
      chrome.action.setIcon({
        path: {
          '16': '../../../assets/img/icon-active.png',
          '48': '../../../assets/img/icon-active.png',
          '128': '../../../assets/img/icon-active.png',
        },
      });
      EmitLog({ name: 'background', payload: { msg: 'Extension Activated' } });
      clearAllThings();
      chrome.webRequest.onBeforeRequest.addListener(
        handleNetworkTraffic,
        {
          urls: ['*://*.lytics.io/*'],
        },
        ['requestBody'],
      );
    } else {
      chrome.action.setIcon({
        path: {
          '16': '../../../assets/img/icon-inactive.png',
          '48': '../../../assets/img/icon-inactive.png',
          '128': '../../../assets/img/icon-inactive.png',
        },
      });
      EmitLog({ name: 'background', payload: { msg: 'Extension Deactivated' } });
      clearAllThings();
      chrome.webRequest.onBeforeRequest.removeListener(handleNetworkTraffic);
    }
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

domainStore.get().then(domain => {
  const translated = domainStore.translate(domain);
  stickyDomain = translated.pinnedURL;
  EmitLog({ name: 'background', payload: { msg: `Sticky Domain initially loaded as <${stickyDomain}>` } });
});

domainStore.subscribe(() => {
  domainStore.get().then(domain => {
    const translated = domainStore.translate(domain);
    stickyDomain = translated.pinnedURL;
    EmitLog({ name: 'background', payload: { msg: `Sticky Domain updated to <${stickyDomain}>` } });
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
chrome.runtime.onInstalled.addListener(() => {
  EmitLog({ name: 'background', payload: { msg: 'Extension installed/updated' } });
  // Clear cache and re-detect on installation/update
  currentTabAutoDetector.clearCacheAndRedetect();
});

chrome.runtime.onSuspend.addListener(() => {
  EmitLog({ name: 'background', payload: { msg: 'Extension suspending' } });
  // Cleanup before suspension
});

// --------------------------------------------------------
// Current Tab Auto-Detection
// --------------------------------------------------------

// Current tab auto-detection monitoring
chrome.tabs.onActivated.addListener(activeInfo => {
  currentTabAutoDetector.onTabActivated(activeInfo);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  currentTabAutoDetector.onTabUpdated(tabId, changeInfo, tab);
});

// Handle extension enable/disable for re-detection
if (chrome.management && chrome.management.onEnabled) {
  chrome.management.onEnabled.addListener(() => {
    EmitLog({ name: 'background', payload: { msg: 'Extension enabled - clearing cache and re-detecting' } });
    currentTabAutoDetector.clearCacheAndRedetect();
  });

  chrome.management.onDisabled.addListener(() => {
    EmitLog({ name: 'background', payload: { msg: 'Extension disabled - stopping detection' } });
  });
}

// Handle detection success messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'autoDetectionSuccess') {
    const domain = message.domain || (sender.tab ? new URL(sender.tab.url).hostname : null);
    if (domain) {
      currentTabAutoDetector.recordDetection(domain, message.confidence || 0.8);
    }
    sendResponse({ success: true });
  }

  if (message.action === 'recordDetection') {
    const domain = message.domain;
    if (domain) {
      currentTabAutoDetector.recordDetection(domain, message.confidence || 0.8);
    }
    sendResponse({ success: true });
  }
});

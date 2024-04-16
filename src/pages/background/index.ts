import tagConfigStore from '@src/shared/storages/tagConfigStorage';
import entityStore from '@src/shared/storages/entityStorage';
import tagActivityStore from '@src/shared/storages/tagActivityStorage';
import domainStore from '@src/shared/storages/extensionDomainStorage';
import { EventModel } from '@src/shared/models/eventModel';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';
import { EmitLog } from '@root/src/shared/components/EmitLog';
import 'webextension-polyfill';

// --------------------------------------------------------
// Handle Context Menus
// --------------------------------------------------------
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'openSidePanel',
    title: 'Launch Lytics Dev Tools',
    contexts: ['all'],
  });
  chrome.tabs.create({ url: 'src/pages/sidepanel/index.html' });
});

chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const currentTab = tabs[0];
    chrome.sidePanel.open({ tabId: currentTab.id });
  });
});

chrome.runtime.onStartup.addListener(() => {
  chrome.tabs.create({ url: 'src/pages/sidepanel/index.html' });
});

chrome.runtime.onMessage.addListener((message, sender) => {
  // The callback for runtime.onMessage must return falsy if we're not sending a response
  (async () => {
    if (message.type === 'open_side_panel') {
      await chrome.sidePanel.open({ tabId: sender.tab.id });
      await chrome.sidePanel.setOptions({
        tabId: sender.tab.id,
        path: 'src/pages/sidepanel/index.html',
        enabled: true,
      });
    }
  })();
});

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
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (tabs.length > 0) {
          // chrome.tabs.reload(tabs[0].id);
        }
      });
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
// Handle Navigation
// --------------------------------------------------------
// // get the stored sticky domain
// domainStore.get().then(domain => {
//   stickyDomain = domain;
//   EmitLog({ name: 'background', payload: { msg: `Sticky Domain initially loaded as <${stickyDomain}>` } });
// });

// const checkTabDetailsHelper = details => {
//   chrome.tabs.get(details.tabId, tab => {
//     if (chrome.runtime.lastError) {
//       console.error(chrome.runtime.lastError);
//       return;
//     }

//     const tabUrl = tab.url;
//     if (tabUrl) {
//       activeDomain = new URL(tabUrl).hostname;

//       if (activeDomain !== stickyDomain) {
//         chrome.runtime.sendMessage({
//           action: 'domainMSG',
//           event: 'disableApp',
//           stickyDomain: stickyDomain,
//           activeDomain: activeDomain,
//         });
//       } else {
//         chrome.runtime.sendMessage({
//           action: 'domainMSG',
//           event: 'enableApp',
//           stickyDomain: stickyDomain,
//           activeDomain: activeDomain,
//         });
//       }
//     }
//   });
// };

// --------------------------------------------------------
// Manage Sticky Domain
// --------------------------------------------------------
let stickyDomain = '';

domainStore.get().then(domain => {
  stickyDomain = domain;
  EmitLog({ name: 'background', payload: { msg: `Sticky Domain initially loaded as <${stickyDomain}>` } });
});

const handleStickyDomainSet = () => {
  clearAllThings();
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    if (tabs.length > 0) {
      const tab = tabs[0];
      const tabUrl = tab.url;
      if (tabUrl) {
        stickyDomain = new URL(tabUrl).hostname;
        domainStore.set(stickyDomain);
        // chrome.runtime.sendMessage({
        //   action: 'domainData',
        //   event: 'domainMSG',
        //   stickyDomain: stickyDomain,
        // });
        EmitLog({ name: 'background', payload: { msg: `Sticky Domain set to <${stickyDomain}>` } });
      }
    }
  });
};

// subscribe to sticky set
chrome.runtime.onMessage.addListener(request => {
  if (request.action === 'setStickyDomain') {
    handleStickyDomainSet();
  }
});

// const handleTabChange = details => {
//   checkTabDetailsHelper(details);
// };
// chrome.tabs.onActivated.addListener(handleTabChange);

// const handleDomainChanged = details => {
// if (details.frameId !== 0) {
//   return;
// }

//   checkTabDetailsHelper(details);
// };
// chrome.webNavigation.onCompleted.addListener(handleDomainChanged);

// if (chrome.runtime.lastError) {
//   console.error(chrome.runtime.lastError);
//   return;
// }
// const tabUrl = tab.url;
// if (tabUrl) {
//   const activeDomain = new URL(tabUrl).hostname;

//   if (lastDomain !== activeDomain) {
//     chrome.runtime.sendMessage({ action: 'domainData', lastDomain: lastDomain, currentDomain: activeDomain, stickyDomain: stickyDomain });
//     clearAllThings();
//     lastDomain = activeDomain;
//     EmitLog({ name: 'background', payload: { msg: `Domain changed to <${activeDomain}>` } });
//   }
// }

// let previousUrl = null;

// const handleMainFrameNavigation = details => {
// if (details.frameId !== 0) {
//   // Ignore navigation events for subframes or auxiliary frames
//   return;
// }

//   // Process navigation event for the main frame
//   chrome.tabs.get(details.tabId, tab => {
//     if (chrome.runtime.lastError) {
//       console.error(chrome.runtime.lastError);
//       return;
//     }

// // Ignore empty new tabs
// if (tab?.url === 'chrome://newtab/') {
//   return;
// }

//     const currentUrl = tab.url;
//     console.log('Current URL:', currentUrl);

//     // Compare with previous URL
//     if (previousUrl && currentUrl !== previousUrl) {
//       console.log('Navigated from:', previousUrl);
//       console.log('Navigated to:', currentUrl);
//       // Here you can emit a message or perform any actions you need
//     }

//     // Update previous URL
//     previousUrl = currentUrl;
//   });
// };

// chrome.webNavigation.onBeforeNavigate.addListener(handleMainFrameNavigation);

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

  // if the active domain matches the sticky domain, then we can proceed
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
chrome.webRequest.onBeforeRequest.addListener(
  handleNetworkTraffic,
  {
    urls: ['*://*.lytics.io/*'],
  },
  ['requestBody'],
);

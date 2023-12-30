import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import tagConfigStore from '@src/shared/storages/tagConfigStorage';
import entityStore from '@src/shared/storages/entityStorage';
import tagActivityStore from '@src/shared/storages/tagActivityStorage';
import { EventModel } from '@src/shared/models/eventModel';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

reloadOnUpdate('pages/content/style.scss');

console.log('background loaded');

// --------------------------------------------------------
// Handle Storage Clear on Tab Change
// --------------------------------------------------------
chrome.tabs.onActivated.addListener(() => {
  tagConfigStore.clear();
  entityStore.clear();
  tagActivityStore.clear();
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
  if(parsedBody) {
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
    case "load-js-tag":
      description = "Loaded the core Lytics JavaScript SDK. Used for collecting data and surfacing the active visitors profile back to the browser.";
      break;
    case "load-profile":
      description = "Loaded the active visitors full profile from Lytics.";
      break;
    case "collect-data":
      description = "Collected data via jstag.send based on visitor activity.";
      break;
    case "load-pathfora-tag":
      description = "Loaded the Pathfora JavaScript SDK for advanced onsite personalization.";
      break;
    case "load-pathfora-css":
      description = "Loaded the default Pathfora JavaScript SDK styles to ensure modals and inline widgets are styled correctly.";
      break;
    case "load-campaign-config":
      description = "Loaded the campaign configuration from the Lytics Experience Engine.";
      break;
    default:
      description = "Communicated with Lytics via a generic or unhandled request.";
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
}

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = details.url;
    let postData;
    let result: EventModel;

    switch (true) {
      case url.includes("/api/tag/"):
        console.log("Loaded Tag ::", url);
        result = parseURL(url, {}, "load-js-tag");
        break;

      case url.includes("/api/personalize/"):
        console.log("Loaded Entity ::", url);
        result = parseURL(url, {}, "load-profile");
        break;

      case url.includes("/c/"):
        console.log("Collected Data ::", url);
        if (details.requestBody) {
          postData = details?.requestBody?.formData?._js[0];
        }
        result = parseURL(url, postData || {}, "collect-data");
        break;

      case url.includes("/static/pathfora.min.js"):
        console.log("Loaded Pathfora ::", url);
        result = parseURL(url, {}, "load-pathfora-tag");
        break;
      
      case url.includes("static/pathfora.min.css"):
        console.log("Loaded Pathfora Styles ::", url);
        result = parseURL(url, {}, "load-pathfora-css");
        break;

      case url.includes("/api/program/campaign/config"):
        console.log("Loaded Experience Config ::", url);
        result = parseURL(url, {}, "load-campaign-config");
        break;

      default:
        console.log("Unhandled Lytics Request:", url);
    }

    tagActivityStore.add(JSON.stringify(result))
    
    // console.log("result", result);
    // tagActivityStore.add(JSON.stringify(result)).then(() => {
    //   tagActivityStore.get().then((currentValue) => {
    //     console.log("currentValue", currentValue);
    //   });
    // });
  },
  {
    urls: ["*://*.lytics.io/*"],
  },
  ["requestBody"]
);

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   if(activeTabId == tabId) {
//     getTabInfo(tabId);
//   }
// });

// Listen for messages from content scripts
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   console.log('Message from content script:', message);
  
//   // Send a response back to the content script if needed
//   sendResponse({ received: true });
// });

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.action === 'popupToBackground') {
//     // Handle the message from popup.js
//     const popupData = request.data;
//     console.log('Received message from popup in background:', popupData);

//     chrome.runtime.onConnect.addListener(function (port) {
//       port.postMessage({ action: 'backgroundToContent', data: 'Hello from background to content!' });
//     });
//   }
// });

// // Initialize a variable to hold the DevTools panel connection
// let devToolsConnection = null;

// function establishConnection() {
//   // Connect to the DevTools panel
//   devToolsConnection = chrome.runtime.connect({ name: 'devtools-panel' });

//   // Handle disconnection gracefully
//   devToolsConnection.onDisconnect.addListener(() => {
//     devToolsConnection = null;
//     console.log('DevTools panel disconnected');
//     // Try to re-establish the connection after a delay
//     setTimeout(establishConnection, 1000); // Adjust the delay as needed
//   });
// }

// // Attempt to establish the initial connection
// establishConnection();

// // Listen for messages from the content script
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   // Check if the DevTools connection is established
//   if (devToolsConnection) {
//     // Forward the message to the DevTools panel
//     devToolsConnection.postMessage(message);
//   } else {
//     console.log('No DevTools connection available. Message not sent.');
//     // Try to re-establish the connection immediately
//     establishConnection();
//   }
// });

// // Listen for connections from the DevTools panel
// chrome.runtime.onConnect.addListener((port) => {
//   if (port.name === 'devtools-panel') {
//     devToolsConnection = port;

//     // Handle disconnection gracefully
//     devToolsConnection.onDisconnect.addListener(() => {
//       devToolsConnection = null;
//       console.log('DevTools panel disconnected');
//       // Try to re-establish the connection after a delay
//       setTimeout(establishConnection, 1000); // Adjust the delay as needed
//     });
//   }
// });

// chrome.webRequest.onBeforeSendHeaders.addListener(
//   function(details) {
//     // Check if the request URL matches "lytics.io"
//     console.log('checking');
//     if (details.url.includes("lytics.io")) {
//       // Access request headers
//       const requestHeaders = details.requestHeaders;

//       // Handle the network request here, observe request headers, or log information
//       console.log("Request URL:", details.url);
//       console.log("Request Headers:", requestHeaders);
//     }
//   },
//   { urls: ["*://*.lytics.io/*"] }, // Match all subdomains and paths under lytics.io
//   ["requestHeaders"]
// );

// import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
// import 'webextension-polyfill';

// reloadOnUpdate('pages/background');

// /**
//  * Extension reloading is necessary because the browser automatically caches the css.
//  * If you do not use the css of the content script, please delete it.
//  */
// reloadOnUpdate('pages/content/style.scss');

// console.log('background loaded');

// // Initialize a variable to hold the DevTools panel connection
// let devToolsConnection = null;

// // Listen for messages from the content script
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   // Check if the DevTools connection is established
//   if (devToolsConnection) {
//     // Forward the message to the DevTools panel
//     devToolsConnection.postMessage(message);
//   }
// });

// // Listen for connections from the DevTools panel
// chrome.runtime.onConnect.addListener((port) => {
//   if (port.name === "devtools-panel") {
//     devToolsConnection = port;

//     // Handle disconnection gracefully
//     devToolsConnection.onDisconnect.addListener(() => {
//       devToolsConnection = null;
//       console.log("DevTools panel disconnected");
//     });
//   }
// });

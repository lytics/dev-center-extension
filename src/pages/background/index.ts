import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import tagConfigStore from '@src/shared/storages/tagConfigStorage';
import entityStore from '@src/shared/storages/entityStorage';
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
});

// --------------------------------------------------------
// Handle Listen for Requests to lytics.io
// --------------------------------------------------------
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Request made:", details, details.url);
  },
  {
    urls: ["*://*.lytics.io/*"],
  },
  []
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

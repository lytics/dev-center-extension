import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate('pages/content/style.scss');

console.log('background loaded');

// Initialize a variable to hold the DevTools panel connection
let devToolsConnection = null;

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Check if the DevTools connection is established
  if (devToolsConnection) {
    // Forward the message to the DevTools panel
    devToolsConnection.postMessage(message);
  }
});

// Listen for connections from the DevTools panel
chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "devtools-panel") {
    devToolsConnection = port;

    // Handle disconnection gracefully
    devToolsConnection.onDisconnect.addListener(() => {
      devToolsConnection = null;
      console.log("DevTools panel disconnected");
    });
  }
});

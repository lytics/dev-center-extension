import { EmitLog } from '@src/shared/components/EmitLog';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';

import { messageBroker } from '../../../shared/message-broker';
import { startAutoDetection } from './autoDetection';

const TIMEOUT_MS = 2000;

export const setupChromeMessageListener = () => {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if ('key' in message) {
      return;
    }
    (async () => {
      try {
        const currentState = await extensionStateStorage.get();
        if (!currentState) {
          EmitLog({
            name: 'content',
            payload: { msg: 'Extension disabled - ignoring message', action: message.action },
          });
          sendResponse({ success: false, error: 'Extension is disabled' });
          return;
        }

        if (message.action == 'getConfig') {
          window.postMessage({ action: 'getConfig' }, '*');
        }

        if (message.action == 'getEntity') {
          window.postMessage({ action: 'getEntity' }, '*');
        }

        if (message.action === 'startAutoDetection') {
          const domain = message.domain || window.location.hostname;
          EmitLog({ name: 'content', payload: { msg: `Starting auto-detection for domain: ${domain}` } });

          await startAutoDetection(domain);
        }

        if (message.action === 'detectionSuccess') {
          const domain = message.domain || window.location.hostname;
          EmitLog({ name: 'content', payload: { msg: `Detection successful for domain: ${domain}` } });

          try {
            await chrome.runtime.sendMessage({
              action: 'recordDetection',
              domain: domain,
              confidence: message.confidence || 0.8,
            });
          } catch (error) {
            EmitLog({
              name: 'content',
              payload: { msg: 'Error notifying background of detection success', error: error.message },
            });
          }
        }

        sendResponse({ success: true });
      } catch (error) {
        EmitLog({ name: 'content', payload: { msg: 'Error handling message', error: error.message } });
        sendResponse({ success: false, error: error.message });
      }
    })();

    return true;
  });

  messageBroker.handle('GET_CONFIG', async () => {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        document.removeEventListener('config', configHandler);
        reject(new Error(`Config retrieval timeout after ${TIMEOUT_MS / 1000} seconds`));
      }, TIMEOUT_MS);

      const configHandler = (event: CustomEvent) => {
        clearTimeout(timeout);
        document.removeEventListener('config', configHandler);
        try {
          const config = JSON.parse(event.detail.data);
          resolve(config);
        } catch (error) {
          reject(new Error(`Failed to parse config data: ${error.message}`));
        }
      };

      document.addEventListener('config', configHandler as EventListener);

      window.postMessage({ action: 'getConfig' }, '*');
    });
  });
};

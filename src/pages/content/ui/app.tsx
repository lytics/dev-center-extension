import { useEffect } from 'react';
import tagConfigStore from '@src/shared/storages/tagConfigStorage';
import entityStore from '@src/shared/storages/entityStorage';

export default function App() {
  const variableName = 'jstag';
  let retries = 0;

  useEffect(() => {
    // ------------------------------
    // Handle Tag Link Injection
    // ------------------------------
    const injectScript = () => {
      const script = document.createElement('script');

      script.src = chrome.runtime.getURL('/src/pages/tagLink/index.js');
      script.onload = () => {
        script.remove();
      };

      document.documentElement.appendChild(script);
    };
    injectScript();

    const handleMessage = event => {
      if (event.data && event.data.type === 'retry') {
        retries++;
        console.log(`Retry ${retries}: Variable "${variableName}" is not found. Retrying in 5 seconds...`);
        injectScript();
      }
    };
    window.addEventListener('message', handleMessage);

    window.addEventListener('message', function (event) {
      if (event.source === window && event.data.action === 'backgroundToContent') {
        // Handle the message from background.js
        const backgroundData = event.data.data;
        console.log('Received message from background in content:', backgroundData);
      }
    });

    // ------------------------------
    // Handle Requests to Tag Link
    // ------------------------------
    // chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    chrome.runtime.onMessage.addListener(message => {
      if (message.action == 'getConfig') {
        window.postMessage({ action: 'getConfig' }, '*');
      }

      if (message.action == 'getEntity') {
        window.postMessage({ action: 'getEntity' }, '*');
      }
    });

    // ------------------------------
    // Handle Requests From Tag Link
    // ------------------------------

    // Listen for and Store JS Tag Config
    document.addEventListener('config', function (event) {
      const payload = (event as any).detail.data;
      tagConfigStore.set(payload).then(() => {
        console.log('Tag config saved.');
      });
    });

    // Listen for and Store JS Tag Entity
    document.addEventListener('entity', function (event) {
      const payload = (event as any).detail.data;
      entityStore.set(payload).then(() => {
        console.log('Entity saved.');
      });
    });
  }, []);

  useEffect(() => {
    console.log('content view loaded');
  }, []);

  return <></>;
}

import { useEffect } from 'react';
import tagConfigStore from '@src/shared/storages/tagConfigStorage';
import entityStore from '@src/shared/storages/entityStorage';
import { EmitLog } from '@src/shared/components/EmitLog';
// import extensionStateStorage from '@src/shared/storages/extensionStateStorage';

export default function App() {
  let retries = 0;

  useEffect(() => {
    // ------------------------------
    // Handle Tag Link Injection
    // ------------------------------
    const injectScript = () => {
      const script = document.createElement('script');

      script.src = chrome.runtime.getURL('/src/pages/tagLink/index.js');
      script.type = 'module';
      script.onload = () => {
        script.remove();
      };

      document.documentElement.appendChild(script);
    };
    injectScript();

    const handleMessage = event => {
      if (event.data && event.data.type === 'retry') {
        retries++;
        EmitLog({ name: 'retry', payload: { retries } });
        injectScript();
      }
    };
    window.addEventListener('message', handleMessage);

    window.addEventListener('message', function (event) {
      if (event.source === window && event.data.action === 'backgroundToContent') {
        const backgroundData = event.data.data;
        EmitLog({
          name: 'message',
          payload: { msg: 'Received message from background in content.', data: backgroundData },
        });
      }
    });

    // ------------------------------
    // Handle Requests to Tag Link
    // ------------------------------
    // chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
      if (message.action == 'getConfig') {
        window.postMessage({ action: 'getConfig' }, '*');
      }

      if (message.action == 'getEntity') {
        window.postMessage({ action: 'getEntity' }, '*');
      }

      sendResponse();
    });

    // ------------------------------
    // Handle Requests From Tag Link
    // ------------------------------

    // Listen for and Store JS Tag Config
    document.addEventListener('config', function (event) {
      const payload = (event as any).detail.data;
      tagConfigStore.set(payload).then(() => {
        EmitLog({ name: 'storage', payload: { msg: 'Tag config saved.' } });
      });
    });

    // Listen for and Store JS Tag Entity
    document.addEventListener('entity', function (event) {
      const payload = (event as any).detail.data;
      entityStore.set(payload).then(() => {
        EmitLog({ name: 'storage', payload: { msg: 'Entity saved.' } });
      });
    });
  }, []);

  useEffect(() => {}, []);

  return <></>;
}

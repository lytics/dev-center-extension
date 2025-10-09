import { useEffect, useRef } from 'react';

import { EmitLog } from '@src/shared/components/EmitLog';
import entityStore from '@src/shared/storages/entityStorage';
import tagConfigStore from '@src/shared/storages/tagConfigStorage';

// import extensionStateStorage from '@src/shared/storages/extensionStateStorage';

// Auto-detection function
const startAutoDetection = (domain: string) => {
  EmitLog({ name: 'content', payload: { msg: `Starting auto-detection for domain: ${domain}` } });

  // Check if jstag is already available
  if (typeof (window as any).jstag !== 'undefined') {
    EmitLog({ name: 'content', payload: { msg: 'Lytics jstag found immediately' } });
    notifyAutoDetectionSuccess(domain);
    return;
  }

  // Set up detection with retries
  let retryCount = 0;
  const maxRetries = 10;
  const retryInterval = 1000; // 1 second

  const checkForJstag = () => {
    retryCount++;

    if (typeof (window as any).jstag !== 'undefined') {
      EmitLog({ name: 'content', payload: { msg: 'Lytics jstag detected during auto-detection' } });
      notifyAutoDetectionSuccess(domain);
      return;
    }

    if (retryCount < maxRetries) {
      EmitLog({ name: 'content', payload: { msg: `Auto-detection retry ${retryCount}/${maxRetries}` } });
      setTimeout(checkForJstag, retryInterval);
    } else {
      EmitLog({ name: 'content', payload: { msg: 'Auto-detection failed - no jstag found after max retries' } });
      notifyAutoDetectionFailed(domain);
    }
  };

  // Start checking immediately
  checkForJstag();
};

// Notify background script of successful detection
const notifyAutoDetectionSuccess = (domain: string) => {
  chrome.runtime.sendMessage({
    action: 'recordDetection',
    domain: domain,
    confidence: 0.9,
  });

  EmitLog({ name: 'content', payload: { msg: `Notified background of successful detection for: ${domain}` } });
};

// Notify background script of failed detection
const notifyAutoDetectionFailed = (domain: string) => {
  chrome.runtime.sendMessage({
    action: 'autoDetectionFailed',
    domain: domain,
    retryCount: 0,
  });

  EmitLog({ name: 'content', payload: { msg: `Notified background of failed detection for: ${domain}` } });
};

export default function App() {
  const retriesRef = useRef(0);

  useEffect(() => {
    // ------------------------------
    // Handle Tag Link Injection
    // ------------------------------
    const injectScript = () => {
      const script = document.createElement('script');

      script.src = chrome.runtime.getURL('/tagLink.js');
      script.onload = () => {
        EmitLog({ name: 'content', payload: { msg: 'TagLink script loaded successfully' } });
        script.remove();
      };
      script.onerror = () => {
        EmitLog({ name: 'content', payload: { msg: 'Failed to load TagLink script', error: 'Script load error' } });
      };

      document.documentElement.appendChild(script);
    };
    injectScript();

    const handleMessage = event => {
      if (event.data && event.data.type === 'retry') {
        retriesRef.current++;
        EmitLog({ name: 'retry', payload: { retries: retriesRef.current } });
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
    chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
      if (message.action == 'getConfig') {
        window.postMessage({ action: 'getConfig' }, '*');
      }

      if (message.action == 'getEntity') {
        window.postMessage({ action: 'getEntity' }, '*');
      }

      // Handle auto-detection start message from background
      if (message.action === 'startAutoDetection') {
        const domain = message.domain || window.location.hostname;
        EmitLog({ name: 'content', payload: { msg: `Starting auto-detection for domain: ${domain}` } });

        // Start auto-detection process
        startAutoDetection(domain);
      }

      // Handle detection success notification
      if (message.action === 'detectionSuccess') {
        const domain = message.domain || window.location.hostname;
        EmitLog({ name: 'content', payload: { msg: `Detection successful for domain: ${domain}` } });

        // Notify background script about successful detection
        chrome.runtime.sendMessage({
          action: 'recordDetection',
          domain: domain,
          confidence: message.confidence || 0.8,
        });
      }

      sendResponse({ success: true });
    });

    // ------------------------------
    // Handle Requests From Tag Link
    // ------------------------------

    // Listen for and Store JS Tag Config
    document.addEventListener('config', function (event) {
      EmitLog({ name: 'content', payload: { msg: 'Config event received', data: (event as any).detail } });
      const payload = (event as any).detail.data;
      tagConfigStore
        .set(payload)
        .then(() => {
          EmitLog({ name: 'storage', payload: { msg: 'Tag config saved.' } });
        })
        .catch(error => {
          EmitLog({ name: 'storage', payload: { msg: 'Failed to save tag config', error } });
        });

      // Trigger auto-detection when config is received (high confidence)
      const domain = window.location.hostname;
      EmitLog({
        name: 'content',
        payload: { msg: `Config event received - triggering auto-detection for: ${domain}` },
      });

      chrome.runtime.sendMessage({
        action: 'recordDetection',
        domain: domain,
        confidence: 0.95, // High confidence since we got config data
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

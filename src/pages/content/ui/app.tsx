import { useEffect, useRef } from 'react';

import { EmitLog } from '@src/shared/components/EmitLog';
import entityStore from '@src/shared/storages/entityStorage';
import tagConfigStore from '@src/shared/storages/tagConfigStorage';

/**
 * Auto-Detection Flow Documentation
 * ================================
 *
 * The auto-detection system works across three main components:
 * 1. Content Script (this file) - Detects Lytics jstag on web pages
 * 2. Background Script - Manages detection state and coordinates between tabs
 * 3. Storage - Persists detection results and manages cleanup
 *
 * Detection Flow:
 * 1. User navigates to a website or switches tabs
 * 2. Background script detects tab change and sends 'startAutoDetection' message
 * 3. Content script receives message and begins detection process
 * 4. Content script checks for jstag immediately, then polls if not found
 * 5. Upon detection, content script notifies background of success
 * 6. Background script records detection and updates persistent storage
 * 7. UI displays detected domains with confidence scores
 *
 * Key Features:
 * - Immediate detection for fast-loading sites
 * - Polling with timeout for sites that load jstag asynchronously
 * - Parent domain inheritance (subdomain.example.com inherits from example.com)
 * - Time-based cleanup to prevent storage bloat
 * - Memory limits to maintain performance
 */

/**
 * Checks if the Lytics JavaScript tag (jstag) is available on the current window.
 *
 * The jstag is the core Lytics SDK that gets loaded on customer websites.
 * Its presence indicates that the site is using Lytics for data collection.
 *
 * @returns true if jstag is available and properly initialized, false otherwise
 */
export const isJstagAvailable = (): boolean => {
  return typeof (window as any).jstag !== 'undefined' && (window as any).jstag !== null;
};

/**
 * Polls for jstag availability with a timeout mechanism.
 *
 * Many websites load the Lytics tag asynchronously after the initial page load.
 * This function repeatedly checks for jstag availability and notifies the
 * background script when found or when the maximum retry limit is reached.
 *
 * Polling Strategy:
 * - Checks every 750ms for up to 5 retries (total ~3.75 seconds)
 * - Allows time for async tag loading while preventing infinite polling
 * - Provides early detection for fast-loading tags
 *
 * @param domain - The domain being checked for Lytics integration
 */
export const pollForJstag = (domain: string): void => {
  let retryCount = 0;
  const maxRetries = 5;
  const retryInterval = 750;

  const checkForJstag = async () => {
    retryCount++;

    if (isJstagAvailable()) {
      EmitLog({ name: 'content', payload: { msg: 'Lytics jstag detected during auto-detection' } });
      await notifyAutoDetectionSuccess(domain);
      return;
    }

    if (retryCount < maxRetries) {
      EmitLog({ name: 'content', payload: { msg: `Auto-detection retry ${retryCount}/${maxRetries}` } });
      setTimeout(checkForJstag, retryInterval);
    } else {
      EmitLog({ name: 'content', payload: { msg: 'Auto-detection failed - no jstag found after max retries' } });
      await notifyAutoDetectionFailed(domain);
    }
  };

  checkForJstag();
};

/**
 * Main entry point for auto-detection on a specific domain.
 *
 * This function implements a two-phase detection strategy:
 * 1. Immediate check - for websites that load jstag synchronously
 * 2. Polling phase - for websites that load jstag asynchronously
 *
 * The immediate check provides fast detection for well-optimized sites,
 * while polling handles sites that load the tag after initial page load.
 *
 * Confidence Levels:
 * - 0.9 for polling detection (high confidence, tag was found after waiting)
 * - 0.95 for config-based detection (very high confidence, received config data)
 *
 * @param domain - The domain to check for Lytics integration
 */
export const startAutoDetection = async (domain: string): Promise<void> => {
  EmitLog({ name: 'content', payload: { msg: `Starting auto-detection for domain: ${domain}` } });

  // Immediate check
  if (isJstagAvailable()) {
    EmitLog({ name: 'content', payload: { msg: 'Lytics jstag found immediately' } });
    await notifyAutoDetectionSuccess(domain);
    return;
  }

  // Start polling if not immediately available
  pollForJstag(domain);
};

/**
 * Notifies the background script that Lytics jstag was successfully detected.
 *
 * This function communicates detection results back to the extension's
 * background script, which manages the global state and persistent storage.
 * The background script will record the detection and update the UI.
 *
 * Communication is done via Chrome's messaging API to ensure proper
 * isolation between content script and background script contexts.
 *
 * @param domain - The domain where jstag was detected
 */
export const notifyAutoDetectionSuccess = async (domain: string): Promise<void> => {
  try {
    await chrome.runtime.sendMessage({
      action: 'recordDetection',
      domain: domain,
      confidence: 0.9,
    });
    EmitLog({ name: 'content', payload: { msg: `Notified background of successful detection for: ${domain}` } });
  } catch (error) {
    EmitLog({
      name: 'content',
      payload: { msg: 'Error notifying background of successful detection', error: error.message },
    });
  }
};

/**
 * Notifies the background script that Lytics jstag detection failed.
 *
 * This function is called when the polling mechanism exhausts all retries
 * without finding jstag. The background script may choose to mark this
 * domain as "not using Lytics" or simply not record it.
 *
 * Failed detections are still communicated to maintain consistency in
 * the detection workflow and allow the background script to make
 * informed decisions about retry strategies or user notifications.
 *
 * @param domain - The domain where jstag detection failed
 */
export const notifyAutoDetectionFailed = async (domain: string): Promise<void> => {
  try {
    await chrome.runtime.sendMessage({
      action: 'autoDetectionFailed',
      domain: domain,
      retryCount: 0,
    });
    EmitLog({ name: 'content', payload: { msg: `Notified background of failed detection for: ${domain}` } });
  } catch (error) {
    EmitLog({
      name: 'content',
      payload: { msg: 'Error notifying background of failed detection', error: error.message },
    });
  }
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
    /**
     * Message listener for communication with the background script.
     *
     * This listener handles several types of messages:
     * - 'startAutoDetection': Initiates jstag detection on the current page
     * - 'getConfig': Requests current tag configuration (for tag injection)
     * - 'getEntity': Requests current entity data (for tag injection)
     * - 'detectionSuccess': Handles successful detection notifications
     *
     * The listener returns true to keep the message channel open during
     * async operations, which is required for Chrome extension messaging.
     */
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      // Handle async operations by returning true to keep message channel open
      (async () => {
        try {
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
            await startAutoDetection(domain);
          }

          // Handle detection success notification
          if (message.action === 'detectionSuccess') {
            const domain = message.domain || window.location.hostname;
            EmitLog({ name: 'content', payload: { msg: `Detection successful for domain: ${domain}` } });

            // Notify background script about successful detection
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

      // Return true to keep message channel open for async operations
      return true;
    });

    // ------------------------------
    // Handle Requests From Tag Link
    // ------------------------------

    // Listen for and Store JS Tag Config
    document.addEventListener('config', function (event) {
      EmitLog({ name: 'content', payload: { msg: 'Config event received', data: (event as any).detail } });
      const payload = (event as any).detail.data;

      // Send to background script for per-tab storage
      chrome.runtime.sendMessage({
        action: 'saveTagConfig',
        payload: payload,
      });

      // Also save to global storage for backwards compatibility
      tagConfigStore
        .set(payload)
        .then(() => {
          EmitLog({ name: 'storage', payload: { msg: 'Tag config saved to global storage.' } });
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

      // Send to background script for per-tab storage
      chrome.runtime.sendMessage({
        action: 'saveEntity',
        payload: payload,
      });

      // Also save to global storage for backwards compatibility
      entityStore.set(payload).then(() => {
        EmitLog({ name: 'storage', payload: { msg: 'Entity saved to global storage.' } });
      });
    });
  }, []);

  useEffect(() => {}, []);

  return <></>;
}

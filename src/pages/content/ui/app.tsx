import { useEffect, useRef } from 'react';

import {
  isJstagAvailable,
  notifyAutoDetectionFailed,
  notifyAutoDetectionSuccess,
  pollForJstag,
  startAutoDetection,
} from '../modules/autoDetection';
import { setupConfigEventListener, setupEntityEventListener } from '../modules/eventHandler';
import { setupChromeMessageListener } from '../modules/messageHandler';
import { injectScript, setupBackgroundToContentListener, setupRetryHandler } from '../modules/scriptInjection';

export { isJstagAvailable, notifyAutoDetectionFailed, notifyAutoDetectionSuccess, pollForJstag, startAutoDetection };

export default function App() {
  const retriesRef = useRef(0);

  useEffect(() => {
    injectScript();
    setupRetryHandler(retriesRef);
    setupBackgroundToContentListener();
    setupChromeMessageListener();
    setupConfigEventListener();
    setupEntityEventListener();
  }, []);

  return null;
}

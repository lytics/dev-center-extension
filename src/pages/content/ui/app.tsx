import { useEffect, useRef, useState } from 'react';

import { EmitLog } from '@src/shared/components/EmitLog';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';

import { setupConfigEventListener, setupEntityEventListener } from '../modules/eventHandler';
import { setupChromeMessageListener } from '../modules/messageHandler';
import { injectScript, setupBackgroundToContentListener, setupRetryHandler } from '../modules/scriptInjection';

export default function App() {
  const retriesRef = useRef(0);
  const [isExtensionEnabled, setIsExtensionEnabled] = useState<boolean | null>(null);
  const scriptInjectedRef = useRef(false);

  useEffect(() => {
    extensionStateStorage.get().then(state => {
      setIsExtensionEnabled(state);
      EmitLog({ name: 'content', payload: { msg: `Extension state loaded: ${state}` } });
    });

    const unsubscribe = extensionStateStorage.subscribe(() => {
      extensionStateStorage.get().then(state => {
        setIsExtensionEnabled(state);
        EmitLog({ name: 'content', payload: { msg: `Extension state changed: ${state}` } });

        if (state) {
          scriptInjectedRef.current = false;
        }
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (isExtensionEnabled === null) {
      return;
    }

    if (!isExtensionEnabled) {
      EmitLog({
        name: 'content',
        payload: { msg: 'Extension disabled - skipping TagLink injection and data collection' },
      });
      return;
    }

    injectScript(scriptInjectedRef);
    setupRetryHandler(retriesRef, scriptInjectedRef);
    setupBackgroundToContentListener();
    setupChromeMessageListener();
    setupConfigEventListener();
    setupEntityEventListener();
  }, [isExtensionEnabled]);

  return null;
}

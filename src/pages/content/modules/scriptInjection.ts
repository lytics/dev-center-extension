import { MutableRefObject } from 'react';

import { EmitLog } from '@src/shared/components/EmitLog';

export const injectScript = (scriptInjectedRef?: MutableRefObject<boolean>) => {
  if (scriptInjectedRef?.current) {
    EmitLog({ name: 'content', payload: { msg: 'TagLink script already injected, skipping' } });
    return;
  }

  const script = document.createElement('script');

  script.src = chrome.runtime.getURL('/tagLink.js');
  script.onload = () => {
    EmitLog({ name: 'content', payload: { msg: 'TagLink script loaded successfully' } });
    if (scriptInjectedRef) {
      scriptInjectedRef.current = true;
    }
    script.remove();
  };
  script.onerror = () => {
    EmitLog({ name: 'content', payload: { msg: 'Failed to load TagLink script', error: 'Script load error' } });
  };

  document.documentElement.appendChild(script);
};

export const setupRetryHandler = (
  retriesRef: MutableRefObject<number>,
  scriptInjectedRef?: MutableRefObject<boolean>,
) => {
  const handleMessage = event => {
    if (event.data && event.data.type === 'retry') {
      retriesRef.current++;
      EmitLog({ name: 'retry', payload: { retries: retriesRef.current } });
      injectScript(scriptInjectedRef);
    }
  };
  window.addEventListener('message', handleMessage);
  return handleMessage;
};

export const setupBackgroundToContentListener = () => {
  const handleMessage = function (event) {
    if (event.source === window && event.data.action === 'backgroundToContent') {
      const backgroundData = event.data.data;
      EmitLog({
        name: 'message',
        payload: { msg: 'Received message from background in content.', data: backgroundData },
      });
    }
  };
  window.addEventListener('message', handleMessage);
  return handleMessage;
};

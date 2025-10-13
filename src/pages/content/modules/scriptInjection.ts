import { EmitLog } from '@src/shared/components/EmitLog';

export const injectScript = () => {
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

export const setupRetryHandler = (retriesRef: React.MutableRefObject<number>) => {
  const handleMessage = event => {
    if (event.data && event.data.type === 'retry') {
      retriesRef.current++;
      EmitLog({ name: 'retry', payload: { retries: retriesRef.current } });
      injectScript();
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

import { createRoot } from 'react-dom/client';
import App from '@pages/content/ui/app';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';
import { domainStore } from '@src/shared/storages/extensionDomainStorage';
import { EmitLog } from '@src/shared/components/EmitLog';

let isContentScriptInitialized = false;

const initContentScripts = () => {
  // Prevent double initialization
  if (isContentScriptInitialized) {
    EmitLog({ name: 'content', payload: { msg: 'Content scripts already initialized' } });
    return;
  }

  extensionStateStorage.subscribe(handleStateChange);

  const root = document.createElement('div');
  root.id = 'lytics-dev-tools';

  document.body.append(root);

  const rootIntoShadow = document.createElement('div');
  rootIntoShadow.id = 'shadow-root';

  const shadowRoot = root.attachShadow({ mode: 'open' });
  shadowRoot.appendChild(rootIntoShadow);

  createRoot(rootIntoShadow).render(<App />);

  isContentScriptInitialized = true;
  EmitLog({ name: 'content', payload: { msg: 'Content scripts initialized successfully' } });
};

const handleStateChange = () => {
  extensionStateStorage.get().then(state => {
    if (state === true) {
      EmitLog({ name: 'content', payload: { msg: 'Extension Activated' } });

      // Initialize content scripts on ALL domains when extension is enabled (for auto-detection)
      EmitLog({ name: 'content', payload: { msg: 'Adding Content Scripts for auto-detection' } });
      initContentScripts();

      // Additional logic for pinned domain compatibility
      domainStore.get().then(domain => {
        const translated = domainStore.translate(domain);

        if (translated.pinnedURL !== '') {
          if (window.location.href.includes(translated.pinnedURL)) {
            EmitLog({ name: 'content', payload: { msg: 'On configured domain - full features available' } });
          } else {
            EmitLog({ name: 'content', payload: { msg: 'Not on configured domain - auto-detection only' } });
          }
        } else {
          EmitLog({ name: 'content', payload: { msg: 'No domain set - auto-detection active' } });
        }
      });
    }
  });
};
extensionStateStorage.subscribe(handleStateChange);

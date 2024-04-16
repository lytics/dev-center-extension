import { createRoot } from 'react-dom/client';
import App from '@pages/content/ui/app';
// import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';
import domainStore from '@root/src/shared/storages/extensionDomainStorage';
import { EmitLog } from '@src/shared/components/EmitLog';

const initContentScripts = () => {
  extensionStateStorage.subscribe(handleStateChange);

  // refreshOnUpdate('pages/content');

  const root = document.createElement('div');
  root.id = 'lytics-dev-tools';

  document.body.append(root);

  const rootIntoShadow = document.createElement('div');
  rootIntoShadow.id = 'shadow-root';

  const shadowRoot = root.attachShadow({ mode: 'open' });
  shadowRoot.appendChild(rootIntoShadow);

  createRoot(rootIntoShadow).render(<App />);
};

const handleStateChange = () => {
  extensionStateStorage.get().then(state => {
    if (state === true) {
      EmitLog({ name: 'content', payload: { msg: 'Extension Activated' } });

      // only initialize content scripts if we are on the allowed domain
      domainStore.get().then(domain => {
        if (domain !== '') {
          if (window.location.href.includes(domain)) {
            EmitLog({ name: 'content', payload: { msg: 'Adding Content Scripts' } });
            initContentScripts();
          } else {
            EmitLog({ name: 'content', payload: { msg: 'Not on configured domain' } });
          }
        } else {
          EmitLog({ name: 'content', payload: { msg: 'No domain set' } });
        }
      });
    }
  });
};
extensionStateStorage.subscribe(handleStateChange);

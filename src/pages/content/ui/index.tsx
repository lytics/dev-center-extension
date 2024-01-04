import { createRoot } from 'react-dom/client';
import App from '@pages/content/ui/app';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';
import { EmitLog } from '@src/shared/components/EmitLog';

const initContentScripts = () => {
  extensionStateStorage.subscribe(handleStateChange);

  refreshOnUpdate('pages/content');

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
      initContentScripts();
    } else {
      // EmitLog({ name: 'content', payload: { msg: 'Extension Deactivated' } });
    }
  });
};
extensionStateStorage.subscribe(handleStateChange);

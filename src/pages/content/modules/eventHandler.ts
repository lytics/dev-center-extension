import { EmitLog } from '@src/shared/components/EmitLog';
import entityStore from '@src/shared/storages/entityStorage';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';
import tagConfigStore from '@src/shared/storages/tagConfigStorage';

export const setupConfigEventListener = () => {
  const handleConfigEvent = async function (event) {
    const currentState = await extensionStateStorage.get();
    if (!currentState) {
      EmitLog({ name: 'content', payload: { msg: 'Extension disabled - ignoring config event' } });
      return;
    }

    EmitLog({ name: 'content', payload: { msg: 'Config event received', data: (event as any).detail } });
    const payload = (event as any).detail.data;

    chrome.runtime.sendMessage({
      action: 'saveTagConfig',
      payload: payload,
    });

    tagConfigStore
      .set(payload)
      .then(() => {
        EmitLog({ name: 'storage', payload: { msg: 'Tag config saved to global storage.' } });
      })
      .catch(error => {
        EmitLog({ name: 'storage', payload: { msg: 'Failed to save tag config', error } });
      });

    const domain = window.location.hostname;
    EmitLog({
      name: 'content',
      payload: { msg: `Config event received - triggering auto-detection for: ${domain}` },
    });

    chrome.runtime.sendMessage({
      action: 'recordDetection',
      domain: domain,
      confidence: 0.95,
    });
  };
  document.addEventListener('config', handleConfigEvent);
  return handleConfigEvent;
};

export const setupEntityEventListener = () => {
  const handleEntityEvent = async function (event) {
    const currentState = await extensionStateStorage.get();
    if (!currentState) {
      EmitLog({ name: 'content', payload: { msg: 'Extension disabled - ignoring entity event' } });
      return;
    }

    const payload = (event as any).detail.data;

    chrome.runtime.sendMessage({
      action: 'saveEntity',
      payload: payload,
    });

    entityStore.set(payload).then(() => {
      EmitLog({ name: 'storage', payload: { msg: 'Entity saved to global storage.' } });
    });
  };
  document.addEventListener('entity', handleEntityEvent);
  return handleEntityEvent;
};

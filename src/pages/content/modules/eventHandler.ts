import { EmitLog } from '@src/shared/components/EmitLog';
import entityStore from '@src/shared/storages/entityStorage';
import tagConfigStore from '@src/shared/storages/tagConfigStorage';

export const setupConfigEventListener = () => {
  const handleConfigEvent = function (event) {
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
  const handleEntityEvent = function (event) {
    const payload = (event as any).detail.data;
    entityStore.set(payload).then(() => {
      EmitLog({ name: 'storage', payload: { msg: 'Entity saved.' } });
    });
  };
  document.addEventListener('entity', handleEntityEvent);
  return handleEntityEvent;
};

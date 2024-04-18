import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';
import { EmitLog } from '@src/shared/components/EmitLog';

const DomainStorageKey = 'lyticsDomain';

type DomainStorage = BaseStorage<string> & {
  clear: () => void;
};

const storage = createStorage<string>(DomainStorageKey, '', {
  storageType: StorageType.Local,
  liveUpdate: true,
});

const domainStore: DomainStorage = {
  ...storage,
  clear: () => {
    chrome.storage.local.remove(DomainStorageKey, () => {
      EmitLog({ name: 'storage', payload: { msg: `Data associated with ${DomainStorageKey} cleared.` } });
    });
  },
};

export default domainStore;

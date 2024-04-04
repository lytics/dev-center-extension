import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';
import { EmitLog } from '@src/shared/components/EmitLog';

const RetryStorageKey = 'retryStorage';

type RetryStorage = BaseStorage<string[]> & {
  clear: () => void;
  add: (value: string) => void;
};

const storage = createStorage<string[]>(RetryStorageKey, [], {
  storageType: StorageType.Local,
  liveUpdate: true,
});

const retryStore: RetryStorage = {
  ...storage,
  clear: () => {
    chrome.storage.local.remove(RetryStorageKey, () => {
      EmitLog({ name: 'storage', payload: { msg: `Data associated with ${RetryStorageKey} cleared.` } });
    });
  },
  add: value => {
    storage.get().then(currentValue => {
      storage.set([...currentValue, value]);
    });
  },
};

export default retryStore;

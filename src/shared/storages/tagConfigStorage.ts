import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';
import { EmitLog } from '../components/EmitLog';

const TagConfigStorageKey = 'tagConfigStorage';

type TagConfigStorage = BaseStorage<string> & {
  clear: () => void;
};

const storage = createStorage<string>(TagConfigStorageKey, '', {
  storageType: StorageType.Local,
  liveUpdate: true,
});

const tagConfigStore: TagConfigStorage = {
  ...storage,
  clear: () => {
    chrome.storage.local.remove(TagConfigStorageKey, () => {
      EmitLog({ name: 'storage', payload: { msg: `Data associated with ${TagConfigStorageKey} cleared.` } });
    });
  },
};

export default tagConfigStore;

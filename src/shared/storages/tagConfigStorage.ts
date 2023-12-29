import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

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
      console.log(`Data associated with ${TagConfigStorageKey} cleared.`);
    });
  },
};

export default tagConfigStore;
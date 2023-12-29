import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

const EntityStorageKey = 'entityStorage';

type EntityStorage = BaseStorage<string> & {
  clear: () => void;
};

const storage = createStorage<string>(EntityStorageKey, '', {
  storageType: StorageType.Local,
  liveUpdate: true,
});

const entityStore: EntityStorage = {
  ...storage,
  clear: () => {
    chrome.storage.local.remove(EntityStorageKey, () => {
      console.log(`Data associated with ${EntityStorageKey} cleared.`);
    });
  },
};

export default entityStore;
import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

const TagActivityStorageKey = 'tagActivityStorage';

type TagActivityStorage = BaseStorage<string[]> & {
  clear: () => void;
  add: (value: string) => void;
};

const storage = createStorage<string[]>(TagActivityStorageKey, [], {
  storageType: StorageType.Local,
  liveUpdate: true,
});

const tagActivityStore: TagActivityStorage = {
  ...storage,
  clear: () => {
    storage.set([]); // Clear the stored array by setting it to an empty array
  },
  add: (value) => {
    storage.get().then((currentValue) => {
      storage.set([...currentValue, value]);
    });
  },
};

export default tagActivityStore;

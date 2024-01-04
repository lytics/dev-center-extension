import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';
import { EmitLog } from '@src/shared/components/EmitLog';

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
    chrome.storage.local.remove(TagActivityStorageKey, () => {
      EmitLog({ name: 'storage', payload: { msg: `Data associated with ${TagActivityStorageKey} cleared.` } });
    });
  },
  add: value => {
    storage.get().then(currentValue => {
      storage.set([...currentValue, value]);
    });
  },
};

export default tagActivityStore;

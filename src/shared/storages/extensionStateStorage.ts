import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

type ExtensionState = BaseStorage<boolean> & {
  toggle: () => void;
};

const storage = createStorage<boolean>('extensionState', false, {
  storageType: StorageType.Local,
  liveUpdate: true,
});

const extensionStateStorage: ExtensionState = {
  ...storage,
  toggle: () => {
    storage.set(currentExtensionState => {
      return !currentExtensionState;
    });
  },
};

export default extensionStateStorage;

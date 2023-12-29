import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

type ProfileStorage = BaseStorage<boolean> & {
  // toggle: () => void;
};

const storage = createStorage<boolean>('profileStorage', false, {
  storageType: StorageType.Local,
  liveUpdate: true,
});

const profileStorage: ProfileStorage = {
  ...storage,
  // toggle: () => {
  //   storage.set(currentExtensionState => {
  //     return !currentExtensionState;
  //   });
  // },
};

export default profileStorage;

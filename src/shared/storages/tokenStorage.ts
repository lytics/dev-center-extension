import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

const TokenStorageKey = 'lyticsToken';

type TokenStorage = BaseStorage<string> & {
  clear: () => void;
};

const storage = createStorage<string>(TokenStorageKey, '', {
  storageType: StorageType.Local,
  liveUpdate: true,
});

const tokenStore: TokenStorage = {
  ...storage,
  clear: () => {
    chrome.storage.local.remove(TokenStorageKey, () => {
      console.log(`Data associated with ${TokenStorageKey} cleared.`);
    });
  },
};

export default tokenStore;
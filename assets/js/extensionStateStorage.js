import { c as createStorage, S as StorageType } from "./base.js";
const TagConfigStorageKey = "tagConfigStorage";
const storage$3 = createStorage(TagConfigStorageKey, "", {
  storageType: StorageType.Local,
  liveUpdate: true
});
const tagConfigStore = {
  ...storage$3,
  clear: () => {
    chrome.storage.local.remove(TagConfigStorageKey, () => {
    });
  }
};
const EntityStorageKey = "entityStorage";
const storage$2 = createStorage(EntityStorageKey, "", {
  storageType: StorageType.Local,
  liveUpdate: true
});
const entityStore = {
  ...storage$2,
  clear: () => {
    chrome.storage.local.remove(EntityStorageKey, () => {
    });
  }
};
const DomainStorageKey = "lyticsDomain";
const storage$1 = createStorage(DomainStorageKey, "", {
  storageType: StorageType.Local,
  liveUpdate: true
});
const domainStore = {
  ...storage$1,
  clear: () => {
    chrome.storage.local.remove(DomainStorageKey, () => {
    });
  }
};
const storage = createStorage("extensionState", false, {
  storageType: StorageType.Local,
  liveUpdate: true
});
const extensionStateStorage = {
  ...storage,
  toggle: () => {
    storage.set((currentExtensionState) => {
      return !currentExtensionState;
    });
  }
};
export {
  entityStore as a,
  domainStore as d,
  extensionStateStorage as e,
  tagConfigStore as t
};

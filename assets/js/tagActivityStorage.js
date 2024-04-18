import { c as createStorage, S as StorageType } from "./base.js";
const TagActivityStorageKey = "tagActivityStorage";
const storage = createStorage(TagActivityStorageKey, [], {
  storageType: StorageType.Local,
  liveUpdate: true
});
const tagActivityStore = {
  ...storage,
  clear: () => {
    chrome.storage.local.remove(TagActivityStorageKey, () => {
    });
  },
  add: (value) => {
    storage.get().then((currentValue) => {
      storage.set([...currentValue, value]);
    });
  }
};
export {
  tagActivityStore as t
};

import { r as reactExports } from "./client.js";
const storageMap = /* @__PURE__ */ new Map();
function useStorage(storage) {
  const _data = reactExports.useSyncExternalStore(storage.subscribe, storage.getSnapshot);
  if (!storageMap.has(storage)) {
    storageMap.set(storage, wrapPromise(storage.get()));
  }
  if (_data !== null) {
    storageMap.set(storage, { read: () => _data });
  }
  return _data ?? storageMap.get(storage).read();
}
function wrapPromise(promise) {
  let status = "pending";
  let result;
  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}
export {
  useStorage as u
};

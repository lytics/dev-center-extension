import { e as extensionStateStorage, d as domainStore, t as tagConfigStore, a as entityStore } from "../../../assets/js/extensionStateStorage.js";
import { t as tagActivityStore } from "../../../assets/js/tagActivityStorage.js";
import { c as commonjsGlobal } from "../../../assets/js/_commonjsHelpers.js";
import "../../../assets/js/base.js";
var browserPolyfill = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    {
      factory(module);
    }
  })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : commonjsGlobal, function(module2) {
    var _a, _b;
    if (!((_b = (_a = globalThis.chrome) == null ? void 0 : _a.runtime) == null ? void 0 : _b.id)) {
      throw new Error("This script should only be loaded in a browser extension.");
    }
    if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
      const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
      const wrapAPIs = (extensionAPIs) => {
        const apiMetadata = {
          "alarms": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "clearAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "bookmarks": {
            "create": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getChildren": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getRecent": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getSubTree": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getTree": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "move": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeTree": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "search": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          },
          "browserAction": {
            "disable": {
              "minArgs": 0,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "enable": {
              "minArgs": 0,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "getBadgeBackgroundColor": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getBadgeText": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getPopup": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getTitle": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "openPopup": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "setBadgeBackgroundColor": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setBadgeText": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setIcon": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "setPopup": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setTitle": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            }
          },
          "browsingData": {
            "remove": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "removeCache": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeCookies": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeDownloads": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeFormData": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeHistory": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeLocalStorage": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removePasswords": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removePluginData": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "settings": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "commands": {
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "contextMenus": {
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          },
          "cookies": {
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAllCookieStores": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "devtools": {
            "inspectedWindow": {
              "eval": {
                "minArgs": 1,
                "maxArgs": 2,
                "singleCallbackArg": false
              }
            },
            "panels": {
              "create": {
                "minArgs": 3,
                "maxArgs": 3,
                "singleCallbackArg": true
              },
              "elements": {
                "createSidebarPane": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              }
            }
          },
          "downloads": {
            "cancel": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "download": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "erase": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getFileIcon": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "open": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "pause": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeFile": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "resume": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "search": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "show": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            }
          },
          "extension": {
            "isAllowedFileSchemeAccess": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "isAllowedIncognitoAccess": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "history": {
            "addUrl": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "deleteAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "deleteRange": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "deleteUrl": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getVisits": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "search": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "i18n": {
            "detectLanguage": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAcceptLanguages": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "identity": {
            "launchWebAuthFlow": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "idle": {
            "queryState": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "management": {
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getSelf": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "setEnabled": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "uninstallSelf": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "notifications": {
            "clear": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "create": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getPermissionLevel": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          },
          "pageAction": {
            "getPopup": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getTitle": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "hide": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setIcon": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "setPopup": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setTitle": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "show": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            }
          },
          "permissions": {
            "contains": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "request": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "runtime": {
            "getBackgroundPage": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getPlatformInfo": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "openOptionsPage": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "requestUpdateCheck": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "sendMessage": {
              "minArgs": 1,
              "maxArgs": 3
            },
            "sendNativeMessage": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "setUninstallURL": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "sessions": {
            "getDevices": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getRecentlyClosed": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "restore": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "storage": {
            "local": {
              "clear": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "get": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getBytesInUse": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "set": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "managed": {
              "get": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getBytesInUse": {
                "minArgs": 0,
                "maxArgs": 1
              }
            },
            "sync": {
              "clear": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "get": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getBytesInUse": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "set": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          },
          "tabs": {
            "captureVisibleTab": {
              "minArgs": 0,
              "maxArgs": 2
            },
            "create": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "detectLanguage": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "discard": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "duplicate": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "executeScript": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getCurrent": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getZoom": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getZoomSettings": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "goBack": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "goForward": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "highlight": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "insertCSS": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "move": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "query": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "reload": {
              "minArgs": 0,
              "maxArgs": 2
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeCSS": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "sendMessage": {
              "minArgs": 2,
              "maxArgs": 3
            },
            "setZoom": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "setZoomSettings": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "update": {
              "minArgs": 1,
              "maxArgs": 2
            }
          },
          "topSites": {
            "get": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "webNavigation": {
            "getAllFrames": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getFrame": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "webRequest": {
            "handlerBehaviorChanged": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "windows": {
            "create": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "get": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getCurrent": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getLastFocused": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          }
        };
        if (Object.keys(apiMetadata).length === 0) {
          throw new Error("api-metadata.json has not been included in browser-polyfill");
        }
        class DefaultWeakMap extends WeakMap {
          constructor(createItem, items = void 0) {
            super(items);
            this.createItem = createItem;
          }
          get(key) {
            if (!this.has(key)) {
              this.set(key, this.createItem(key));
            }
            return super.get(key);
          }
        }
        const isThenable = (value) => {
          return value && typeof value === "object" && typeof value.then === "function";
        };
        const makeCallback = (promise, metadata) => {
          return (...callbackArgs) => {
            if (extensionAPIs.runtime.lastError) {
              promise.reject(new Error(extensionAPIs.runtime.lastError.message));
            } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
              promise.resolve(callbackArgs[0]);
            } else {
              promise.resolve(callbackArgs);
            }
          };
        };
        const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
        const wrapAsyncFunction = (name, metadata) => {
          return function asyncFunctionWrapper(target, ...args) {
            if (args.length < metadata.minArgs) {
              throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
            }
            if (args.length > metadata.maxArgs) {
              throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
            }
            return new Promise((resolve, reject) => {
              if (metadata.fallbackToNoCallback) {
                try {
                  target[name](...args, makeCallback({
                    resolve,
                    reject
                  }, metadata));
                } catch (cbError) {
                  console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                  target[name](...args);
                  metadata.fallbackToNoCallback = false;
                  metadata.noCallback = true;
                  resolve();
                }
              } else if (metadata.noCallback) {
                target[name](...args);
                resolve();
              } else {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              }
            });
          };
        };
        const wrapMethod = (target, method, wrapper) => {
          return new Proxy(method, {
            apply(targetMethod, thisObj, args) {
              return wrapper.call(thisObj, target, ...args);
            }
          });
        };
        let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
        const wrapObject = (target, wrappers = {}, metadata = {}) => {
          let cache = /* @__PURE__ */ Object.create(null);
          let handlers = {
            has(proxyTarget2, prop) {
              return prop in target || prop in cache;
            },
            get(proxyTarget2, prop, receiver) {
              if (prop in cache) {
                return cache[prop];
              }
              if (!(prop in target)) {
                return void 0;
              }
              let value = target[prop];
              if (typeof value === "function") {
                if (typeof wrappers[prop] === "function") {
                  value = wrapMethod(target, target[prop], wrappers[prop]);
                } else if (hasOwnProperty(metadata, prop)) {
                  let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                  value = wrapMethod(target, target[prop], wrapper);
                } else {
                  value = value.bind(target);
                }
              } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                value = wrapObject(value, wrappers[prop], metadata[prop]);
              } else if (hasOwnProperty(metadata, "*")) {
                value = wrapObject(value, wrappers[prop], metadata["*"]);
              } else {
                Object.defineProperty(cache, prop, {
                  configurable: true,
                  enumerable: true,
                  get() {
                    return target[prop];
                  },
                  set(value2) {
                    target[prop] = value2;
                  }
                });
                return value;
              }
              cache[prop] = value;
              return value;
            },
            set(proxyTarget2, prop, value, receiver) {
              if (prop in cache) {
                cache[prop] = value;
              } else {
                target[prop] = value;
              }
              return true;
            },
            defineProperty(proxyTarget2, prop, desc) {
              return Reflect.defineProperty(cache, prop, desc);
            },
            deleteProperty(proxyTarget2, prop) {
              return Reflect.deleteProperty(cache, prop);
            }
          };
          let proxyTarget = Object.create(target);
          return new Proxy(proxyTarget, handlers);
        };
        const wrapEvent = (wrapperMap) => ({
          addListener(target, listener, ...args) {
            target.addListener(wrapperMap.get(listener), ...args);
          },
          hasListener(target, listener) {
            return target.hasListener(wrapperMap.get(listener));
          },
          removeListener(target, listener) {
            target.removeListener(wrapperMap.get(listener));
          }
        });
        const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
          if (typeof listener !== "function") {
            return listener;
          }
          return function onRequestFinished(req) {
            const wrappedReq = wrapObject(
              req,
              {},
              {
                getContent: {
                  minArgs: 0,
                  maxArgs: 0
                }
              }
            );
            listener(wrappedReq);
          };
        });
        const onMessageWrappers = new DefaultWeakMap((listener) => {
          if (typeof listener !== "function") {
            return listener;
          }
          return function onMessage(message, sender, sendResponse) {
            let didCallSendResponse = false;
            let wrappedSendResponse;
            let sendResponsePromise = new Promise((resolve) => {
              wrappedSendResponse = function(response) {
                didCallSendResponse = true;
                resolve(response);
              };
            });
            let result;
            try {
              result = listener(message, sender, wrappedSendResponse);
            } catch (err) {
              result = Promise.reject(err);
            }
            const isResultThenable = result !== true && isThenable(result);
            if (result !== true && !isResultThenable && !didCallSendResponse) {
              return false;
            }
            const sendPromisedResult = (promise) => {
              promise.then((msg) => {
                sendResponse(msg);
              }, (error) => {
                let message2;
                if (error && (error instanceof Error || typeof error.message === "string")) {
                  message2 = error.message;
                } else {
                  message2 = "An unexpected error occurred";
                }
                sendResponse({
                  __mozWebExtensionPolyfillReject__: true,
                  message: message2
                });
              }).catch((err) => {
                console.error("Failed to send onMessage rejected reply", err);
              });
            };
            if (isResultThenable) {
              sendPromisedResult(result);
            } else {
              sendPromisedResult(sendResponsePromise);
            }
            return true;
          };
        });
        const wrappedSendMessageCallback = ({
          reject,
          resolve
        }, reply) => {
          if (extensionAPIs.runtime.lastError) {
            if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
              resolve();
            } else {
              reject(new Error(extensionAPIs.runtime.lastError.message));
            }
          } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
            reject(new Error(reply.message));
          } else {
            resolve(reply);
          }
        };
        const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }
          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }
          return new Promise((resolve, reject) => {
            const wrappedCb = wrappedSendMessageCallback.bind(null, {
              resolve,
              reject
            });
            args.push(wrappedCb);
            apiNamespaceObj.sendMessage(...args);
          });
        };
        const staticWrappers = {
          devtools: {
            network: {
              onRequestFinished: wrapEvent(onRequestFinishedWrappers)
            }
          },
          runtime: {
            onMessage: wrapEvent(onMessageWrappers),
            onMessageExternal: wrapEvent(onMessageWrappers),
            sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
              minArgs: 1,
              maxArgs: 3
            })
          },
          tabs: {
            sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
              minArgs: 2,
              maxArgs: 3
            })
          }
        };
        const settingMetadata = {
          clear: {
            minArgs: 1,
            maxArgs: 1
          },
          get: {
            minArgs: 1,
            maxArgs: 1
          },
          set: {
            minArgs: 1,
            maxArgs: 1
          }
        };
        apiMetadata.privacy = {
          network: {
            "*": settingMetadata
          },
          services: {
            "*": settingMetadata
          },
          websites: {
            "*": settingMetadata
          }
        };
        return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
      };
      module2.exports = wrapAPIs(chrome);
    } else {
      module2.exports = globalThis.browser;
    }
  });
})(browserPolyfill);
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openSidePanel",
    title: "Launch Lytics Dev Tools",
    contexts: ["all"]
  });
  chrome.tabs.create({ url: "src/pages/sidepanel/index.html" });
});
chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    chrome.sidePanel.open({ tabId: currentTab.id });
  });
});
chrome.runtime.onStartup.addListener(() => {
  chrome.tabs.create({ url: "src/pages/sidepanel/index.html" });
});
chrome.runtime.onMessage.addListener((message, sender) => {
  (async () => {
    if (message.type === "open_side_panel") {
      await chrome.sidePanel.open({ tabId: sender.tab.id });
      await chrome.sidePanel.setOptions({
        tabId: sender.tab.id,
        path: "src/pages/sidepanel/index.html",
        enabled: true
      });
    }
  })();
});
chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url)
    return;
  await chrome.sidePanel.setOptions({
    tabId,
    path: "src/pages/sidepanel/index.html",
    enabled: true
  });
});
const handleStateChange = () => {
  extensionStateStorage.get().then((state) => {
    if (state === true) {
      chrome.action.setIcon({
        path: {
          "16": "../../../assets/img/icon-active.png",
          "48": "../../../assets/img/icon-active.png",
          "128": "../../../assets/img/icon-active.png"
        }
      });
      clearAllThings();
      chrome.webRequest.onBeforeRequest.addListener(
        handleNetworkTraffic,
        {
          urls: ["*://*.lytics.io/*"]
        },
        ["requestBody"]
      );
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0)
          ;
      });
    } else {
      chrome.action.setIcon({
        path: {
          "16": "../../../assets/img/icon-inactive.png",
          "48": "../../../assets/img/icon-inactive.png",
          "128": "../../../assets/img/icon-inactive.png"
        }
      });
      clearAllThings();
      chrome.webRequest.onBeforeRequest.removeListener(handleNetworkTraffic);
    }
  });
};
extensionStateStorage.subscribe(handleStateChange);
const clearAllThings = () => {
  tagConfigStore.clear();
  entityStore.clear();
  tagActivityStore.clear();
  domainStore.clear();
};
let stickyDomain = "";
domainStore.get().then((domain) => {
  stickyDomain = domain;
});
const handleStickyDomainSet = () => {
  clearAllThings();
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      const tab = tabs[0];
      const tabUrl = tab.url;
      if (tabUrl) {
        stickyDomain = new URL(tabUrl).hostname;
        domainStore.set(stickyDomain);
      }
    }
  });
};
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "setStickyDomain") {
    handleStickyDomainSet();
  }
});
const parseURL = (url, body, type) => {
  const parsedURL = new URL(url);
  const parsedBody = new URLSearchParams(body);
  const protocol = parsedURL.protocol;
  const host = parsedURL.host;
  const pathname = parsedURL.pathname;
  const search = parsedURL.search;
  const queryParams = new URLSearchParams(search);
  const queryParamObj = {};
  queryParams.forEach((value, key) => {
    queryParamObj[key] = value;
  });
  const parsedBodyDataObj = {};
  if (parsedBody) {
    parsedBody.forEach((value, key) => {
      parsedBodyDataObj[key] = decodeURIComponent(value);
    });
  }
  let ts;
  if (queryParamObj.ts) {
    ts = queryParamObj.ts;
  } else if (parsedBodyDataObj.ts) {
    ts = parsedBodyDataObj.ts;
  } else {
    ts = Date.now().toString();
  }
  let description;
  switch (type) {
    case "load-js-tag":
      description = "Loaded the core Lytics JavaScript SDK. Used for collecting data and surfacing the active visitors profile back to the browser.";
      break;
    case "load-profile":
      description = "Loaded the active visitors full profile from Lytics.";
      break;
    case "collect-data":
      description = "Collected data via jstag.send based on visitor activity.";
      break;
    case "load-pathfora-tag":
      description = "Loaded the Pathfora JavaScript SDK for advanced onsite personalization.";
      break;
    case "load-pathfora-css":
      description = "Loaded the default Pathfora JavaScript SDK styles to ensure modals and inline widgets are styled correctly.";
      break;
    case "load-experience-config":
      description = "Loaded the experience configurations from the Lytics Experience Engine.";
      break;
    case "load-campaign-config":
      description = "Loaded the legacy campaign configurations from Lytics. This feature is being deprecated. Reach out to support for additional guidance.";
      break;
    default:
      description = `Communicated with Lytics via a generic or unhandled request (${type}).`;
  }
  return {
    protocol,
    host,
    pathname,
    queryParamObj,
    parsedBodyDataObj,
    ts: parseInt(ts),
    type,
    description
  };
};
const handleNetworkTraffic = (details) => {
  var _a, _b;
  const activeTabUrl = details.initiator;
  if (!activeTabUrl) {
    return;
  }
  const activeDomain = new URL(activeTabUrl).hostname;
  if (activeDomain !== stickyDomain) {
    return;
  }
  const url = details.url;
  let postData;
  let result;
  switch (true) {
    case url.includes("/api/tag/"):
      result = parseURL(url, {}, "load-js-tag");
      break;
    case url.includes("/api/personalize/"):
      result = parseURL(url, {}, "load-profile");
      break;
    case url.includes("/c/"):
      if (details.requestBody) {
        postData = (_b = (_a = details == null ? void 0 : details.requestBody) == null ? void 0 : _a.formData) == null ? void 0 : _b._js[0];
      }
      result = parseURL(url, postData || {}, "collect-data");
      break;
    case url.includes("/static/pathfora.min.js"):
      result = parseURL(url, {}, "load-pathfora-tag");
      break;
    case url.includes("static/pathfora.min.css"):
      result = parseURL(url, {}, "load-pathfora-css");
      break;
    case url.includes("/experience/candidate"):
      result = parseURL(url, {}, "load-experience-config");
      break;
    case url.includes("/api/program/campaign/config"):
      result = parseURL(url, {}, "load-campaign-config");
      break;
  }
  tagActivityStore.add(JSON.stringify(result));
};
chrome.webRequest.onBeforeRequest.addListener(
  handleNetworkTraffic,
  {
    urls: ["*://*.lytics.io/*"]
  },
  ["requestBody"]
);

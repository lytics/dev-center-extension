import { r as reactExports, j as jsxRuntimeExports, c as createRoot } from "./client.js";
import { t as tagConfigStore, a as entityStore, e as extensionStateStorage, d as domainStore } from "./extensionStateStorage.js";
import "./_commonjsHelpers.js";
import "./base.js";
function App() {
  reactExports.useEffect(() => {
    const injectScript = () => {
      const script = document.createElement("script");
      script.src = chrome.runtime.getURL("/src/pages/tagLink/index.js");
      script.type = "module";
      script.onload = () => {
        script.remove();
      };
      document.documentElement.appendChild(script);
    };
    injectScript();
    const handleMessage = (event) => {
      if (event.data && event.data.type === "retry") {
        injectScript();
      }
    };
    window.addEventListener("message", handleMessage);
    window.addEventListener("message", function(event) {
      if (event.source === window && event.data.action === "backgroundToContent") {
        event.data.data;
      }
    });
    chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
      if (message.action == "getConfig") {
        window.postMessage({ action: "getConfig" }, "*");
      }
      if (message.action == "getEntity") {
        window.postMessage({ action: "getEntity" }, "*");
      }
      sendResponse();
    });
    document.addEventListener("config", function(event) {
      const payload = event.detail.data;
      tagConfigStore.set(payload).then(() => {
      });
    });
    document.addEventListener("entity", function(event) {
      const payload = event.detail.data;
      entityStore.set(payload).then(() => {
      });
    });
  }, []);
  reactExports.useEffect(() => {
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
}
const initContentScripts = () => {
  extensionStateStorage.subscribe(handleStateChange);
  const root = document.createElement("div");
  root.id = "lytics-dev-tools";
  document.body.append(root);
  const rootIntoShadow = document.createElement("div");
  rootIntoShadow.id = "shadow-root";
  const shadowRoot = root.attachShadow({ mode: "open" });
  shadowRoot.appendChild(rootIntoShadow);
  createRoot(rootIntoShadow).render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
};
const handleStateChange = () => {
  extensionStateStorage.get().then((state) => {
    if (state === true) {
      domainStore.get().then((domain) => {
        if (domain !== "") {
          if (window.location.href.includes(domain)) {
            initContentScripts();
          }
        }
      });
    }
  });
};
extensionStateStorage.subscribe(handleStateChange);

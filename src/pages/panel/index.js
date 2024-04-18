import { r as reactExports, j as jsxRuntimeExports, c as createRoot } from "../../../assets/js/client.js";
import { B as Box, T as Typography, a as Button } from "../../../assets/js/Button.js";
import "../../../assets/js/_commonjsHelpers.js";
const Panel = () => {
  const [message, setMessage] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const backgroundConnection = chrome.runtime.connect({
      name: "devtools-panel"
    });
    backgroundConnection.onMessage.addListener((receivedMessage) => {
      setMessage(receivedMessage.message);
    });
    return () => {
      backgroundConnection.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h1", children: "Dev Tools Panel" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "test" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: message ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: message }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "No message received yet." }) })
  ] });
};
function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const root = createRoot(appContainer);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(Panel, {}));
}
init();

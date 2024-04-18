var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class TagLinkInternal {
  constructor() {
    __publicField(this, "retryCount", 0);
    __publicField(this, "maxRetry", 5);
    this.init();
  }
  init() {
    this.printBoiler();
    this.emitLog("tag", { msg: "initialized" });
    this.jstagReady();
    this.addListeners();
  }
  addListeners() {
    window.addEventListener("message", (event) => {
      if (event.source === window) {
        switch (event.data.action) {
          case "getConfig":
            this.emitLog("tag", "get config");
            this.getConfig();
            break;
          case "getEntity":
            this.emitLog("tag", "get entity");
            this.getEntity();
            break;
          case "getUID":
            this.emitLog("tag", "get UID");
            break;
          case "getExperiences":
            this.emitLog("tag", "get experiences");
            break;
          default:
            this.emitLog("tag", `invalid action: ${event.data.action}`);
            break;
        }
      }
    });
  }
  emitLog(name, payload) {
    console.log(`lyticsdev ::: ${name} ::`, payload);
  }
  jstagReady() {
    this.retryCount++;
    if (this.retryCount >= this.maxRetry) {
      this.emitLog("tag", { msg: "max retry reached" });
      return;
    }
    if (typeof window.jstag !== "undefined") {
      this.emitLog("tag", "found jstag");
      setTimeout(() => {
        this.getConfig();
      }, 2e3);
      this.getEntity();
    } else {
      this.emitLog("tag", { msg: "jstag not found trying again in 2 seconds", retryCount: this.retryCount });
      setTimeout(() => this.jstagReady(), 2e3);
    }
  }
  jstagExist() {
    return typeof window.jstag !== "undefined" && typeof window.jstag.call !== "undefined";
  }
  getConfig() {
    if (!this.jstagExist())
      return;
    window.jstag.call("entityReady", () => {
      this.dispatchEvent("config", window.jstag.config);
    });
  }
  getEntity() {
    if (!this.jstagExist())
      return;
    window.jstag.call("entityReady", (entity) => {
      window.jstag.getid((id) => {
        entity.data._uid = id;
        this.dispatchEvent("entity", entity);
      });
    });
  }
  printBoiler() {
    console.log(`
    ============================================================
    ============================================================
    _        _   _       
    | |  _  _| |_(_)__ ___
    | |_| || |  _| / _(_-<
    |____\\_, |\\__|_\\__/__/
         |__/             
    ============================================================
    Lytics Developer Tools Extension Active
    ============================================================
    `);
  }
  // dispatch event to content script
  dispatchEvent(name, payload) {
    const customEvent = new CustomEvent(name, {
      detail: {
        data: JSON.stringify(payload)
      }
    });
    document.dispatchEvent(customEvent);
  }
}
typeof window.TagLink !== "undefined" ? window.TagLink : new TagLinkInternal();

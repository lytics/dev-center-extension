// Static tagLink script for Chrome extension
class TagLinkInternal {
  constructor() {
    this.init();
  }

  init() {
    this.printBoiler();
    this.emitLog('tag', { msg: 'initialized' });
    this.jstagReady();
    this.addListeners();
  }

  retryCount = 0;
  maxRetry = 5;

  addListeners() {
    window.addEventListener('message', event => {
      if (event.source === window) {
        switch (event.data.action) {
          case 'getConfig':
            this.emitLog('tag', 'get config');
            this.getConfig();
            break;
          case 'getEntity':
            this.emitLog('tag', 'get entity');
            this.getEntity();
            break;
          case 'getUID':
            this.emitLog('tag', 'get UID');
            break;
          case 'getExperiences':
            this.emitLog('tag', 'get experiences');
            break;
          default:
            // this.emitLog('tag', `invalid action: ${event.data.action}`);
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
      this.emitLog('tag', { msg: 'max retry reached' });
      return;
    }
    if (typeof window.jstag !== 'undefined') {
      this.emitLog('tag', 'found jstag');
      setTimeout(() => {
        this.getConfig();
      }, 2000);
      this.getEntity();
    } else {
      this.emitLog('tag', { msg: 'jstag not found trying again in 2 seconds', retryCount: this.retryCount });
      setTimeout(() => this.jstagReady(), 2000);
    }
  }

  jstagExist() {
    return typeof window.jstag !== 'undefined' && typeof window.jstag.call !== 'undefined';
  }

  getConfig() {
    if (!this.jstagExist()) return;

    window.jstag.call('entityReady', () => {
      try {
        this.dispatchEvent('config', window.jstag.config);
      } catch (err) {
        this.emitLog('tag', { msg: 'failed to read config', error: String(err) });
      }
    });
  }

  getEntity() {
    if (!this.jstagExist()) return;

    window.jstag.call('entityReady', entity => {
      window.jstag.getid(id => {
        try {
          entity.data._uid = id;
          this.dispatchEvent('entity', entity);
        } catch (err) {
          this.emitLog('tag', { msg: 'failed to read entity', error: String(err) });
        }
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

  safeClone(value, seen = new WeakSet()) {
    if (value === null || typeof value !== 'object') {
      return typeof value === 'bigint' ? value.toString() : value;
    }

    try {
      if (value === value.window || value.self === value) return undefined;
    } catch {
      return undefined;
    }

    // Only walk plain data (object literals / arrays). Anything else - DOM nodes, Window,
    // class instances, Map/Set, etc. - can reach huge or exotic graphs (e.g. a DOM element's
    // ownerDocument/parentNode chain), so skip it rather than cloning it.
    const proto = Object.getPrototypeOf(value);
    const isPlainObject = proto === Object.prototype || proto === null;
    if (!Array.isArray(value) && !isPlainObject) {
      return undefined;
    }

    if (seen.has(value)) return undefined;
    seen.add(value);

    if (Array.isArray(value)) return value.map(v => this.safeClone(v, seen));

    const out = {};
    for (const key in value) {
      try {
        const v = value[key];
        if (typeof v !== 'function') out[key] = this.safeClone(v, seen);
      } catch {
        // skip unreadable (cross-origin) property
      }
    }
    return out;
  }

  dispatchEvent(name, payload) {
    try {
      const customEvent = new CustomEvent(name, {
        detail: {
          data: JSON.stringify(this.safeClone(payload)),
        },
      });
      document.dispatchEvent(customEvent);
    } catch (err) {
      this.emitLog('tag', { msg: 'failed to serialize payload', name, error: String(err) });
    }
  }
}

// Initialize TagLink
if (typeof window.TagLink === 'undefined') {
  window.TagLink = new TagLinkInternal();
}

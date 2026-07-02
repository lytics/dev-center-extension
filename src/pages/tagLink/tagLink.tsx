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
            this.emitLog('tag', `invalid action: ${event.data.action}`);
            break;
        }
      }
    });
  }

  emitLog(name: string, payload?: any) {
    console.log(`lyticsdev ::: ${name} ::`, payload);
  }

  jstagReady() {
    this.retryCount++;
    if (this.retryCount >= this.maxRetry) {
      this.emitLog('tag', { msg: 'max retry reached' });
      return;
    }
    if (typeof (window as any).jstag !== 'undefined') {
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
    return typeof (window as any).jstag !== 'undefined' && typeof (window as any).jstag.call !== 'undefined';
  }

  getConfig() {
    if (!this.jstagExist()) return;

    (window as any).jstag.call('entityReady', () => {
      this.dispatchEvent('config', (window as any).jstag.config);
    });
  }

  getEntity() {
    if (!this.jstagExist()) return;

    (window as any).jstag.call('entityReady', entity => {
      (window as any).jstag.getid(id => {
        // this.emitLog('tag', 'got entity');
        entity.data._uid = id;
        this.dispatchEvent('entity', entity);
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

  safeClone(value: any, seen = new WeakSet()): any {
    if (value === null || typeof value !== 'object') return value;

    try {
      if (value === value.window || value.self === value) return undefined;
    } catch {
      return undefined;
    }

    if (seen.has(value)) return undefined;
    seen.add(value);

    if (Array.isArray(value)) return value.map(v => this.safeClone(v, seen));

    const out: Record<string, any> = {};
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

  dispatchEvent(name: string, payload: any) {
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

export const TagLink = typeof (window as any).TagLink !== 'undefined' ? (window as any).TagLink : new TagLinkInternal();

export class TagLink {
  constructor() {
    this.init();
  }

  init() {
    this.emitLog('initialized');
    this.jstagReady();
  }

  emitLog(name: string, payload?: any) {
    console.log(`taglink ::: ${name} ::`, payload);
  }

  // check to see if jstag exists and if so dispatch, if not sleep for 30 seconds and try again
  jstagReady() {
    this.emitLog('tag', 'checking jstag');
    if (typeof (window as any).jstag !== 'undefined') {
      this.emitLog('tag', 'found jstag');
      setTimeout(() => {
        this.getConfig();
      }, 2000);
      this.getEntity()
    } else {
      this.emitLog('tag', 'jstag not found');
      setTimeout(() => this.jstagReady(), 5000);
    }
  }

  getConfig() {
    (window as any).jstag.call('entityReady', () => {
      this.dispatchEvent('config', (window as any).jstag.config);
    });
  }

  getEntity() {
    (window as any).jstag.call('entityReady', (entity) => {
      this.dispatchEvent('entity', entity);
    });
  }

  // dispatch event to content script
  dispatchEvent(name: string, payload: any) {
    const customEvent = new CustomEvent(name, {
      detail: {
        data: JSON.stringify(payload),
      }
    });
    document.dispatchEvent(customEvent);
  }
}

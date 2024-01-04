export class TagLink {
  constructor() {
    this.init();
  }

  init() {
    this.emitLog('tag', { msg: 'initialized' });
    this.jstagReady();
    this.addListeners();
  }

  retryCount = 0;

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
    this.emitLog('tag', 'checking jstag');
    this.retryCount++;
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

  getConfig() {
    (window as any).jstag.call('entityReady', () => {
      // this.emitLog('tag', 'got jstag config');
      this.dispatchEvent('config', (window as any).jstag.config);
    });
  }

  getEntity() {
    (window as any).jstag.call('entityReady', entity => {
      (window as any).jstag.getid(id => {
        // this.emitLog('tag', 'got entity');
        entity.data._uid = id;
        this.dispatchEvent('entity', entity);
      });
    });
  }

  // dispatch event to content script
  dispatchEvent(name: string, payload: any) {
    const customEvent = new CustomEvent(name, {
      detail: {
        data: JSON.stringify(payload),
      },
    });
    document.dispatchEvent(customEvent);
  }
}

export class TagLink {
  constructor() {
    this.init();
  }

  init() {
    console.log('taglink --> Lytics Tag Link Initialized');
    this.jstagReady();
  }

  // check to see if jstag exists and if so dispatch, if not sleep for 30 seconds and try again
  jstagReady() {
    console.log('taglink --> jstag', typeof (window as any).jstag !== 'undefined');
    if (typeof (window as any).jstag !== 'undefined') {
      console.log('taglink --> jstag is ready');
      this.dispatchEvent('config', (window as any).jstag.config);
      this.getEntity()
    } else {
      console.log('taglink --> jstag is not ready');
      setTimeout(() => this.jstagReady(), 5000);
    }
  }

  getEntity() {
    (window as any).jstag.call('entityReady', (entity) => {
      console.log('callback', entity);
    });
  }

  // dispatch event to content script
  dispatchEvent(name: string, payload: any) {
    console.log('taglink --> dispatched event', name, payload);
    document.dispatchEvent(
      new CustomEvent(name, {
        detail: payload,
      }),
    );
  }
}

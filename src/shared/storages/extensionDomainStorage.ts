import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';
import { EmitLog } from '@src/shared/components/EmitLog';

const DomainStorageKey = 'lyticsDomain';

export interface ExtensionState {
  activeTab: string;
  activeURL: string;
  pinnedTab: string;
  pinnedURL: string;
}

type DomainStorage = BaseStorage<string> & {
  pin: () => Promise<ExtensionState>;
  translate: (state: string) => ExtensionState;
  evaluate: () => Promise<ExtensionState>;
  clear: () => void;
};

const storage = createStorage<string>(DomainStorageKey, '', {
  storageType: StorageType.Local,
  liveUpdate: true,
});

export const getCurrentTabID = () => {
  return new Promise(resolve => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (tabs && tabs[0] && tabs[0].id) {
        resolve(tabs[0].id);
      } else {
        resolve('');
      }
    });
  });
};

export const getCurrentTabURL = () => {
  return new Promise(resolve => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (tabs && tabs[0] && tabs[0].url) {
        resolve(tabs[0].url);
      } else {
        resolve('');
      }
    });
  });
};

export const domainStore: DomainStorage = {
  ...storage,
  translate: (state: string) => {
    try {
      return JSON.parse(state) as ExtensionState;
    } catch (error) {
      EmitLog({ name: 'storage', payload: { msg: `Error parsing state: ${error}` } });
      return {
        activeTab: '',
        activeURL: '',
        pinnedTab: '',
        pinnedURL: '',
      };
    }
  },

  async pin(): Promise<ExtensionState> {
    const tabID = (await getCurrentTabID()) as string;
    const url = (await getCurrentTabURL()) as string;
    const domain = new URL(url).hostname;

    const state = await domainStore.evaluate();
    state.pinnedTab = tabID;
    state.pinnedURL = domain;
    domainStore.set(JSON.stringify(state));
    return state;
  },

  async evaluate(): Promise<ExtensionState> {
    // get active tab and url
    const tabID = (await getCurrentTabID()) as string;
    const url = (await getCurrentTabURL()) as string;

    // get stored state and parse
    const domain = await domainStore.get();
    const state = domainStore.translate(domain) as ExtensionState;

    // handle tab id check
    if (state.activeTab === tabID) {
      state.activeTab = tabID;
    } else {
      state.activeTab = tabID;
    }

    // handle domain substring check
    if (state.pinnedURL !== '' && state.activeURL.includes(state.pinnedURL)) {
      state.activeURL = url;
    } else {
      state.activeURL = url;
    }

    // domainStore.set(JSON.stringify(state));
    return state;
  },

  clear: () => {
    chrome.storage.local.remove(DomainStorageKey, () => {
      EmitLog({ name: 'storage', payload: { msg: `Data associated with ${DomainStorageKey} cleared.` } });
    });
  },
};

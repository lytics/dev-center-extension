import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';
import { EmitLog } from '@src/shared/components/EmitLog';
import { EventModel } from '@src/shared/models/eventModel';

const TabStateStorageKey = 'domainStates';

export interface DomainState {
  domain: string;
  isPinned: boolean;
  tagActivity: EventModel[];
  tagConfig: any;
  profile: any;
  lastUpdated: number;
  activeTabIds: string[]; // Track which tabs are viewing this domain
}

export interface DomainStatesMap {
  [domain: string]: DomainState;
}

type DomainStateStorage = BaseStorage<DomainStatesMap> & {
  getDomainState: (domain: string) => Promise<DomainState | null>;
  setDomainState: (domain: string, state: Partial<DomainState>) => Promise<void>;
  updateDomainState: (domain: string, updates: Partial<DomainState>) => Promise<void>;
  addEvent: (domain: string, event: EventModel) => Promise<void>;
  clearDomainState: (domain: string) => Promise<void>;
  clearDomainActivity: (domain: string) => Promise<void>;
  pinDomain: (domain: string) => Promise<void>;
  unpinDomain: (domain: string) => Promise<void>;
  registerTab: (domain: string, tabId: string) => Promise<void>;
  unregisterTab: (domain: string, tabId: string) => Promise<void>;
  getAllDomains: () => Promise<string[]>;
  cleanupInactiveDomains: () => Promise<void>;
};

const storage = createStorage<DomainStatesMap>(
  TabStateStorageKey,
  {},
  {
    storageType: StorageType.Session,
    sessionAccessForContentScripts: true,
    liveUpdate: true,
  },
);

const createDefaultDomainState = (domain: string): DomainState => ({
  domain,
  isPinned: false,
  tagActivity: [],
  tagConfig: {},
  profile: {},
  lastUpdated: Date.now(),
  activeTabIds: [],
});

const domainStateStore: DomainStateStorage = {
  ...storage,

  async getDomainState(domain: string): Promise<DomainState | null> {
    try {
      const allStates = await storage.get();
      return allStates[domain] || null;
    } catch (error) {
      EmitLog({
        name: 'storage',
        payload: { msg: `Error getting domain state for ${domain}`, error: error.message },
      });
      return null;
    }
  },

  async setDomainState(domain: string, state: Partial<DomainState>): Promise<void> {
    try {
      const allStates = await storage.get();
      const existingState = allStates[domain] || createDefaultDomainState(domain);

      allStates[domain] = {
        ...existingState,
        ...state,
        domain,
        lastUpdated: Date.now(),
      };

      await storage.set(allStates);
      EmitLog({
        name: 'storage',
        payload: { msg: `Domain state set for ${domain}` },
      });
    } catch (error) {
      EmitLog({
        name: 'storage',
        payload: { msg: `Error setting domain state for ${domain}`, error: error.message },
      });
    }
  },

  async updateDomainState(domain: string, updates: Partial<DomainState>): Promise<void> {
    try {
      const allStates = await storage.get();

      if (!allStates[domain]) {
        EmitLog({
          name: 'storage',
          payload: { msg: `Domain ${domain} does not exist, creating new state` },
        });
        allStates[domain] = createDefaultDomainState(domain);
      }

      allStates[domain] = {
        ...allStates[domain],
        ...updates,
        lastUpdated: Date.now(),
      };

      await storage.set(allStates);
    } catch (error) {
      EmitLog({
        name: 'storage',
        payload: { msg: `Error updating domain state for ${domain}`, error: error.message },
      });
    }
  },

  async addEvent(domain: string, event: EventModel): Promise<void> {
    try {
      const allStates = await storage.get();

      if (!allStates[domain]) {
        allStates[domain] = createDefaultDomainState(domain);
      }

      allStates[domain].tagActivity = [...(allStates[domain].tagActivity || []), event];
      allStates[domain].lastUpdated = Date.now();

      await storage.set(allStates);
      EmitLog({
        name: 'storage',
        payload: { msg: `Event added to domain ${domain}`, type: event.type },
      });
    } catch (error) {
      EmitLog({
        name: 'storage',
        payload: { msg: `Error adding event to domain ${domain}`, error: error.message },
      });
    }
  },

  async clearDomainState(domain: string): Promise<void> {
    try {
      const allStates = await storage.get();
      delete allStates[domain];
      await storage.set(allStates);
      EmitLog({
        name: 'storage',
        payload: { msg: `Domain state cleared for ${domain}` },
      });
    } catch (error) {
      EmitLog({
        name: 'storage',
        payload: { msg: `Error clearing domain state for ${domain}`, error: error.message },
      });
    }
  },

  async clearDomainActivity(domain: string): Promise<void> {
    try {
      const allStates = await storage.get();

      if (allStates[domain]) {
        allStates[domain].tagActivity = [];
        allStates[domain].lastUpdated = Date.now();
        await storage.set(allStates);
        EmitLog({
          name: 'storage',
          payload: { msg: `Tag activity cleared for domain ${domain}` },
        });
      }
    } catch (error) {
      EmitLog({
        name: 'storage',
        payload: { msg: `Error clearing activity for domain ${domain}`, error: error.message },
      });
    }
  },

  async pinDomain(domain: string): Promise<void> {
    try {
      const allStates = await storage.get();

      if (!allStates[domain]) {
        allStates[domain] = createDefaultDomainState(domain);
      }

      allStates[domain].isPinned = true;
      allStates[domain].lastUpdated = Date.now();

      await storage.set(allStates);
      EmitLog({
        name: 'storage',
        payload: { msg: `Domain ${domain} pinned` },
      });
    } catch (error) {
      EmitLog({
        name: 'storage',
        payload: { msg: `Error pinning domain ${domain}`, error: error.message },
      });
    }
  },

  async unpinDomain(domain: string): Promise<void> {
    try {
      const allStates = await storage.get();

      if (allStates[domain]) {
        allStates[domain].isPinned = false;
        allStates[domain].lastUpdated = Date.now();
        await storage.set(allStates);
        EmitLog({
          name: 'storage',
          payload: { msg: `Domain ${domain} unpinned` },
        });
      }
    } catch (error) {
      EmitLog({
        name: 'storage',
        payload: { msg: `Error unpinning domain ${domain}`, error: error.message },
      });
    }
  },

  async registerTab(domain: string, tabId: string): Promise<void> {
    try {
      const allStates = await storage.get();

      if (!allStates[domain]) {
        allStates[domain] = createDefaultDomainState(domain);
      }

      if (!allStates[domain].activeTabIds.includes(tabId)) {
        allStates[domain].activeTabIds.push(tabId);
        allStates[domain].lastUpdated = Date.now();
        await storage.set(allStates);
        EmitLog({
          name: 'storage',
          payload: { msg: `Tab ${tabId} registered for domain ${domain}` },
        });
      }
    } catch (error) {
      EmitLog({
        name: 'storage',
        payload: { msg: `Error registering tab ${tabId} for domain ${domain}`, error: error.message },
      });
    }
  },

  async unregisterTab(domain: string, tabId: string): Promise<void> {
    try {
      const allStates = await storage.get();

      if (allStates[domain]) {
        allStates[domain].activeTabIds = allStates[domain].activeTabIds.filter(id => id !== tabId);
        allStates[domain].lastUpdated = Date.now();
        await storage.set(allStates);
        EmitLog({
          name: 'storage',
          payload: { msg: `Tab ${tabId} unregistered from domain ${domain}` },
        });
      }
    } catch (error) {
      EmitLog({
        name: 'storage',
        payload: { msg: `Error unregistering tab ${tabId} from domain ${domain}`, error: error.message },
      });
    }
  },

  async getAllDomains(): Promise<string[]> {
    try {
      const allStates = await storage.get();
      return Object.keys(allStates);
    } catch (error) {
      EmitLog({
        name: 'storage',
        payload: { msg: 'Error getting all domains', error: error.message },
      });
      return [];
    }
  },

  async cleanupInactiveDomains(): Promise<void> {
    try {
      const allStates = await storage.get();
      const allTabs = await chrome.tabs.query({});
      const openTabIds = new Set(allTabs.map(tab => tab.id.toString()));

      const updatedStates: DomainStatesMap = {};
      let cleanedCount = 0;

      for (const [domain, state] of Object.entries(allStates)) {
        // Remove tabs that are no longer open
        const activeTabs = state.activeTabIds.filter(tabId => openTabIds.has(tabId));

        // Keep domain if it has active tabs OR is pinned
        if (activeTabs.length > 0 || state.isPinned) {
          updatedStates[domain] = {
            ...state,
            activeTabIds: activeTabs,
          };
        } else {
          cleanedCount++;
        }
      }

      if (cleanedCount > 0) {
        await storage.set(updatedStates);
        EmitLog({
          name: 'storage',
          payload: { msg: `Cleaned up ${cleanedCount} inactive domain(s)` },
        });
      }
    } catch (error) {
      EmitLog({
        name: 'storage',
        payload: { msg: 'Error cleaning up inactive domains', error: error.message },
      });
    }
  },
};

export default domainStateStore;

import { BaseStorage, createStorage, StorageType } from '@root/src/shared/storages/base';
import { EmitLog } from '@root/src/shared/components/EmitLog';

export interface AutoDetectedDomain {
  domain: string;
  firstSeen: number;
  lastSeen: number;
  tagRequests: string[];
  confidence: number;
  autoEnabled: boolean;
  requestCount: number;
}

export interface AutoDetectedDomainsState {
  domains: Record<string, AutoDetectedDomain>;
  lastCleanup: number;
}

const AutoDetectedDomainsStorageKey = 'lytics-dev-auto-detected-domains';

const storage = createStorage<string>(AutoDetectedDomainsStorageKey, '', {
  storageType: StorageType.Local,
  liveUpdate: true,
});

type AutoDetectedDomainsStorage = BaseStorage<string> & {
  translate: (state: string) => AutoDetectedDomainsState;
  getDomain: (domain: string) => Promise<AutoDetectedDomain | null>;
};

export const autoDetectedDomainsStore: AutoDetectedDomainsStorage = {
  ...storage,

  translate: (state: string): AutoDetectedDomainsState => {
    try {
      const parsed = JSON.parse(state);
      return parsed.domains ? parsed : { domains: {}, lastCleanup: Date.now() };
    } catch (error) {
      EmitLog({ name: 'storage', payload: { msg: `Error parsing auto-detected domains: ${error}` } });
      return { domains: {}, lastCleanup: Date.now() };
    }
  },

  async getDomain(domain: string): Promise<AutoDetectedDomain | null> {
    const currentState = await this.get();
    const state = this.translate(currentState);
    return state.domains[domain] || null;
  },
};

export default autoDetectedDomainsStore;

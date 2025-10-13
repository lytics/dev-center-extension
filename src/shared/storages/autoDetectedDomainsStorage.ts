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

/**
 * Cleanup Configuration
 *
 * Defines the parameters for automatic cleanup of stored domain detection data.
 * This prevents the storage from growing indefinitely and maintains performance.
 *
 * Cleanup is triggered:
 * - When recording new detections (to maintain bounds)
 * - On extension startup/installation (to clean legacy data)
 * - Potentially on a time interval (checked before recording)
 */
const CLEANUP_CONFIG = {
  maxAgeDays: 30, // Remove domains older than 30 days
  maxDomains: 500, // Maximum number of domains to store
  cleanupIntervalHours: 24, // Run cleanup every 24 hours
};

type AutoDetectedDomainsStorage = BaseStorage<string> & {
  translate: (state: string) => AutoDetectedDomainsState;
  getDomain: (domain: string) => Promise<AutoDetectedDomain | null>;
  cleanup: () => Promise<void>;
  shouldRunCleanup: () => Promise<boolean>;
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

  /**
   * Check if cleanup should be run based on time interval
   */
  async shouldRunCleanup(): Promise<boolean> {
    try {
      const currentState = await this.get();
      const state = this.translate(currentState);
      const now = Date.now();
      const timeSinceLastCleanup = now - (state.lastCleanup || 0);
      const cleanupIntervalMs = CLEANUP_CONFIG.cleanupIntervalHours * 60 * 60 * 1000;

      return timeSinceLastCleanup >= cleanupIntervalMs;
    } catch (error) {
      EmitLog({ name: 'storage', payload: { msg: 'Error checking cleanup status', error: error.message } });
      return false;
    }
  },

  /**
   * Clean up old and excess domains from storage
   */
  async cleanup(): Promise<void> {
    try {
      const currentState = await this.get();
      const state = this.translate(currentState);
      const now = Date.now();
      const maxAgeMs = CLEANUP_CONFIG.maxAgeDays * 24 * 60 * 60 * 1000;

      // Remove domains older than max age
      const domainsToRemove: string[] = [];
      for (const [domain, domainInfo] of Object.entries(state.domains)) {
        if (now - domainInfo.lastSeen > maxAgeMs) {
          domainsToRemove.push(domain);
        }
      }

      domainsToRemove.forEach(domain => {
        delete state.domains[domain];
      });

      // If still over limit, remove oldest domains
      const domainEntries = Object.entries(state.domains);
      if (domainEntries.length > CLEANUP_CONFIG.maxDomains) {
        // Sort by lastSeen (oldest first)
        domainEntries.sort(([, a], [, b]) => a.lastSeen - b.lastSeen);
        const toRemove = domainEntries.slice(0, domainEntries.length - CLEANUP_CONFIG.maxDomains);
        toRemove.forEach(([domain]) => {
          delete state.domains[domain];
        });
      }

      // Update last cleanup time
      state.lastCleanup = now;

      // Save cleaned state
      await this.set(JSON.stringify(state));

      if (domainsToRemove.length > 0) {
        EmitLog({
          name: 'storage',
          payload: {
            msg: 'Cleaned up auto-detected domains',
            removedCount: domainsToRemove.length,
            remainingCount: Object.keys(state.domains).length,
          },
        });
      }
    } catch (error) {
      EmitLog({ name: 'storage', payload: { msg: 'Error during domain cleanup', error: error.message } });
    }
  },
};

export default autoDetectedDomainsStore;

/**
 * Main hook for accessing current tab state and domain data
 *
 * This hook has been refactored to use smaller, focused internal hooks
 * but maintains the exact same API for backward compatibility.
 */

import { useCallback } from 'react';
import domainStateStore, { DomainState } from '@src/shared/storages/tabStateStorage';
import { domainStore } from '@src/shared/storages/extensionDomainStorage';
import { EmitLog } from '@src/shared/components/EmitLog';
import { EventModel } from '@src/shared/models/eventModel';
import { useTabTracking } from '@root/src/pages/sidepanel/hooks/internal/useTabTracking';
import { useDomainStateSync } from '@root/src/pages/sidepanel/hooks/internal/useDomainStateSync';
import { isPinned, getTagActivity, getTagConfig, getProfile } from '@root/src/pages/sidepanel/utils/domainStateHelpers';

interface UseCurrentTabStateReturn {
  currentTabId: string | null;
  domainState: DomainState | null;
  isLoading: boolean;
  domain: string;
  url: string;
  isPinned: boolean;
  tagActivity: EventModel[];
  tagConfig: any;
  profile: any;
  pinCurrentDomain: () => Promise<void>;
  unpinCurrentDomain: () => Promise<void>;
  clearActivity: () => Promise<void>;
  refreshDomainState: () => Promise<void>;
}

/**
 * Custom hook for current tab state management
 *
 * Provides access to:
 * - Current tab information (id, domain, url)
 * - Domain-specific state (pin status, tag activity, config, profile)
 * - Actions to manage domain state (pin/unpin, clear activity)
 *
 * @returns Current tab state and domain management functions
 */
export const useCurrentTabState = (): UseCurrentTabStateReturn => {
  // Compose smaller, focused hooks
  const { tabId, domain, url } = useTabTracking();
  const { state: domainState, isLoading } = useDomainStateSync(domain);

  // Domain management actions (with stable references via useCallback)
  const pinCurrentDomain = useCallback(async () => {
    if (!domain) {
      EmitLog({
        name: 'sidepanel',
        payload: { msg: 'Cannot pin: no current domain' },
      });
      return;
    }

    try {
      // Update NEW system (per-domain state)
      await domainStateStore.pinDomain(domain);

      // Update OLD system (global sticky domain) for backwards compatibility
      await domainStore.pin();

      EmitLog({
        name: 'sidepanel',
        payload: { msg: `Pinned domain ${domain} in both systems` },
      });
    } catch (error) {
      EmitLog({
        name: 'sidepanel',
        payload: { msg: 'Error pinning domain', error: (error as Error).message },
      });
    }
  }, [domain]);

  const unpinCurrentDomain = useCallback(async () => {
    if (!domain) return;

    try {
      // Update NEW system (per-domain state)
      await domainStateStore.unpinDomain(domain);

      // Clear OLD system (global sticky domain) for backwards compatibility
      domainStore.clear();

      EmitLog({
        name: 'sidepanel',
        payload: { msg: `Unpinned domain ${domain} in both systems` },
      });
    } catch (error) {
      EmitLog({
        name: 'sidepanel',
        payload: { msg: 'Error unpinning domain', error: (error as Error).message },
      });
    }
  }, [domain]);

  const clearActivity = useCallback(async () => {
    if (!domain) return;

    try {
      await domainStateStore.clearDomainActivity(domain);
      EmitLog({
        name: 'sidepanel',
        payload: { msg: `Cleared activity for domain ${domain}` },
      });
    } catch (error) {
      EmitLog({
        name: 'sidepanel',
        payload: { msg: 'Error clearing activity', error: (error as Error).message },
      });
    }
  }, [domain]);

  const refreshDomainState = useCallback(async () => {
    if (!domain) return;

    try {
      await domainStateStore.getDomainState(domain);
      // State will be updated via subscription in useDomainStateSync
    } catch (error) {
      EmitLog({
        name: 'sidepanel',
        payload: { msg: 'Error refreshing domain state', error: (error as Error).message },
      });
    }
  }, [domain]);

  // Return exact same interface as before - no breaking changes!
  return {
    currentTabId: tabId,
    domainState,
    isLoading,
    domain,
    url,
    isPinned: isPinned(domainState),
    tagActivity: getTagActivity(domainState),
    tagConfig: getTagConfig(domainState),
    profile: getProfile(domainState),
    pinCurrentDomain,
    unpinCurrentDomain,
    clearActivity,
    refreshDomainState,
  };
};

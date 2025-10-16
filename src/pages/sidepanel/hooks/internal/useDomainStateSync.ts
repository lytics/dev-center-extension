/**
 * Internal hook for syncing domain state from storage
 * Handles loading and subscribing to domain state updates
 */

import { useState, useEffect } from 'react';
import domainStateStore, { DomainState } from '@src/shared/storages/tabStateStorage';

interface UseDomainStateSyncReturn {
  state: DomainState | null;
  isLoading: boolean;
}

/**
 * Custom hook to load and sync domain state from storage
 * Automatically subscribes to real-time updates
 *
 * @param domain - Domain name to load state for
 * @returns Domain state and loading status
 */
export const useDomainStateSync = (domain: string): UseDomainStateSyncReturn => {
  const [state, setState] = useState<DomainState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Early return if no domain
    if (!domain) {
      setIsLoading(false);
      return;
    }

    /**
     * Loads domain state from storage
     */
    const loadDomainState = async () => {
      setIsLoading(true);
      try {
        const domainState = await domainStateStore.getDomainState(domain);
        setState(domainState);
      } finally {
        setIsLoading(false);
      }
    };

    // Initial load
    loadDomainState();

    // Subscribe to real-time updates
    const unsubscribe = domainStateStore.subscribe(loadDomainState);

    // Cleanup subscription on unmount or domain change
    return unsubscribe;
  }, [domain]); // Re-run when domain changes

  return { state, isLoading };
};

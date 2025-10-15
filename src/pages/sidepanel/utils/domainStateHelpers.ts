/**
 * Pure utility functions for domain state operations
 * These functions are easily testable and have no side effects
 */

import { DomainState } from '@src/shared/storages/tabStateStorage';

/**
 * Checks if domain state has valid tag configuration
 * @param state - Domain state object
 * @returns True if tagConfig exists and has properties
 */
export const hasTagConfig = (state: DomainState | null): boolean => {
  if (!state?.tagConfig) {
    return false;
  }
  return Object.keys(state.tagConfig).length > 0;
};

/**
 * Checks if domain state has valid profile data
 * @param state - Domain state object
 * @returns True if profile exists and has properties
 */
export const hasProfile = (state: DomainState | null): boolean => {
  if (!state?.profile) {
    return false;
  }
  return Object.keys(state.profile).length > 0;
};

/**
 * Safely extracts tag activity from domain state
 * @param state - Domain state object
 * @returns Array of events or empty array
 */
export const getTagActivity = (state: DomainState | null) => {
  return state?.tagActivity || [];
};

/**
 * Safely extracts tag config from domain state
 * @param state - Domain state object
 * @returns Tag config object or empty object
 */
export const getTagConfig = (state: DomainState | null) => {
  return state?.tagConfig || {};
};

/**
 * Safely extracts profile from domain state
 * @param state - Domain state object
 * @returns Profile object or empty object
 */
export const getProfile = (state: DomainState | null) => {
  return state?.profile || {};
};

/**
 * Checks if domain is pinned
 * @param state - Domain state object
 * @returns True if domain is pinned
 */
export const isPinned = (state: DomainState | null): boolean => {
  return state?.isPinned || false;
};

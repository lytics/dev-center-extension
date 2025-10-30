/**
 * Pure utility functions for tag activity operations
 * These functions are easily testable and have no side effects
 */

import moment from 'moment';
import { EventModel } from '@root/src/shared/models/eventModel';

/**
 * Formats a timestamp as relative time (e.g., "2 minutes ago")
 * @param timestamp - Unix timestamp in milliseconds
 * @returns Formatted relative time string or "No activity yet" if undefined
 */
export const formatLastActivity = (timestamp: number | undefined): string => {
  if (!timestamp) {
    return 'No activity yet';
  }
  return moment(timestamp).fromNow();
};

/**
 * Gets the most recent activity timestamp from tagActivity array
 * @param tagActivity - Array of event models
 * @returns Most recent timestamp or undefined if no events
 */
export const getLastActivityTimestamp = (tagActivity: EventModel[]): number | undefined => {
  if (!tagActivity || tagActivity.length === 0) {
    return undefined;
  }

  const mostRecent = tagActivity.reduce((latest, current) => {
    return current.ts > latest.ts ? current : latest;
  });

  return mostRecent.ts;
};

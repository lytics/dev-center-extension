import { describe, it, expect } from 'vitest';
import { formatLastActivity, getLastActivityTimestamp } from './tagActivityHelpers';
import { EventModel } from '@root/src/shared/models/eventModel';

describe('tagActivityHelpers', () => {
  describe('formatLastActivity', () => {
    it('should return "No activity yet" when timestamp is undefined', () => {
      expect(formatLastActivity(undefined)).toBe('No activity yet');
    });

    it('should format timestamp as relative time', () => {
      const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
      const result = formatLastActivity(fiveMinutesAgo);
      expect(result).toContain('minutes ago');
    });

    it('should format recent timestamp correctly', () => {
      const fewSecondsAgo = Date.now() - 10 * 1000;
      const result = formatLastActivity(fewSecondsAgo);
      expect(result).toContain('seconds ago');
    });

    it('should format old timestamp correctly', () => {
      const twoDaysAgo = Date.now() - 2 * 24 * 60 * 60 * 1000;
      const result = formatLastActivity(twoDaysAgo);
      expect(result).toContain('days ago');
    });
  });

  describe('getLastActivityTimestamp', () => {
    it('should return undefined when tagActivity is empty array', () => {
      expect(getLastActivityTimestamp([])).toBeUndefined();
    });

    it('should return undefined when tagActivity is null', () => {
      expect(getLastActivityTimestamp(null as any)).toBeUndefined();
    });

    it('should return undefined when tagActivity is undefined', () => {
      expect(getLastActivityTimestamp(undefined as any)).toBeUndefined();
    });

    it('should return the most recent timestamp from single event', () => {
      const events: EventModel[] = [
        {
          ts: 1000000,
          type: 'collect-data',
          description: 'Test event',
        },
      ];

      expect(getLastActivityTimestamp(events)).toBe(1000000);
    });

    it('should return the most recent timestamp from multiple events', () => {
      const events: EventModel[] = [
        { ts: 1000000, type: 'load-js-tag', description: 'First' },
        { ts: 3000000, type: 'collect-data', description: 'Third (most recent)' },
        { ts: 2000000, type: 'load-profile', description: 'Second' },
      ];

      expect(getLastActivityTimestamp(events)).toBe(3000000);
    });

    it('should handle events with same timestamp', () => {
      const events: EventModel[] = [
        { ts: 1000000, type: 'load-js-tag', description: 'First' },
        { ts: 1000000, type: 'collect-data', description: 'Second' },
      ];

      expect(getLastActivityTimestamp(events)).toBe(1000000);
    });
  });
});

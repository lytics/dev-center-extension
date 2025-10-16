import { describe, it, expect } from 'vitest';
import { hasTagConfig, hasProfile, getTagActivity, getTagConfig, getProfile, isPinned } from './domainStateHelpers';
import { DomainState } from '@src/shared/storages/tabStateStorage';

describe('domainStateHelpers', () => {
  describe('hasTagConfig', () => {
    it('should return true when tagConfig exists with properties', () => {
      const state = {
        isPinned: false,
        tagActivity: [],
        activeTabIds: [],
        tagConfig: { version: '1.0', accountId: 'test-account' },
      } as DomainState;

      expect(hasTagConfig(state)).toBe(true);
    });

    it('should return false when tagConfig is empty object', () => {
      const state = {
        isPinned: false,
        tagActivity: [],
        activeTabIds: [],
        tagConfig: {},
      } as DomainState;

      expect(hasTagConfig(state)).toBe(false);
    });

    it('should return false when tagConfig is undefined', () => {
      const state = {
        isPinned: false,
        tagActivity: [],
        activeTabIds: [],
      } as DomainState;

      expect(hasTagConfig(state)).toBe(false);
    });

    it('should return false when state is null', () => {
      expect(hasTagConfig(null)).toBe(false);
    });
  });

  describe('hasProfile', () => {
    it('should return true when profile exists with properties', () => {
      const state = {
        isPinned: false,
        tagActivity: [],
        activeTabIds: [],
        profile: { userId: '123', email: 'test@example.com' },
      } as DomainState;

      expect(hasProfile(state)).toBe(true);
    });

    it('should return false when profile is empty object', () => {
      const state = {
        isPinned: false,
        tagActivity: [],
        activeTabIds: [],
        profile: {},
      } as DomainState;

      expect(hasProfile(state)).toBe(false);
    });

    it('should return false when profile is undefined', () => {
      const state = {
        isPinned: false,
        tagActivity: [],
        activeTabIds: [],
      } as DomainState;

      expect(hasProfile(state)).toBe(false);
    });

    it('should return false when state is null', () => {
      expect(hasProfile(null)).toBe(false);
    });
  });

  describe('getTagActivity', () => {
    it('should return tag activity array when it exists', () => {
      const mockActivity = [
        { type: 'load-js-tag', ts: 123456 },
        { type: 'collect-data', ts: 123457 },
      ];

      const state = {
        isPinned: false,
        tagActivity: mockActivity as any,
        activeTabIds: [],
      } as DomainState;

      expect(getTagActivity(state)).toEqual(mockActivity);
    });

    it('should return empty array when tagActivity is undefined', () => {
      const state = {
        isPinned: false,
        activeTabIds: [],
      } as DomainState;

      expect(getTagActivity(state)).toEqual([]);
    });

    it('should return empty array when state is null', () => {
      expect(getTagActivity(null)).toEqual([]);
    });

    it('should return empty array when tagActivity is empty', () => {
      const state = {
        isPinned: false,
        tagActivity: [],
        activeTabIds: [],
      } as DomainState;

      expect(getTagActivity(state)).toEqual([]);
    });
  });

  describe('getTagConfig', () => {
    it('should return tag config when it exists', () => {
      const mockConfig = {
        version: '1.0',
        accountId: 'test-account',
        stream: 'default',
      };

      const state = {
        isPinned: false,
        tagActivity: [],
        activeTabIds: [],
        tagConfig: mockConfig,
      } as DomainState;

      expect(getTagConfig(state)).toEqual(mockConfig);
    });

    it('should return empty object when tagConfig is undefined', () => {
      const state = {
        isPinned: false,
        tagActivity: [],
        activeTabIds: [],
      } as DomainState;

      expect(getTagConfig(state)).toEqual({});
    });

    it('should return empty object when state is null', () => {
      expect(getTagConfig(null)).toEqual({});
    });
  });

  describe('getProfile', () => {
    it('should return profile when it exists', () => {
      const mockProfile = {
        userId: '123',
        email: 'test@example.com',
        name: 'Test User',
      };

      const state = {
        isPinned: false,
        tagActivity: [],
        activeTabIds: [],
        profile: mockProfile,
      } as DomainState;

      expect(getProfile(state)).toEqual(mockProfile);
    });

    it('should return empty object when profile is undefined', () => {
      const state = {
        isPinned: false,
        tagActivity: [],
        activeTabIds: [],
      } as DomainState;

      expect(getProfile(state)).toEqual({});
    });

    it('should return empty object when state is null', () => {
      expect(getProfile(null)).toEqual({});
    });
  });

  describe('isPinned', () => {
    it('should return true when domain is pinned', () => {
      const state = {
        isPinned: true,
        tagActivity: [],
        activeTabIds: [],
      } as DomainState;

      expect(isPinned(state)).toBe(true);
    });

    it('should return false when domain is not pinned', () => {
      const state = {
        isPinned: false,
        tagActivity: [],
        activeTabIds: [],
      } as DomainState;

      expect(isPinned(state)).toBe(false);
    });

    it('should return false when isPinned is undefined', () => {
      const state = {
        tagActivity: [],
        activeTabIds: [],
      } as any;

      expect(isPinned(state)).toBe(false);
    });

    it('should return false when state is null', () => {
      expect(isPinned(null)).toBe(false);
    });
  });

  describe('integration - multiple helpers with same state', () => {
    it('should work correctly with a fully populated state', () => {
      const fullState = {
        isPinned: true,
        tagActivity: [
          { type: 'load-js-tag', ts: 123456 },
          { type: 'collect-data', ts: 123457 },
        ] as any,
        activeTabIds: ['1', '2'],
        tagConfig: {
          version: '1.0',
          accountId: 'test-account',
        },
        profile: {
          userId: '123',
          email: 'test@example.com',
        },
      } as DomainState;

      expect(hasTagConfig(fullState)).toBe(true);
      expect(hasProfile(fullState)).toBe(true);
      expect(isPinned(fullState)).toBe(true);
      expect(getTagActivity(fullState)).toHaveLength(2);
      expect(getTagConfig(fullState)).toHaveProperty('version');
      expect(getProfile(fullState)).toHaveProperty('email');
    });

    it('should work correctly with a minimal state', () => {
      const minimalState = {
        isPinned: false,
        tagActivity: [],
        activeTabIds: [],
      } as DomainState;

      expect(hasTagConfig(minimalState)).toBe(false);
      expect(hasProfile(minimalState)).toBe(false);
      expect(isPinned(minimalState)).toBe(false);
      expect(getTagActivity(minimalState)).toEqual([]);
      expect(getTagConfig(minimalState)).toEqual({});
      expect(getProfile(minimalState)).toEqual({});
    });
  });
});

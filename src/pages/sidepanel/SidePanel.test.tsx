import '@testing-library/jest-dom';

import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ThemeProvider } from '@mui/material/styles';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';
import { appTheme } from '@root/src/theme';
import { render, screen, waitFor } from '@testing-library/react';

import * as useCurrentTabStateModule from './hooks/useCurrentTabState';
import SidePanel from './SidePanel';

vi.mock('@src/shared/components/EmitLog', () => ({
  EmitLog: vi.fn(),
}));

vi.mock('@src/shared/storages/entityStorage', () => ({
  default: {
    get: vi.fn().mockResolvedValue('{}'),
  },
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={appTheme}>
      <MemoryRouter>{component}</MemoryRouter>
    </ThemeProvider>,
  );
};

describe('SidePanel', () => {
  const mockTagConfig: TagConfigModel = {
    version: '4.2.1',
    cid: ['test-account-123'],
    stream: 'production',
    cookie: 'seerid',
    entity: { byFieldKey: 'email' },
    loadid: true,
    pathfora: {
      publish: {
        candidates: {
          experiences: [],
          variations: [],
          legacyABTests: [],
        },
      },
    },
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('when component is loading', () => {
    it('shows loading spinner', () => {
      vi.spyOn(useCurrentTabStateModule, 'useCurrentTabState').mockReturnValue({
        currentTabId: '1',
        domainState: null,
        isLoading: true,
        domain: 'example.com',
        url: 'https://example.com',
        isPinned: false,
        tagActivity: [],
        tagConfig: null,
        profile: null,
        pinCurrentDomain: vi.fn(),
        unpinCurrentDomain: vi.fn(),
        clearActivity: vi.fn(),
        refreshDomainState: vi.fn(),
      });

      renderWithRouter(<SidePanel key="test" isEnabled={true} />);

      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
  });

  describe('when tag data is loaded', () => {
    it('renders TagStatus with correct props when tag is installed', async () => {
      vi.spyOn(useCurrentTabStateModule, 'useCurrentTabState').mockReturnValue({
        currentTabId: '1',
        domainState: {
          domain: 'example.com',
          tagConfig: mockTagConfig,
          profile: null,
          tagActivity: [],
          isPinned: false,
          lastUpdated: Date.now(),
          activeTabIds: ['1'],
        },
        isLoading: false,
        domain: 'example.com',
        url: 'https://example.com',
        isPinned: false,
        tagActivity: [],
        tagConfig: mockTagConfig,
        profile: null,
        pinCurrentDomain: vi.fn(),
        unpinCurrentDomain: vi.fn(),
        clearActivity: vi.fn(),
        refreshDomainState: vi.fn(),
      });

      renderWithRouter(<SidePanel key="test" isEnabled={true} />);

      await waitFor(() => {
        expect(screen.getByText('Status')).toBeInTheDocument();
      });

      expect(screen.getByText('Lytics JavaScript SDK Installed')).toBeInTheDocument();
      expect(screen.getByText('v4.2.1')).toBeInTheDocument();
    });

    it('renders BottomNavigation when data is loaded', async () => {
      vi.spyOn(useCurrentTabStateModule, 'useCurrentTabState').mockReturnValue({
        currentTabId: '1',
        domainState: {
          domain: 'example.com',
          tagConfig: mockTagConfig,
          profile: null,
          tagActivity: [],
          isPinned: false,
          lastUpdated: Date.now(),
          activeTabIds: ['1'],
        },
        isLoading: false,
        domain: 'example.com',
        url: 'https://example.com',
        isPinned: false,
        tagActivity: [],
        tagConfig: mockTagConfig,
        profile: null,
        pinCurrentDomain: vi.fn(),
        unpinCurrentDomain: vi.fn(),
        clearActivity: vi.fn(),
        refreshDomainState: vi.fn(),
      });

      renderWithRouter(<SidePanel key="test" isEnabled={true} />);

      await waitFor(() => {
        expect(screen.getByText('Status')).toBeInTheDocument();
      });
    });
  });

  describe('when tag is not installed', () => {
    it('shows searching message when tag is not installed', async () => {
      vi.spyOn(useCurrentTabStateModule, 'useCurrentTabState').mockReturnValue({
        currentTabId: '1',
        domainState: {
          domain: 'example.com',
          tagConfig: null,
          profile: null,
          tagActivity: [],
          isPinned: false,
          lastUpdated: Date.now(),
          activeTabIds: ['1'],
        },
        isLoading: false,
        domain: 'example.com',
        url: 'https://example.com',
        isPinned: false,
        tagActivity: [],
        tagConfig: null,
        profile: null,
        pinCurrentDomain: vi.fn(),
        unpinCurrentDomain: vi.fn(),
        clearActivity: vi.fn(),
        refreshDomainState: vi.fn(),
      });

      renderWithRouter(<SidePanel key="test" isEnabled={true} />);

      await waitFor(() => {
        expect(screen.getByText('Searching for Lytics JavaScript SDK')).toBeInTheDocument();
      });
    });
  });

  describe('when extension is disabled', () => {
    it('still uses useCurrentTabState hook', () => {
      const mockUseCurrentTabState = vi.spyOn(useCurrentTabStateModule, 'useCurrentTabState').mockReturnValue({
        currentTabId: '1',
        domainState: null,
        isLoading: true,
        domain: 'example.com',
        url: 'https://example.com',
        isPinned: false,
        tagActivity: [],
        tagConfig: null,
        profile: null,
        pinCurrentDomain: vi.fn(),
        unpinCurrentDomain: vi.fn(),
        clearActivity: vi.fn(),
        refreshDomainState: vi.fn(),
      });

      renderWithRouter(<SidePanel key="test" isEnabled={false} />);

      expect(mockUseCurrentTabState).toHaveBeenCalled();
    });
  });
});

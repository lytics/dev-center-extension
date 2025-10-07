import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ThemeProvider } from '@mui/material/styles';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';

import TopNavigation from './TopNavigation';
import { appTheme } from '@src/theme';
import { appContent } from '@root/src/shared/content/appContent';
import { ExtensionState } from '@src/shared/storages/extensionDomainStorage';
import { useAutoDetection } from '@root/src/pages/sidepanel/hooks/useAutoDetection';

// Mock Chrome APIs
const mockChromeTabsCreate = vi.fn();
global.chrome = {
  tabs: {
    create: mockChromeTabsCreate,
  },
} as any;

// Mock useAutoDetection hook
vi.mock('@root/src/pages/sidepanel/hooks/useAutoDetection', () => ({
  useAutoDetection: vi.fn(),
}));

// Mock AutoDetectionIndicator component
vi.mock('@root/src/pages/sidepanel/components/AutoDetectionIndicator', () => ({
  AutoDetectionIndicator: vi.fn(() => null),
}));

// Mock Toggle component
vi.mock('@root/src/pages/sidepanel/components/Toggle', () => ({
  default: vi.fn(() => null),
}));

describe('TopNavigation', () => {
  const defaultProps = {
    isEnabled: false,
    onChange: vi.fn(),
    domainState: {
      activeURL: 'https://example.com',
      isConfigured: false,
      activeTab: null,
      pinnedTab: null,
      pinnedURL: null,
    } as ExtensionState,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useAutoDetection).mockReturnValue({
      currentDomainAutoDetection: null,
      isAutoDetected: false,
      currentDomain: 'example.com',
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const renderWithTheme = (props = defaultProps) => {
    return render(
      <ThemeProvider theme={appTheme}>
        <TopNavigation {...props} />
      </ThemeProvider>,
    );
  };

  describe('Rendering', () => {
    it('should render with disabled state by default', () => {
      renderWithTheme();

      expect(screen.getByText('Enable Extension')).toBeInTheDocument();
    });

    it('should render with enabled state when isEnabled is true', () => {
      renderWithTheme({ ...defaultProps, isEnabled: true });

      expect(screen.getByText('Disable Extension')).toBeInTheDocument();
    });

    it('should render help and settings icons', () => {
      renderWithTheme();

      expect(screen.getByLabelText('help')).toBeInTheDocument();
      expect(screen.getByLabelText('settings')).toBeInTheDocument();
    });
  });

  describe('Toggle Functionality', () => {
    it('should display correct label based on enabled state', () => {
      const { rerender } = renderWithTheme({ ...defaultProps, isEnabled: false });
      expect(screen.getByText('Enable Extension')).toBeInTheDocument();

      rerender(
        <ThemeProvider theme={appTheme}>
          <TopNavigation {...defaultProps} isEnabled={true} />
        </ThemeProvider>,
      );
      expect(screen.getByText('Disable Extension')).toBeInTheDocument();
    });
  });

  describe('Help Icon Functionality', () => {
    it('should open documentation when help icon is clicked', async () => {
      renderWithTheme();

      const helpButton = screen.getByLabelText('help');
      await userEvent.click(helpButton);

      expect(mockChromeTabsCreate).toHaveBeenCalledWith({
        url: appContent.externalLinks.chromeExtensionDocs,
      });
    });

    it('should have correct aria-label for help button', () => {
      renderWithTheme();

      const helpButton = screen.getByLabelText('help');
      expect(helpButton).toBeInTheDocument();
    });
  });

  describe('Settings Icon', () => {
    it('should render settings icon with correct aria-label', () => {
      renderWithTheme();

      const settingsButton = screen.getByLabelText('settings');
      expect(settingsButton).toBeInTheDocument();
    });
  });

  describe('Auto Detection Indicator', () => {
    it('should call useAutoDetection with correct parameters', () => {
      const domainState = {
        activeURL: 'https://test.com',
        isConfigured: true,
        activeTab: null,
        pinnedTab: null,
        pinnedURL: null,
      } as ExtensionState;

      renderWithTheme({
        ...defaultProps,
        isEnabled: true,
        domainState,
      });

      expect(vi.mocked(useAutoDetection)).toHaveBeenCalledWith({
        isEnabled: true,
        activeURL: 'https://test.com',
      });
    });
  });
});

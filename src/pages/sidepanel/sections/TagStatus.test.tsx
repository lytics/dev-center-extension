import '@testing-library/jest-dom';

import React from 'react';

import { describe, expect, it } from 'vitest';

import { ThemeProvider } from '@mui/material/styles';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';
import { EventModel } from '@root/src/shared/models/eventModel';
import { appTheme } from '@root/src/theme';
import { render, screen } from '@testing-library/react';

import TagStatus from './TagStatus';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={appTheme}>{component}</ThemeProvider>);
};

describe('TagStatus', () => {
  const mockTagConfig: TagConfigModel = {
    version: '4.2.1',
    cid: ['test-account-123'],
    stream: 'production',
    cookie: 'seerid',
    entity: { byFieldKey: 'email' },
    loadid: true,
  };

  const legacyTagConfig: TagConfigModel = {
    version: '2.8.5',
    cid: ['legacy-account'],
    stream: 'default',
    cookie: 'seerid',
    entity: { byFieldKey: 'user_id' },
    loadid: false,
  };

  const mockTagActivity: EventModel[] = [
    { ts: Date.now() - 5 * 60 * 1000, type: 'load-js-tag', description: 'Loaded JS tag' },
    { ts: Date.now() - 2 * 60 * 1000, type: 'collect-data', description: 'Collected data' },
    { ts: Date.now() - 1 * 60 * 1000, type: 'load-profile', description: 'Loaded profile' },
  ];

  const emptyTagActivity: EventModel[] = [];

  describe('when tag is installed', () => {
    it('renders status header correctly', () => {
      renderWithTheme(<TagStatus tagIsInstalled={true} tagConfig={mockTagConfig} tagActivity={mockTagActivity} />);

      expect(screen.getByText('Status')).toBeInTheDocument();
      expect(screen.getByTestId('MonitorHeartOutlinedIcon')).toBeInTheDocument();
    });

    it('shows SDK installed message for current version', () => {
      renderWithTheme(<TagStatus tagIsInstalled={true} tagConfig={mockTagConfig} tagActivity={mockTagActivity} />);

      expect(screen.getByText('Lytics JavaScript SDK Installed')).toBeInTheDocument();
      expect(screen.getByText('v4.2.1')).toBeInTheDocument();
      expect(screen.getByTestId('CheckCircleIcon')).toBeInTheDocument();
    });

    it('shows deprecated version warning for legacy tag', () => {
      renderWithTheme(<TagStatus tagIsInstalled={true} tagConfig={legacyTagConfig} tagActivity={mockTagActivity} />);

      expect(screen.getByText('You are using a deprecated version of the Lytics SDK')).toBeInTheDocument();
      expect(screen.getByText('v2.8.5')).toBeInTheDocument();
      expect(screen.getByTestId('CancelIcon')).toBeInTheDocument();
    });

    it('renders configuration table with correct data', () => {
      renderWithTheme(<TagStatus tagIsInstalled={true} tagConfig={mockTagConfig} tagActivity={mockTagActivity} />);

      expect(screen.getByText('Account ID')).toBeInTheDocument();
      expect(screen.getByText('Stream')).toBeInTheDocument();
      expect(screen.getByText('Cookie Name')).toBeInTheDocument();
      expect(screen.getByText('Profile Key')).toBeInTheDocument();
      expect(screen.getByText('3rd Party Cookies')).toBeInTheDocument();

      expect(screen.getByText('test-account-123')).toBeInTheDocument();
      expect(screen.getByText('production')).toBeInTheDocument();
      expect(screen.getByText('seerid')).toBeInTheDocument();
      expect(screen.getByText('email')).toBeInTheDocument();
      expect(screen.getByText('Enabled')).toBeInTheDocument();
    });

    it('shows disabled for 3rd party cookies when loadid is false', () => {
      const configWithoutLoadid = { ...mockTagConfig, loadid: false };

      renderWithTheme(
        <TagStatus tagIsInstalled={true} tagConfig={configWithoutLoadid} tagActivity={mockTagActivity} />,
      );

      expect(screen.getByText('Disabled')).toBeInTheDocument();
    });

    it('renders activity table with Last Activity and Data Collection', () => {
      renderWithTheme(<TagStatus tagIsInstalled={true} tagConfig={mockTagConfig} tagActivity={mockTagActivity} />);

      expect(screen.getByText('Last Activity')).toBeInTheDocument();
      expect(screen.getByText('Data Collection')).toBeInTheDocument();
    });

    it('shows "No activity yet" when tagActivity is empty', () => {
      renderWithTheme(<TagStatus tagIsInstalled={true} tagConfig={mockTagConfig} tagActivity={emptyTagActivity} />);

      expect(screen.getByText('No activity yet')).toBeInTheDocument();
    });

    it('shows activity timestamp as relative time when activity exists', () => {
      renderWithTheme(<TagStatus tagIsInstalled={true} tagConfig={mockTagConfig} tagActivity={mockTagActivity} />);

      // Should show relative time like "a minute ago" or "2 minutes ago"
      const activityText = screen.getByText(/ago|minute/i);
      expect(activityText).toBeInTheDocument();
    });
  });

  describe('when tag is not installed', () => {
    it('shows loading spinner', () => {
      renderWithTheme(<TagStatus tagIsInstalled={false} tagConfig={mockTagConfig} tagActivity={emptyTagActivity} />);

      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('shows searching message', () => {
      renderWithTheme(<TagStatus tagIsInstalled={false} tagConfig={mockTagConfig} tagActivity={emptyTagActivity} />);

      expect(screen.getByText('Searching for Lytics JavaScript SDK')).toBeInTheDocument();
      expect(screen.getByTestId('ErrorIcon')).toBeInTheDocument();
    });
  });
});

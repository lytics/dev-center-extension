import '@testing-library/jest-dom';

import React from 'react';

import { describe, expect, it } from 'vitest';

import { ThemeProvider } from '@mui/material/styles';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';
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

  describe('when tag is installed', () => {
    it('renders status header correctly', () => {
      renderWithTheme(<TagStatus tagIsInstalled={true} tagConfig={mockTagConfig} />);

      expect(screen.getByText('Status')).toBeInTheDocument();
      expect(screen.getByTestId('MonitorHeartOutlinedIcon')).toBeInTheDocument();
    });

    it('shows SDK installed message for current version', () => {
      renderWithTheme(<TagStatus tagIsInstalled={true} tagConfig={mockTagConfig} />);

      expect(screen.getByText('Lytics JavaScript SDK Installed')).toBeInTheDocument();
      expect(screen.getByText('v4.2.1')).toBeInTheDocument();
      expect(screen.getByTestId('CheckCircleIcon')).toBeInTheDocument();
    });

    it('shows deprecated version warning for legacy tag', () => {
      renderWithTheme(<TagStatus tagIsInstalled={true} tagConfig={legacyTagConfig} />);

      expect(screen.getByText('You are using a deprecated version of the Lytics SDK')).toBeInTheDocument();
      expect(screen.getByText('v2.8.5')).toBeInTheDocument();
      expect(screen.getByTestId('CancelIcon')).toBeInTheDocument();
    });

    it('renders configuration table with correct data', () => {
      renderWithTheme(<TagStatus tagIsInstalled={true} tagConfig={mockTagConfig} />);

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

      renderWithTheme(<TagStatus tagIsInstalled={true} tagConfig={configWithoutLoadid} />);

      expect(screen.getByText('Disabled')).toBeInTheDocument();
    });
  });

  describe('when tag is not installed', () => {
    it('shows loading spinner', () => {
      renderWithTheme(<TagStatus tagIsInstalled={false} tagConfig={mockTagConfig} />);

      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('shows searching message', () => {
      renderWithTheme(<TagStatus tagIsInstalled={false} tagConfig={mockTagConfig} />);

      expect(screen.getByText('Searching for Lytics JavaScript SDK')).toBeInTheDocument();
      expect(screen.getByTestId('ErrorIcon')).toBeInTheDocument();
    });

    it('shows installation instructions with documentation link', () => {
      renderWithTheme(<TagStatus tagIsInstalled={false} tagConfig={mockTagConfig} />);

      expect(screen.getByText(/We have not been able to find the Lytics JavaScript SDK/)).toBeInTheDocument();

      const docLink = screen.getByRole('link', { name: 'Lytics JavaScript SDK documentation' });
      expect(docLink).toBeInTheDocument();
      expect(docLink).toHaveAttribute('href', 'https://docs.lytics.com/docs/lytics-javascript-tag#installation');
      expect(docLink).toHaveAttribute('target', '_blank');
      expect(docLink).toHaveAttribute('rel', 'noreferrer');
    });
  });
});

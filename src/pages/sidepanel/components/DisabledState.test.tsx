import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { DisabledState } from './DisabledState';
import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from '@src/theme';

// Mock chrome.tabs.create
global.chrome = {
  tabs: {
    create: vi.fn(),
  },
} as any;

describe('DisabledState', () => {
  const mockProps = {
    documentationUrl: 'https://docs.lytics.com/test',
    onDocLinkClick: vi.fn(),
    toggleLabel: 'Enable Extension',
    title: 'Enable extension to analyze domains',
    description: 'Activate the extension using the toggle at the top left.',
    documentationText: "If you haven't yet installed the Lytics tag, please refer to our Lytics JavaScript SDK",
    documentationLinkText: 'documentation',
    documentationSuffix: '.',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(
      <ThemeProvider theme={appTheme}>
        <DisabledState {...mockProps} />
      </ThemeProvider>,
    );

    expect(screen.getByText('Enable Extension')).toBeInTheDocument();
    expect(screen.getByText('Enable extension to analyze domains')).toBeInTheDocument();
    expect(screen.getByText(/If you haven't yet installed/)).toBeInTheDocument();
    expect(screen.getByText('documentation')).toBeInTheDocument();
  });

  it('opens documentation link when clicked', async () => {
    render(
      <ThemeProvider theme={appTheme}>
        <DisabledState {...mockProps} />
      </ThemeProvider>,
    );

    const docLink = screen.getByText('documentation');
    await userEvent.click(docLink);

    expect(mockProps.onDocLinkClick).toHaveBeenCalledTimes(1);
  });

  it('renders with custom props', () => {
    const customProps = {
      ...mockProps,
      title: 'Custom Title',
      description: 'Custom description text',
      documentationLinkText: 'custom link',
      toggleLabel: 'Custom Toggle',
    };

    render(
      <ThemeProvider theme={appTheme}>
        <DisabledState {...customProps} />
      </ThemeProvider>,
    );

    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom description text')).toBeInTheDocument();
    expect(screen.getByText('custom link')).toBeInTheDocument();
    expect(screen.getByText('Custom Toggle')).toBeInTheDocument();
  });
});

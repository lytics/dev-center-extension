import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { EnabledState } from './EnabledState';
import { appContent } from '@src/shared/content/appContent';
import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from '@src/theme';

describe('EnabledState', () => {
  const mockProps = {
    domainState: { pinnedURL: '' },
    tabValid: true,
    onPin: vi.fn(),
    documentationUrl: 'https://docs.lytics.com/test',
    hasLyticsSDK: true, // SDK is detected
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with default content', () => {
    render(
      <ThemeProvider theme={appTheme}>
        <EnabledState {...mockProps} />
      </ThemeProvider>,
    );

    expect(screen.getByText(appContent.enabledState.title)).toBeInTheDocument();
    expect(screen.getByText(appContent.enabledState.buttonText)).toBeInTheDocument();
    expect(screen.getByText(appContent.enabledState.adBlockerNotice)).toBeInTheDocument();
  });

  it('displays pinned URL message when pinnedURL exists', () => {
    const propsWithPinnedURL = {
      ...mockProps,
      domainState: { pinnedURL: 'example.com' },
      tabValid: true,
    };

    render(
      <ThemeProvider theme={appTheme}>
        <EnabledState {...propsWithPinnedURL} />
      </ThemeProvider>,
    );

    expect(screen.getByText('example.com')).toBeInTheDocument();
  });

  it('calls onPin when configure domains button is clicked', async () => {
    render(
      <ThemeProvider theme={appTheme}>
        <EnabledState {...mockProps} />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button', { name: appContent.enabledState.buttonText });
    await userEvent.click(button);

    expect(mockProps.onPin).toHaveBeenCalledTimes(1);
  });

  it('renders with custom textContent', () => {
    const customContent = {
      title: 'Custom Title',
      buttonText: 'Custom Button',
      pinnedUrlText: {
        prefix: 'Custom prefix ',
        suffix: ' custom suffix',
        suffixAnotherTab: ' custom suffix another tab',
      },
      documentationLinkText: 'custom docs',
      noPinnedUrlText: 'Custom no pinned URL text',
      adBlockerNotice: 'Custom ad blocker notice',
      noSdkTitle: 'No SDK',
      noSdkDescription: 'No SDK description',
      noSdkDocumentationText: 'docs',
      noSdkSuffix: ' suffix',
    };

    render(
      <ThemeProvider theme={appTheme}>
        <EnabledState {...mockProps} textContent={customContent as any} />
      </ThemeProvider>,
    );

    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Button')).toBeInTheDocument();
    expect(screen.getByText('Custom ad blocker notice')).toBeInTheDocument();
  });

  it('renders no SDK state when hasLyticsSDK is false', () => {
    const noSDKProps = {
      ...mockProps,
      hasLyticsSDK: false,
    };

    render(
      <ThemeProvider theme={appTheme}>
        <EnabledState {...noSDKProps} />
      </ThemeProvider>,
    );

    expect(screen.getByText(appContent.enabledState.noSdkTitle)).toBeInTheDocument();
    expect(screen.getByText(appContent.enabledState.noSdkDocumentationText)).toBeInTheDocument();
    expect(screen.queryByText(appContent.enabledState.title)).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: appContent.enabledState.buttonText })).not.toBeInTheDocument();
  });
});

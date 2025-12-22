import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Interests } from './Interests';
import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from '@root/src/theme';

describe('Interests', () => {
  const renderWithTheme = component => {
    return render(<ThemeProvider theme={appTheme}>{component}</ThemeProvider>);
  };

  it('renders interests with progress bars when data is available', () => {
    const mockInterests = [
      { label: 'Home', value: 100 },
      { label: 'Soap', value: 84 },
    ];

    renderWithTheme(<Interests hasData={true} interests={mockInterests} />);

    expect(screen.getByText('Interests')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Soap')).toBeInTheDocument();

    const progressBars = screen.getAllByRole('progressbar');
    expect(progressBars).toHaveLength(2);
    expect(progressBars[0]).toHaveAttribute('aria-label', 'Home: 100%');
    expect(progressBars[1]).toHaveAttribute('aria-label', 'Soap: 84%');
  });

  it('displays empty state when hasData is false', () => {
    renderWithTheme(<Interests hasData={false} interests={[]} />);

    expect(screen.getByText('Interests')).toBeInTheDocument();
    expect(screen.getByText(/Interests are not currently shared for this account/)).toBeInTheDocument();
    expect(screen.getByText('Learn more')).toBeInTheDocument();
  });

  it('displays empty state when interests array is empty', () => {
    renderWithTheme(<Interests hasData={true} interests={[]} />);

    expect(screen.getByText('Interests')).toBeInTheDocument();
    expect(screen.getByText(/Interests are not currently shared for this account/)).toBeInTheDocument();
  });

  it('renders multiple interests correctly', () => {
    const mockInterests = [
      { label: 'Technology', value: 95 },
      { label: 'Sports', value: 60 },
      { label: 'Music', value: 45 },
    ];

    renderWithTheme(<Interests hasData={true} interests={mockInterests} />);

    expect(screen.getByText('Technology')).toBeInTheDocument();
    expect(screen.getByText('Sports')).toBeInTheDocument();
    expect(screen.getByText('Music')).toBeInTheDocument();

    const progressBars = screen.getAllByRole('progressbar');
    expect(progressBars).toHaveLength(3);
  });
});

import React from 'react';

import { describe, expect, it, vi } from 'vitest';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { appPalette } from '@root/src/theme/palette';
import { fireEvent, render, screen } from '@testing-library/react';

import { BottomNav } from './BottomNavigation';

const theme = createTheme({ palette: appPalette });

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('BottomNav', () => {
  const mockOnChange = vi.fn();
  const defaultProps = {
    value: '/',
    onChange: mockOnChange,
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders all navigation sections', () => {
    renderWithTheme(<BottomNav {...defaultProps} />);

    expect(screen.getByLabelText('Debug')).toBeInTheDocument();
    expect(screen.getByLabelText('Profile')).toBeInTheDocument();
    expect(screen.getByLabelText('Personalization')).toBeInTheDocument();
  });

  it('calls onChange when navigation action is clicked', () => {
    renderWithTheme(<BottomNav {...defaultProps} />);

    const profileButton = screen.getByLabelText('Profile');
    fireEvent.click(profileButton);

    expect(mockOnChange).toHaveBeenCalledWith('/profile');
  });
});

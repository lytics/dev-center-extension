import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TabNavigation, TabItem } from './TabNavigation';
import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from '@root/src/theme';

describe('TabNavigation', () => {
  const mockTabs: TabItem[] = [
    { id: 'tab1', label: 'First Tab', disabled: false },
    { id: 'tab2', label: 'Second Tab', disabled: false },
    { id: 'tab3', label: 'Third Tab', disabled: true },
  ];

  const mockOnChange = vi.fn();

  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={appTheme}>{component}</ThemeProvider>);
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render all tabs with correct labels', () => {
    renderWithTheme(<TabNavigation tabs={mockTabs} value={0} onChange={mockOnChange} />);

    expect(screen.getByText('First Tab')).toBeInTheDocument();
    expect(screen.getByText('Second Tab')).toBeInTheDocument();
    expect(screen.getByText('Third Tab')).toBeInTheDocument();
  });

  it('should call onChange when a tab is clicked', () => {
    renderWithTheme(<TabNavigation tabs={mockTabs} value={0} onChange={mockOnChange} />);

    const secondTab = screen.getByText('Second Tab');
    fireEvent.click(secondTab);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('should mark the correct tab as selected', () => {
    renderWithTheme(<TabNavigation tabs={mockTabs} value={1} onChange={mockOnChange} />);

    const secondTab = screen.getByText('Second Tab');
    expect(secondTab).toHaveClass('Mui-selected');
  });

  it('should disable tabs correctly', () => {
    renderWithTheme(<TabNavigation tabs={mockTabs} value={0} onChange={mockOnChange} />);

    const thirdTab = screen.getByText('Third Tab');
    expect(thirdTab).toHaveClass('Mui-disabled');
  });

  it('should not call onChange when a disabled tab is clicked', () => {
    renderWithTheme(<TabNavigation tabs={mockTabs} value={0} onChange={mockOnChange} />);

    const disabledTab = screen.getByText('Third Tab');
    fireEvent.click(disabledTab);

    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('should render with no tabs', () => {
    const { container } = renderWithTheme(<TabNavigation tabs={[]} value={0} onChange={mockOnChange} />);

    expect(container.querySelector('.MuiTabs-root')).toBeInTheDocument();
  });

  it('should apply correct IDs to tabs', () => {
    renderWithTheme(<TabNavigation tabs={mockTabs} value={0} onChange={mockOnChange} />);

    const firstTab = screen.getByText('First Tab');
    expect(firstTab).toHaveAttribute('id', 'tab1');

    const secondTab = screen.getByText('Second Tab');
    expect(secondTab).toHaveAttribute('id', 'tab2');
  });

  it('should handle tab changes between different values', () => {
    const { rerender } = renderWithTheme(<TabNavigation tabs={mockTabs} value={0} onChange={mockOnChange} />);

    let firstTab = screen.getByText('First Tab');
    expect(firstTab).toHaveClass('Mui-selected');

    rerender(
      <ThemeProvider theme={appTheme}>
        <TabNavigation tabs={mockTabs} value={1} onChange={mockOnChange} />
      </ThemeProvider>,
    );

    const secondTab = screen.getByText('Second Tab');
    expect(secondTab).toHaveClass('Mui-selected');

    firstTab = screen.getByText('First Tab');
    expect(firstTab).not.toHaveClass('Mui-selected');
  });

  it('should use default disabled value as false when not provided', () => {
    const tabsWithoutDisabled: TabItem[] = [{ id: 'tab1', label: 'Tab 1' }];

    renderWithTheme(<TabNavigation tabs={tabsWithoutDisabled} value={0} onChange={mockOnChange} />);

    const tab = screen.getByText('Tab 1');
    expect(tab).not.toHaveClass('Mui-disabled');
  });

  it('should render tabs with proper styling structure', () => {
    const { container } = renderWithTheme(<TabNavigation tabs={mockTabs} value={0} onChange={mockOnChange} />);

    // Check for MUI Tabs component
    expect(container.querySelector('.MuiTabs-root')).toBeInTheDocument();

    // Check for MUI Tab components
    const tabs = container.querySelectorAll('.MuiTab-root');
    expect(tabs).toHaveLength(3);
  });

  it('should handle single tab', () => {
    const singleTab: TabItem[] = [{ id: 'only-tab', label: 'Only Tab', disabled: false }];

    renderWithTheme(<TabNavigation tabs={singleTab} value={0} onChange={mockOnChange} />);

    expect(screen.getByText('Only Tab')).toBeInTheDocument();
    expect(screen.getByText('Only Tab')).toHaveClass('Mui-selected');
  });
});

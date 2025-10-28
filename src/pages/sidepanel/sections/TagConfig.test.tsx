import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TagConfig from './TagConfig';
import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from '@root/src/theme';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';

// Mock TreeDisplay component
vi.mock('@root/src/pages/sidepanel/components/TreeDisplay', () => ({
  default: ({ data }: { data: any }) => <div data-testid="tree-display">{JSON.stringify(data)}</div>,
}));

describe('TagConfig', () => {
  const mockTagConfig: TagConfigModel = {
    stream: 'test-stream',
    cid: ['test-cid-456'], // cid is string[] according to model
    version: '3.5.0',
    url: 'https://example.com',
    src: 'https://c.lytics.io/api/tag/test-account-123/latest.min.js',
  };

  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={appTheme}>{component}</ThemeProvider>);
  };

  it('should render the TagConfig component', () => {
    renderWithTheme(<TagConfig tagConfig={mockTagConfig} />);

    const treeDisplay = screen.getByTestId('tree-display');
    expect(treeDisplay).toBeInTheDocument();
  });

  it('should pass tagConfig data to TreeDisplay', () => {
    renderWithTheme(<TagConfig tagConfig={mockTagConfig} />);

    const treeDisplay = screen.getByTestId('tree-display');
    expect(treeDisplay).toHaveTextContent(mockTagConfig.stream);
    expect(treeDisplay).toHaveTextContent(mockTagConfig.version);
    expect(treeDisplay).toHaveTextContent(mockTagConfig.url);
  });

  it('should handle empty tagConfig', () => {
    const emptyConfig = {} as TagConfigModel;
    renderWithTheme(<TagConfig tagConfig={emptyConfig} />);

    const treeDisplay = screen.getByTestId('tree-display');
    expect(treeDisplay).toBeInTheDocument();
  });

  it('should handle different tagConfig versions', () => {
    const legacyConfig: TagConfigModel = {
      ...mockTagConfig,
      version: '2.8.0',
    };

    renderWithTheme(<TagConfig tagConfig={legacyConfig} />);

    const treeDisplay = screen.getByTestId('tree-display');
    expect(treeDisplay).toHaveTextContent('2.8.0');
  });

  it('should handle tagConfig with missing optional fields', () => {
    const partialConfig = {
      stream: 'test-stream',
      version: '3.5.0',
    } as TagConfigModel;

    renderWithTheme(<TagConfig tagConfig={partialConfig} />);

    const treeDisplay = screen.getByTestId('tree-display');
    expect(treeDisplay).toBeInTheDocument();
    expect(treeDisplay).toHaveTextContent('test-stream');
  });

  it('should render TreeDisplay inside styled panel', () => {
    const { container } = renderWithTheme(<TagConfig tagConfig={mockTagConfig} />);

    const panel = container.querySelector('.MuiBox-root');
    const treeDisplay = screen.getByTestId('tree-display');

    expect(panel).toContainElement(treeDisplay);
  });
});

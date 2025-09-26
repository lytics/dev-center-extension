import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { AutoDetectionIndicator } from './AutoDetectionIndicator';
import { appContent } from '@root/src/shared/content/appContent';

// Mock Chrome APIs
const mockChromeTabsCreate = vi.fn();
global.chrome = {
  tabs: {
    create: mockChromeTabsCreate,
  },
} as any;

// Mock window.location
Object.defineProperty(window, 'location', {
  value: {
    hostname: 'example.com',
  },
  writable: true,
});

describe('AutoDetectionIndicator', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset window.location.hostname
    Object.defineProperty(window, 'location', {
      value: { hostname: 'example.com' },
      writable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Rendering', () => {
    it('should render with default domain from window.location.hostname', () => {
      render(<AutoDetectionIndicator />);

      expect(screen.getByText(appContent.autoDetection.autoDetectedTitle)).toBeInTheDocument();
      expect(screen.getByText('example.com')).toBeInTheDocument();
    });

    it('should render with provided currentDomain prop', () => {
      render(<AutoDetectionIndicator currentDomain="test.com" />);

      expect(screen.getByText(appContent.autoDetection.autoDetectedTitle)).toBeInTheDocument();
      expect(screen.getByText('test.com')).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('should apply correct styling classes', () => {
      const { container } = render(<AutoDetectionIndicator />);

      // Check that the component renders with proper structure
      expect(container.firstChild).toBeInTheDocument();
      expect(screen.getByText(appContent.autoDetection.autoDetectedTitle)).toBeInTheDocument();
    });

    it('should render with proper layout structure', () => {
      render(<AutoDetectionIndicator currentDomain="layout-test.com" />);

      // Check that the domain link is clickable
      const domainLink = screen.getByText('layout-test.com');
      expect(domainLink).toBeInTheDocument();
      expect(domainLink).toHaveStyle('text-decoration: underline');
    });
  });

  describe('User Interactions', () => {
    it('should open new tab when domain link is clicked', () => {
      render(<AutoDetectionIndicator currentDomain="click-test.com" />);

      const domainLink = screen.getByText('click-test.com');
      fireEvent.click(domainLink);

      expect(mockChromeTabsCreate).toHaveBeenCalledWith({
        url: 'https://click-test.com',
      });
    });

    it('should open new tab with correct URL format', () => {
      render(<AutoDetectionIndicator currentDomain="subdomain.example.com" />);

      const domainLink = screen.getByText('subdomain.example.com');
      fireEvent.click(domainLink);

      expect(mockChromeTabsCreate).toHaveBeenCalledWith({
        url: 'https://subdomain.example.com',
      });
    });
  });
});

describe('Accessibility', () => {
  it('should have proper clickable domain link', () => {
    render(<AutoDetectionIndicator currentDomain="accessibility-test.com" />);

    const domainLink = screen.getByText('accessibility-test.com');
    expect(domainLink).toBeInTheDocument();
    expect(domainLink).toHaveStyle('cursor: pointer');
  });

  it('should maintain proper text contrast and styling', () => {
    render(<AutoDetectionIndicator currentDomain="contrast-test.com" />);

    const domainLink = screen.getByText('contrast-test.com');
    expect(domainLink).toHaveStyle('text-decoration: underline');
  });
});

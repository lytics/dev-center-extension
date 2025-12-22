import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProfileSummary from './ProfileSummary';
import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from '@root/src/theme';

vi.mock('@root/src/pages/sidepanel/sections/profile/ProfileHeader', () => ({
  default: ({ lyticsId }) => <div data-testid="profile-header">{lyticsId}</div>,
}));

vi.mock('@root/src/pages/sidepanel/sections/profile/AudienceMembership', () => ({
  default: ({ audiences }) => <div data-testid="audience-membership">{audiences.join(', ')}</div>,
}));

vi.mock('@root/src/pages/sidepanel/sections/profile/Attributes', () => ({
  default: ({ count }) => <div data-testid="attributes">Count: {count}</div>,
}));

vi.mock('@root/src/pages/sidepanel/sections/profile/BehaviorMetrics', () => ({
  default: ({ metrics }) => <div data-testid="behavior-metrics">{metrics.length} metrics</div>,
}));

vi.mock('@root/src/pages/sidepanel/sections/profile/Interests', () => ({
  default: ({ interests }) => (
    <div data-testid="interests">
      {interests.map((interest, index) => (
        <div key={index} data-testid={`interest-${index}`}>
          {interest.label}: {interest.value}%
        </div>
      ))}
    </div>
  ),
}));

vi.mock('@root/src/pages/sidepanel/sections/profile/ProfileMetadata', () => ({
  default: () => <div data-testid="profile-metadata">Metadata</div>,
}));

describe('ProfileSummary', () => {
  const renderWithTheme = component => {
    return render(<ThemeProvider theme={appTheme}>{component}</ThemeProvider>);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('transforms lytics_content object to interests array correctly', () => {
    const mockProfile = {
      data: {
        user: {
          _id: 'test-id',
          _uid: 'test-uid',
          lytics_content: {
            Home: 1,
            Soap: 0.8409454388537114,
          },
        },
      },
    };

    renderWithTheme(<ProfileSummary profile={mockProfile} />);

    const interestsContainer = screen.getByTestId('interests');
    expect(interestsContainer).toBeInTheDocument();

    expect(screen.getByTestId('interest-0')).toHaveTextContent('Home: 100%');
    expect(screen.getByTestId('interest-1')).toHaveTextContent('Soap: 84%');
  });

  it('handles missing lytics_content gracefully', () => {
    const mockProfile = {
      data: {
        user: {
          _id: 'test-id',
          _uid: 'test-uid',
        },
      },
    };

    renderWithTheme(<ProfileSummary profile={mockProfile} />);

    const interestsContainer = screen.getByTestId('interests');
    expect(interestsContainer).toBeInTheDocument();
    expect(interestsContainer.children).toHaveLength(0);
  });

  it('converts interest values to percentages correctly', () => {
    const mockProfile = {
      data: {
        user: {
          _id: 'test-id',
          _uid: 'test-uid',
          lytics_content: {
            Technology: 0.95,
            Sports: 0.6,
            Music: 0.45,
            Full: 1.0,
            Zero: 0,
          },
        },
      },
    };

    renderWithTheme(<ProfileSummary profile={mockProfile} />);

    expect(screen.getByTestId('interest-0')).toHaveTextContent('Technology: 95%');
    expect(screen.getByTestId('interest-1')).toHaveTextContent('Sports: 60%');
    expect(screen.getByTestId('interest-2')).toHaveTextContent('Music: 45%');
    expect(screen.getByTestId('interest-3')).toHaveTextContent('Full: 100%');
    expect(screen.getByTestId('interest-4')).toHaveTextContent('Zero: 0%');
  });

  it('handles null or undefined lytics_content', () => {
    const mockProfile = {
      data: {
        user: {
          _id: 'test-id',
          _uid: 'test-uid',
          lytics_content: null,
        },
      },
    };

    renderWithTheme(<ProfileSummary profile={mockProfile} />);

    const interestsContainer = screen.getByTestId('interests');
    expect(interestsContainer.children).toHaveLength(0);
  });

  it('handles empty lytics_content object', () => {
    const mockProfile = {
      data: {
        user: {
          _id: 'test-id',
          _uid: 'test-uid',
          lytics_content: {},
        },
      },
    };

    renderWithTheme(<ProfileSummary profile={mockProfile} />);

    const interestsContainer = screen.getByTestId('interests');
    expect(interestsContainer.children).toHaveLength(0);
  });
});

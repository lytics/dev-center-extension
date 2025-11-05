import type { Components, Theme } from '@mui/material/styles';
import { appColors } from './palette';

// Component style overrides to match Figma design
export const components: Components<Omit<Theme, 'components'>> = {
  // Global CSS baseline
  MuiCssBaseline: {
    styleOverrides: {
      '*': {
        boxSizing: 'border-box',
      },
      html: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      body: {
        margin: 0,
        padding: 0,
      },
      // Custom scrollbar styling
      '*::-webkit-scrollbar': {
        width: '0.375rem',
        height: '0.375rem',
      },
      '*::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: appColors.neutral[400],
        borderRadius: '0.1875rem',
        '&:hover': {
          backgroundColor: appColors.neutral[600],
        },
      },
    },
  },

  // Button customizations
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '0.5rem',
        textTransform: 'none',
        fontWeight: 500,
        boxShadow: 'none',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0 0.125rem 0.5rem #0000001f',
          transform: 'translateY(-0.0625rem)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      },
      contained: {
        '&:hover': {
          boxShadow: '0 0.25rem 0.75rem #00000026',
        },
      },
      outlined: {
        borderWidth: '0.09375rem',
        '&:hover': {
          borderWidth: '0.09375rem',
        },
      },
    },
  },

  // Card customizations
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '0.75rem',
        boxShadow: '0 0.0625rem 0.1875rem #0000001f, 0 0.0625rem 0.125rem #0000003d',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0 0.25rem 0.5rem #0000001f, 0 0.125rem 0.25rem #0000003d',
          transform: 'translateY(-0.125rem)',
        },
      },
    },
  },

  // Tab customizations
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
        borderRadius: '0.375rem',
        margin: '0 0.125rem',
        minHeight: '2.5rem',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          backgroundColor: '#0000000a',
        },
        '&.Mui-selected': {
          fontWeight: 600,
        },
      },
    },
  },

  // Tabs customizations
  MuiTabs: {
    styleOverrides: {
      root: {
        height: '2rem',
        minHeight: '2rem',
      },
      indicator: {
        height: '0.1875rem',
        borderRadius: '0.125rem',
      },
    },
  },

  // Chip customizations
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: '0.375rem',
        fontWeight: 500,
      },
    },
  },

  // Loading/Progress customizations
  MuiCircularProgress: {
    styleOverrides: {
      root: {
        animationDuration: '1.5s',
      },
    },
  },

  // Divider customizations
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: '#00000014',
      },
    },
  },
};

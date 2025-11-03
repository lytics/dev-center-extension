import type { PaletteOptions } from '@mui/material/styles';

// Minimized Color Palette - Essential colors only
const appColors = {
  // Primary Brand Colors - Only essential shades
  primary: {
    light: '#38bdf8',
    main: '#0ea5e9',
    dark: '#0284c7',
  },

  // Secondary Colors - Only essential shades
  secondary: {
    light: '#e879f9',
    main: '#d946ef',
    dark: '#c026d3',
  },

  // Neutral/Gray Scale - Essential grays only
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#525252',
    300: '#B5B4C0', // Muted text color
    400: '#a3a3a3',
    500: '#E6E6E6', // Light border color
    600: '#383838',
    900: '#171717',
  },

  // Semantic Colors - Main shades only
  success: {
    main: '#22c55e',
  },

  // Toggle/Switch Colors
  toggle: {
    active: '#49D68F', // Active toggle background
    activeBorder: '#3BBB7B', // Active toggle border
    focus: '#4CAF50', // Focus state color
    inactive: '#D6D3DB', // Inactive toggle color
    thumb: '#fff', // Toggle thumb color
  },

  // Common Design Tokens
  common: {
    white: '#ffffff', // Pure white background
    darkPanel: '#272728', // Dark panel background
    fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: {
      base: '1rem', // Standard font size (16px)
      baseSmall: '0.875rem', // Standard font size (14px)
      small: '0.8125rem', // Small font size (13px)
    },
    lineHeight: {
      tight: 1.3, // Tight line height for descriptions
    },
    fontWeight: {
      medium: 500, // Medium weight
      semiBold: 600, // Semi-bold weight for titles
      bold: 700, // Bold weight for emphasis
    },
    colors: {
      textSecondary: '#7D7A7A', // Secondary text color
      accent: '#8848F9', // Accent color for buttons and links
      accentLight: '#E8DBFF', // Light purple for backgrounds/progress bars
      autoDetection: {
        background: '#DDE3FF', // Auto-detection background
        border: '#516EFF', // Auto-detection border
        domain: '#0A64FF', // Domain text color
      },
    },
  },

  warning: {
    main: '#f59e0b',
  },

  error: {
    main: '#ef4444',
  },

  info: {
    main: '#3b82f6',
  },
};

// Minimized Theme Palette (Light Mode Only)
export const appPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: appColors.primary.main,
    light: appColors.primary.light,
    dark: appColors.primary.dark,
    contrastText: '#ffffff',
  },
  secondary: {
    main: appColors.secondary.main,
    light: appColors.secondary.light,
    dark: appColors.secondary.dark,
    contrastText: '#ffffff',
  },
  error: {
    main: appColors.error.main,
    contrastText: '#ffffff',
  },
  warning: {
    main: appColors.warning.main,
    contrastText: '#ffffff',
  },
  info: {
    main: appColors.info.main,
    contrastText: '#ffffff',
  },
  success: {
    main: appColors.success.main,
    contrastText: '#ffffff',
  },
  grey: appColors.neutral,
  background: {
    default: '#E9E8ED',
    paper: '#E9E8ED',
  },
  text: {
    primary: appColors.neutral[900],
    secondary: appColors.neutral[600],
    disabled: appColors.neutral[400],
  },
  divider: appColors.neutral[200],
  action: {
    active: appColors.neutral[600],
    hover: appColors.neutral[50],
    selected: appColors.neutral[100],
    disabled: appColors.neutral[400],
    disabledBackground: appColors.neutral[100],
  },
};

// Export the color tokens for use in components
export { appColors };

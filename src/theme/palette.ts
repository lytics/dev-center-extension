import type { PaletteOptions } from '@mui/material/styles';

// Figma Design Tokens - Replace these with your actual Figma colors
const figmaColors = {
  // Primary Brand Colors (Update with your Figma values)
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9', // Main primary
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },

  // Secondary Colors (Update with your Figma values)
  secondary: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef', // Main secondary
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },

  // Neutral/Gray Scale
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: 'rgba(82, 82, 82, 0.13)',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },

  // Semantic Colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e', // Main success
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },

  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b', // Main warning
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },

  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444', // Main error
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },

  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Main info
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
};

// Single Theme Palette (Light/White Mode Only)
export const appPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: figmaColors.primary[500],
    light: figmaColors.primary[400],
    dark: figmaColors.primary[600],
    contrastText: '#ffffff',
  },
  secondary: {
    main: figmaColors.secondary[500],
    light: figmaColors.secondary[400],
    dark: figmaColors.secondary[600],
    contrastText: '#ffffff',
  },
  error: {
    main: figmaColors.error[500],
    light: figmaColors.error[400],
    dark: figmaColors.error[600],
    contrastText: '#ffffff',
  },
  warning: {
    main: figmaColors.warning[500],
    light: figmaColors.warning[400],
    dark: figmaColors.warning[600],
    contrastText: '#ffffff',
  },
  info: {
    main: figmaColors.info[500],
    light: figmaColors.info[400],
    dark: figmaColors.info[600],
    contrastText: '#ffffff',
  },
  success: {
    main: figmaColors.success[500],
    light: figmaColors.success[400],
    dark: figmaColors.success[600],
    contrastText: '#ffffff',
  },
  grey: figmaColors.neutral,
  background: {
    default: '#E9E8ED',
    paper: '#E9E8ED',
  },
  text: {
    primary: figmaColors.neutral[900],
    secondary: figmaColors.neutral[600],
    disabled: figmaColors.neutral[400],
  },
  divider: figmaColors.neutral[200],
  action: {
    active: figmaColors.neutral[600],
    hover: figmaColors.neutral[50],
    selected: figmaColors.neutral[100],
    disabled: figmaColors.neutral[300],
    disabledBackground: figmaColors.neutral[100],
  },
};

// Export the color tokens for use in components
export { figmaColors };

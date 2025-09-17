import type { TypographyOptions } from '@mui/material/styles/createTypography';

// Font configuration based on modern design principles
export const typography: TypographyOptions = {
  // Use system fonts for better performance and native look
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),

  // Font weights
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,

  // Typography scale with proper line heights
  h1: {
    fontSize: '2rem', // 32px
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: '1.5rem', // 24px
    fontWeight: 600,
    lineHeight: 1.33,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontSize: '1.25rem', // 20px
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: '-0.01em',
  },
  h4: {
    fontSize: '1.125rem', // 18px
    fontWeight: 600,
    lineHeight: 1.44,
    letterSpacing: '0em',
  },
  h5: {
    fontSize: '1rem', // 16px
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  h6: {
    fontSize: '0.875rem', // 14px
    fontWeight: 600,
    lineHeight: 1.57,
    letterSpacing: '0.01em',
  },

  // Body text
  body1: {
    fontSize: '1rem', // 16px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  body2: {
    fontSize: '0.875rem', // 14px
    fontWeight: 400,
    lineHeight: 1.57,
    letterSpacing: '0.01em',
  },

  // UI text
  button: {
    fontSize: '0.875rem', // 14px
    fontWeight: 500,
    lineHeight: 1.43,
    letterSpacing: '0.02em',
    textTransform: 'none', // Override MUI default uppercase
  },
  caption: {
    fontSize: '0.75rem', // 12px
    fontWeight: 400,
    lineHeight: 1.67,
    letterSpacing: '0.03em',
  },
  overline: {
    fontSize: '0.75rem', // 12px
    fontWeight: 500,
    lineHeight: 1.67,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },

  // Subtitle variants
  subtitle1: {
    fontSize: '1rem', // 16px
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
  },
  subtitle2: {
    fontSize: '0.875rem', // 14px
    fontWeight: 500,
    lineHeight: 1.57,
    letterSpacing: '0.01em',
  },
};

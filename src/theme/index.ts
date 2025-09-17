import { createTheme, type Theme } from '@mui/material/styles';
import { appPalette } from './palette';
import { typography } from './typography';
import { components } from './components';

// Base theme configuration
const baseTheme = {
  typography,
  shape: {
    borderRadius: 8,
  },
  spacing: 8, // 8px base spacing unit
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};

// Create single app theme (light mode only)
export const appTheme: Theme = createTheme({
  typography: baseTheme.typography,
  shape: baseTheme.shape,
  spacing: baseTheme.spacing,
  breakpoints: baseTheme.breakpoints,
  transitions: baseTheme.transitions,
  zIndex: baseTheme.zIndex,
  palette: appPalette,
  components: components,
});

// Theme type for TypeScript
export type AppTheme = typeof appTheme;

// Export everything
export * from './palette';
export * from './typography';
export * from './components';

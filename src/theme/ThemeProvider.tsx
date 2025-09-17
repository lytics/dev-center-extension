import React, { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { appTheme } from './index';

// Theme provider props
interface AppThemeProviderProps {
  children: ReactNode;
}

// Simplified theme provider component (single theme only)
export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

// Export default as AppThemeProvider for convenience
export default AppThemeProvider;

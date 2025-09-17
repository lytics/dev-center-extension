import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import State from '@pages/sidepanel/State';
import { AppThemeProvider } from '@src/theme/ThemeProvider';

function init() {
  const appContainer = document.querySelector('#app-container');

  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }

  const root = createRoot(appContainer);

  root.render(
    <React.StrictMode>
      <AppThemeProvider>
        <Router>
          <State />
        </Router>
      </AppThemeProvider>
    </React.StrictMode>,
  );
}

init();

import React from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import State from '@pages/sidepanel/State';
import { AppThemeProvider } from '@src/theme/ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function init() {
  const appContainer = document.querySelector('#app-container');

  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }

  const root = createRoot(appContainer);
  const queryClient = new QueryClient();

  root.render(
    <React.StrictMode>
      <AppThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <State />
          </Router>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </AppThemeProvider>
    </React.StrictMode>,
  );
}

init();

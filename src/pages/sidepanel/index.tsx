import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import State from '@pages/sidepanel/State';

function init() {
  const appContainer = document.querySelector('#app-container');

  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }

  const root = createRoot(appContainer);

  root.render(
    <React.StrictMode>
      <Router>
        <State />
      </Router>
    </React.StrictMode>,
  );
}

init();

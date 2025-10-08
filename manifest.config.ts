import { defineManifest } from '@crxjs/vite-plugin';

import pkg from './package.json';

export default defineManifest({
  manifest_version: 3,
  name: pkg.title,
  version: pkg.version,
  icons: {
    128: 'icon-128.png',
  },
  action: {
    default_title: 'Click to open panel',
  },
  permissions: [
    'storage',
    'activeTab',
    'tabs',
    'webRequest',
    'webNavigation',
    'declarativeNetRequest',
    'declarativeNetRequestFeedback',
    'sidePanel',
    'contextMenus',
    'management',
  ],
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/content/index.js'],
    },
  ],
  side_panel: {
    default_path: 'src/pages/sidepanel/index.html',
  },
});

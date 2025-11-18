import { defineManifest } from '@crxjs/vite-plugin';

import pkg from './package.json';

export default defineManifest({
  manifest_version: 3,
  name: pkg.title,
  version: pkg.version,
  description: pkg.description,
  host_permissions: ['<all_urls>'],
  declarative_net_request: {
    rule_resources: [
      {
        id: 'lyticsBlockRule',
        enabled: true,
        path: 'rules.json',
      },
    ],
  },
  side_panel: {
    default_path: 'src/pages/sidepanel/index.html',
  },
  background: {
    type: 'module',
    service_worker: 'src/pages/background/index.ts',
  },
  options_page: 'src/pages/options/index.html',
  action: {
    default_title: 'Click to open panel',
    default_panel: 'src/pages/sidepanel/index.html',
    default_icon: 'icon-34.png',
  } as any,
  icons: {
    128: 'icon-128.png',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/content/index.ts'],
    },
  ],
  permissions: [
    'storage',
    'activeTab',
    'tabs',
    'webRequest',
    'declarativeNetRequest',
    'declarativeNetRequestFeedback',
    'sidePanel',
    'management',
  ],
  web_accessible_resources: [
    {
      resources: [
        'assets/img/*.png',
        'assets/js/*.js',
        'assets/css/*.css',
        'icon-128.png',
        'icon-34.png',
        'tagLink.js',
      ],
      matches: ['<all_urls>'],
    },
  ],
});

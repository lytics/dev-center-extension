import { readFileSync } from 'fs';
const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

const manifest = {
  manifest_version: 3,
  name: packageJson.title,
  version: packageJson.version,
  description: packageJson.description,
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
  ],
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
  options_page: 'src/pages/options/index.html',
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module',
  },
  action: {
    default_title: 'Click to open panel',
    default_panel: 'src/pages/sidepanel/index.html',
    default_icon: 'icon-34.png',
  },
  icons: {
    128: 'icon-128.png',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/content/index.js'],
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        'assets/img/*.png',
        'assets/js/*.js',
        'assets/css/*.css',
        'icon-128.png',
        'icon-34.png',
        'src/pages/tagLink/index.js',
      ],
      matches: ['<all_urls>'],
    },
  ],
};

export default manifest;

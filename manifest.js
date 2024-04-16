import packageJson from './package.json' assert { type: 'json' };

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
    default_popup: 'src/pages/popup/index.html',
    default_icon: 'icon-34.png',
  },
  // chrome_url_overrides: {
  //   newtab: 'src/pages/newtab/index.html',
  // },
  icons: {
    128: 'icon-128.png',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/content/index.js'],
      // KEY for cache invalidation
      // css: ['assets/css/contentStyle<KEY>.chunk.css'],
    },
  ],
  // devtools_page: 'src/pages/devtools/index.html',
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

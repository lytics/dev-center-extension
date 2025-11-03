/**
 * Centralized content/text strings for the entire application
 * This file contains all user-facing text content to ensure consistency
 * and make it easier to maintain, update, or internationalize content.
 */

export const appContent = {
  // DisabledState Component
  disabledState: {
    toggleLabel: 'Enable Extension',
    title: 'Enable extension to analyze domains',
    description:
      "Activate the extension using the toggle at the top left. The current page will reload and you'll instantly gain access to the full developer toolkit if the domain has the Lytics tag installed.",
    documentationText: "If you haven't yet installed the Lytics tag, please refer to our Lytics JavaScript SDK",
    documentationLinkText: 'documentation',
    documentationSuffix: '.',
  },

  // EnabledState Component
  enabledState: {
    title: 'Lytics SDK detected',
    buttonText: 'Analyze domains',
    pinnedUrlText: {
      prefix: 'Wait a minute! You are currently analyzing ',
      suffix: ". If you'd like to analyze this domain instead pin it below.",
      suffixAnotherTab: " in another tab. If you'd like to analyze this domain instead pin it below.",
    },
    documentationLinkText: 'documentation',
    noPinnedUrlText:
      "To analyze this domain, add it to your configured domains list. If you haven't yet installed the Lytics tag, please refer to our Lytics JavaScript SDK ",
    adBlockerNotice: 'Using an Ad Blocker? You may need to disable it temporarily to use this extension.',
    noSdkTitle: 'No Lytics SDK available for this domain',
    noSdkDescription:
      'The Lytics JavaScript SDK was not detected on this domain. To use this extension, you need to install the Lytics tag. Please refer to our',
    noSdkDocumentationText: 'Lytics JavaScript SDK documentation',
    noSdkSuffix: ' for installation instructions.',
  },

  // TopNavigation Component
  topNavigation: {
    enableLabel: 'Enable Extension',
    disableLabel: 'Disable Extension',
    helpAriaLabel: 'help',
    settingsAriaLabel: 'settings',
  },

  // Common/Shared Content
  common: {
    loading: 'Loading...',
    error: 'Something went wrong',
    retry: 'Retry',
    cancel: 'Cancel',
    save: 'Save',
    close: 'Close',
  },

  tagStatus: {
    title: 'Status',
    sdkInstalled: 'Lytics JavaScript SDK Installed',
    deprecatedVersion: 'You are using a deprecated version of the Lytics SDK',
    searchingForSdk: 'Searching for Lytics JavaScript SDK',
    notFoundMessage:
      "We have not been able to find the Lytics JavaScript SDK on this page. We'll continue checking but if you haven't yet installed the tag please refer to our",
    documentationLinkText: 'Lytics JavaScript SDK documentation',
    tableLabels: {
      accountId: 'Account ID',
      stream: 'Stream',
      cookieName: 'Cookie Name',
      profileKey: 'Profile Key',
      thirdPartyCookies: '3rd Party Cookies',
      enabled: 'Enabled',
      disabled: 'Disabled',
      defaultStream: 'default',
      lastActivity: 'Last Activity',
      Requestoday: 'Request Today',
      dataCollection: 'Data Collection',
      active: 'Active',
    },
  },

  // Future components can add their content here
  // Example:
  // emptyState: {
  //   title: 'No data available',
  //   description: 'There is no data to display at the moment.',
  // },

  // AutoDetectionIndicator Component
  autoDetection: {
    autoDetectedTitle: 'Auto-detected',
  },

  // Section Headers
  sectionHeaders: {
    debug: 'Debug',
    profile: 'Profile',
    personalization: 'Personalization',
  },

  // Tab Navigation Content
  profileTabs: {
    summary: 'Summary',
    details: 'Details',
  },

  debuggerTabs: {
    configuration: 'Configuration',
    activity: 'Activity',
  },

  personalizationTabs: {
    experiences: 'Active',
    legacyCampaigns: 'Legacy',
  },

  // Personalization Empty States
  personalizationEmptyStates: {
    noExperiences: 'No active Lytics managed experiences were found.',
    noLegacyCampaigns: 'Great news! No legacy campaigns detected',
    noLegacyCampaignsSubtext: "You're using the latest personalization framework",
  },

  // Lytics Request Type Descriptions
  lyticsRequestDescriptions: {
    'load-js-tag':
      'Loaded the core Lytics JavaScript SDK. Used for collecting data and surfacing the active visitors profile back to the browser.',
    'load-profile': 'Loaded the active visitors full profile from Lytics.',
    'collect-data': 'Collected data via jstag.send based on visitor activity.',
    'load-pathfora-tag': 'Loaded the Pathfora JavaScript SDK for advanced onsite personalization.',
    'load-pathfora-css':
      'Loaded the default Pathfora JavaScript SDK styles to ensure modals and inline widgets are styled correctly.',
    'load-experience-config': 'Loaded the experience configurations from the Lytics Experience Engine.',
    'load-campaign-config':
      'Loaded the legacy campaign configurations from Lytics. This feature is being deprecated. Reach out to support for additional guidance.',
  },

  // External Links
  externalLinks: {
    chromeExtensionDocs: 'https://docs.lytics.com/docs/chrome-extension',
  },

  // ProfileHeader Component
  profileHeader: {
    lyticsIdLabel: 'Lytics ID',
    lastUidLabel: 'Last _UID (Cookie)',
    completenessLabel: 'Profile Completeness',
    completeText: 'complete',
  },

  // AudienceMembership Component
  audienceMembership: {
    title: 'Audience Membership',
  },

  // Attributes Component
  attributes: {
    title: 'Attributes',
    description:
      'You may have more attributes available for personalization. Review documentation on how to configure which attributes are surfaced to the web.',
    learnMoreText: 'Learn more',
    learnMoreUrl: 'https://docs.lytics.com/docs/developer-attributes',
    learnMoreAriaLabel: 'Learn more about configuring attributes',
  },

  // BehaviorMetrics Component
  behaviorMetrics: {
    title: 'Behavior',
  },

  // Interests Component
  interests: {
    title: 'Interests',
    emptyMessage:
      'Interests are not currently shared for this account. You can share them to make them available in this tool.',
    learnMoreText: 'Learn more',
    learnMoreUrl: 'https://docs.lytics.com/docs/personalization-api#allowlist-fields-for-public-api',
    learnMoreAriaLabel: 'Learn more about sharing interests',
  },

  // ProfileMetadata Component
  profileMetadata: {
    lastUpdatedLabel: 'Profile Last Updated',
    lastAttributeLabel: 'Last Attribute',
  },
} as const;

// Type for accessing content with autocomplete
export type AppContent = typeof appContent;

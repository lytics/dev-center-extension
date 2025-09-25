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
    title: 'Configured domain not detected',
    buttonText: 'Configure domains',
    pinnedUrlText: {
      prefix: 'Wait a minute! You are currently analyzing ',
      suffix: ". If you'd like to analyze this domain instead pin it below.",
      suffixAnotherTab: " in another tab. If you'd like to analyze this domain instead pin it below.",
    },
    documentationLinkText: 'documentation',
    noPinnedUrlText:
      "To analyze this domain, add it to your configured domains list. If you haven't yet installed the Lytics tag, please refer to our Lytics JavaScript SDK ",
    adBlockerNotice: 'Using an Ad Blocker? You may need to disable it temporarily to use this extension.',
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
    },
  },

  // Future components can add their content here
  // Example:
  // emptyState: {
  //   title: 'No data available',
  //   description: 'There is no data to display at the moment.',
  // },
} as const;

// Type for accessing content with autocomplete
export type AppContent = typeof appContent;

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

  // Future components can add their content here
  // Example:
  // emptyState: {
  //   title: 'No data available',
  //   description: 'There is no data to display at the moment.',
  // },
} as const;

// Type for accessing content with autocomplete
export type AppContent = typeof appContent;

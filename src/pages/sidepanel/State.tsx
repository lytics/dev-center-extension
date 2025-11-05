import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { ExtensionState } from '@src/shared/storages/extensionDomainStorage';
import TopNavigation from '@root/src/pages/sidepanel/components/TopNavigation';
import { DisabledState } from '@root/src/pages/sidepanel/components/DisabledState';
import { EnabledState } from '@root/src/pages/sidepanel/components/EnabledState';
import useStorage from '@src/shared/hooks/useStorage';
import { useDisabledState } from '@root/src/pages/sidepanel/hooks/useDisabledState';
import { useCurrentTabState } from '@root/src/pages/sidepanel/hooks/useCurrentTabState';
import { appContent } from '@root/src/shared/content/appContent';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';
import { autoDetectedDomainsStore } from '@src/shared/storages/autoDetectedDomainsStorage';
import SidePanel from '@pages/sidepanel/SidePanel';

interface StateProps {}

const State: React.FC<React.PropsWithChildren<StateProps>> = () => {
  const extensionState = useStorage(extensionStateStorage);
  const { documentationUrl, handleDocClick } = useDisabledState();
  const { currentTabId, isPinned, domain, url, tagConfig, pinCurrentDomain } = useCurrentTabState();
  const [resetSidePanel, setResetSidePanel] = useState(Date.now());
  const [hasLyticsSDK, setHasLyticsSDK] = useState(false);

  // Check if Lytics SDK is available
  // Use two methods: tagConfig (current tab) and auto-detected domains (persistent)
  useEffect(() => {
    const checkSDKAvailability = async () => {
      // Method 1: Check if tagConfig has data (most reliable for current state)
      const hasTagConfig = tagConfig && Object.keys(tagConfig).length > 0;

      // Method 2: Check if domain is in auto-detected domains list
      let isAutoDetected = false;
      if (domain) {
        const detectedDomain = await autoDetectedDomainsStore.getDomain(domain);
        isAutoDetected = detectedDomain !== null;
      }

      // SDK is available if either method confirms it
      const sdkAvailable = hasTagConfig || isAutoDetected;
      setHasLyticsSDK(sdkAvailable);

      console.log('SDK Availability Check:', {
        domain,
        hasTagConfig,
        isAutoDetected,
        sdkAvailable,
        tagConfig,
      });
    };

    checkSDKAvailability();
  }, [domain, tagConfig]);

  // Create domainState for backwards compatibility with TopNavigation
  const domainState: ExtensionState = {
    activeTab: currentTabId || '',
    activeURL: url,
    pinnedTab: isPinned ? currentTabId || '' : '',
    pinnedURL: isPinned ? domain : '',
  };

  // ************************************************************************************
  // Action Handlers
  // ************************************************************************************
  const handlePin = async () => {
    setResetSidePanel(Date.now());
    await pinCurrentDomain();

    // Reload the current tab after pinning
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (tabs.length > 0) {
        chrome.tabs.reload(tabs[0].id);
      }
    });
  };

  const handleStateToggle = isActive => {
    setResetSidePanel(Date.now());
    extensionStateStorage.set(isActive);
    if (isActive) {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (tabs.length > 0) {
          chrome.tabs.reload(tabs[0].id);
        }
      });
    }
  };

  return (
    <Box width="100%" height="100vh" display="flex" overflow={'hidden'} flexDirection="column">
      <TopNavigation isEnabled={extensionState} onChange={handleStateToggle} domainState={domainState} />

      {extensionState ? (
        <Box>
          {isPinned ? (
            <>
              <SidePanel key={resetSidePanel} isEnabled={extensionState} />
            </>
          ) : (
            <EnabledState
              domainState={domainState}
              tabValid={true}
              onPin={handlePin}
              documentationUrl={documentationUrl}
              hasLyticsSDK={hasLyticsSDK}
            />
          )}
        </Box>
      ) : (
        <DisabledState
          documentationUrl={documentationUrl}
          onDocLinkClick={handleDocClick}
          toggleLabel={appContent.disabledState.toggleLabel}
          title={appContent.disabledState.title}
          description={appContent.disabledState.description}
          documentationText={appContent.disabledState.documentationText}
          documentationLinkText={appContent.disabledState.documentationLinkText}
          documentationSuffix={appContent.disabledState.documentationSuffix}
        />
      )}
    </Box>
  );
};

export default State;

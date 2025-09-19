import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { domainStore, ExtensionState } from '@src/shared/storages/extensionDomainStorage';
import TopNavigation from '@root/src/pages/sidepanel/components/TopNavigation';
import { DisabledState } from '@root/src/pages/sidepanel/components/DisabledState';
import { EnabledState } from '@root/src/pages/sidepanel/components/EnabledState';
import useStorage from '@src/shared/hooks/useStorage';
import { useDisabledState } from '@root/src/pages/sidepanel/hooks/useDisabledState';
import { appContent } from '@root/src/shared/content/appContent';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';
import SidePanel from '@pages/sidepanel/SidePanel';

interface StateProps {}

const State: React.FC<React.PropsWithChildren<StateProps>> = () => {
  const extensionState = useStorage(extensionStateStorage);
  const { documentationUrl, handleDocClick } = useDisabledState();
  const [resetSidePanel, setResetSidePanel] = useState(Date.now());
  const [isEnabled, setIsEnabled] = useState(extensionState);
  const [tabValid, setTabValid] = useState(false);
  const [urlValid, setURLValid] = useState(false);
  const [domainState, setDomainState] = useState<ExtensionState>({
    activeTab: '',
    activeURL: '',
    pinnedTab: '',
    pinnedURL: '',
  });

  // ************************************************************************************
  // Side Effects
  // ************************************************************************************
  useEffect(() => {
    chrome.tabs.onActivated.addListener(function (activeInfo) {
      chrome.tabs.get(activeInfo.tabId, function () {
        domainStore.evaluate().then((state: ExtensionState) => {
          setDomainState(state);
        });
      });
    });
  }, []);

  useEffect(() => {
    chrome.webNavigation.onCommitted.addListener(details => {
      if (details.frameId === 0) {
        domainStore.evaluate().then((state: ExtensionState) => {
          setDomainState(state);
        });
      }
    });
    return () => {
      // chrome.webNavigation.onCommitted.removeListener(onURLChange);
    };
  }, []);

  useEffect(() => {
    if (domainState.activeTab === domainState.pinnedTab) {
      setTabValid(true);
    } else {
      setTabValid(false);
    }

    if (domainState.pinnedURL && domainState.activeURL.includes(domainState.pinnedURL)) {
      setURLValid(true);
    } else {
      setURLValid(false);
    }
  }, [domainState]);

  useEffect(() => {
    domainStore.evaluate().then((state: ExtensionState) => {
      setDomainState(state);
    });
  }, []);

  // ************************************************************************************
  // Action Handlers
  // ************************************************************************************
  const handlePin = () => {
    setResetSidePanel(Date.now());
    domainStore.pin().then(() => {
      domainStore.evaluate().then((state: ExtensionState) => {
        setDomainState(state);
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
          if (tabs.length > 0) {
            chrome.tabs.reload(tabs[0].id);
          }
        });
      });
    });
  };

  const handleStateToggle = isActive => {
    setResetSidePanel(Date.now());
    setIsEnabled(isActive);
    extensionStateStorage.set(isActive);
    if (!isActive) {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (tabs.length > 0) {
          chrome.tabs.reload(tabs[0].id);
        }
      });
    }
  };

  return (
    <Box width="100%" height="100vh" display="flex" overflow={'hidden'} flexDirection="column">
      <TopNavigation isEnabled={isEnabled} onChange={handleStateToggle} />

      {isEnabled ? (
        <Box>
          {tabValid && urlValid ? (
            <>
              <SidePanel key={resetSidePanel} isEnabled={isEnabled} />
            </>
          ) : (
            <EnabledState
              domainState={domainState}
              tabValid={tabValid}
              onPin={handlePin}
              documentationUrl={documentationUrl}
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

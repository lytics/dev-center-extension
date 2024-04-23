import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { domainStore, ExtensionState } from '@src/shared/storages/extensionDomainStorage';
import TopNavigation from '@root/src/pages/sidepanel/components/TopNavigation';
import { WrongDomain } from '@root/src/pages/sidepanel/assets/svg/wrongDomainIcon';
import { DeveloperCenterIcon } from '@root/src/pages/sidepanel/assets/svg/developerCenterIcon';
import useStorage from '@src/shared/hooks/useStorage';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';
import SidePanel from '@pages/sidepanel/SidePanel';

interface StateProps {}

const State: React.FC<React.PropsWithChildren<StateProps>> = () => {
  const extensionState = useStorage(extensionStateStorage);
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
    <Box
      width="100%"
      height="100vh"
      display="flex"
      overflow={'hidden'}
      flexDirection="column"
      sx={{
        background: '#E9E8EE',
      }}>
      <TopNavigation isEnabled={isEnabled} onChange={handleStateToggle} />

      {isEnabled ? (
        <Box>
          {/* <Box p={1} bgcolor={'white'} fontSize={8}>
              Active Tab: {domainState.activeTab}
              <br />
              Active URL: {domainState.activeURL}
              <br />
              Pinned Tab: {domainState.pinnedTab}
              <br />
              Pinned URL: {domainState.pinnedURL}
              <br />
              Tab Valid: {tabValid ? 'true' : 'false'}
              <br />
              URL Valid: {urlValid ? 'true' : 'false'}
            </Box> */}

          {tabValid && urlValid ? (
            <>
              <SidePanel isEnabled={isEnabled} />
            </>
          ) : (
            <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'} p={5} spacing={1}>
              <WrongDomain />
              <Typography variant={'body1'} align={'center'} pb={2} maxWidth={'450px'}>
                {domainState.pinnedURL ? (
                  <>
                    Wait a minute! You are currently analyzing <strong>{domainState.pinnedURL}</strong>
                    {tabValid ? '' : ' in another tab'}. If you&apos;d like to analyze this domain instead pin it below.
                  </>
                ) : (
                  <>
                    You are not currently analyzing a domain. To get started, navigate to your preferred domain and pin
                    it below.
                  </>
                )}
              </Typography>
              <Button size={'small'} color={'secondary'} variant="outlined" onClick={handlePin}>
                Pin Domain
              </Button>
            </Stack>
          )}
        </Box>
      ) : (
        <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'} p={5} spacing={1}>
          <DeveloperCenterIcon />
          <Typography variant={'body1'} align={'center'}>
            To get started <b>activate the Lytics Developer Center extension</b> using the toggle at the top right. Upon
            doing so the current page will reload and you&apos;ll instantly gain access to the full developer toolkit.
          </Typography>
        </Stack>
      )}
    </Box>
  );
};

export default State;

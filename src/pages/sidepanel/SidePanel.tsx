import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import BottomNavigation from '@pages/popup/components/BottomNavigation';

// styles
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import { DeveloperCenterIcon } from '@pages/popup/assets/svg/developerCenterIcon';
import { WrongDomain } from '@pages/popup/assets/svg/wrongDomainIcon';
import '@pages/popup/Popup.css';

// storage
import useStorage from '@src/shared/hooks/useStorage';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';
import tagConfigStore from '@src/shared/storages/tagConfigStorage';
import entityStorage from '@src/shared/storages/entityStorage';
import { GetActiveTabURL } from '@src/shared/components/Browser';
import domainStore from '@src/shared/storages/extensionDomainStorage';
import { TagConfigModel, TagConfigPathforaCandidates } from '@root/src/shared/models/tagConfigModel';

// components
import Debugger from '@pages/popup/sections/Debugger';
import Profile from '@pages/popup/sections/Profile';
import Personalization from '@pages/popup/sections/Personalization';
import Configuration from '@pages/popup/sections/Configuration';
import TopNavigation from '@pages/popup/components/TopNavigation';
import { EmitLog } from '@src/shared/components/EmitLog';

const evaluateDomain = (url: string, allowDomainURL: string) => {
  if (allowDomainURL && url.includes(allowDomainURL)) {
    return true;
  }
  return false;
};

const SidePanel = () => {
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState('/');
  const [tagIsInstalled, setTagIsInstalled] = useState(false);
  const location = useLocation();
  const extensionState = useStorage(extensionStateStorage);
  const [isEnabled, setIsEnabled] = useState(extensionState);
  const [isLoading, setIsLoading] = useState(true);
  const [profileIsLoading, setProfileIsLoading] = useState(true);
  const [tagConfig, setTagConfig] = useState<TagConfigModel>({} as TagConfigModel);
  const [currentProfile, setCurrentProfile] = useState<any>({} as any);
  const [candidates, setCandidates] = useState<TagConfigPathforaCandidates>({} as TagConfigPathforaCandidates);
  const [allowDomain, setAllowDomain] = useState(false);
  const [allowDomainURL, setAllowDomainURL] = useState('');

  const handleChromeNavEvents = (details: any, isURLChange: boolean) => {
    if (details.frameId !== 0) {
      return;
    }

    GetActiveTabURL(details, isURLChange)
      .then((url: string) => {
        if (url) {
          setAllowDomain(evaluateDomain(url, allowDomainURL));
        }
      })
      .catch(error => {
        console.error('Error getting active tab URL', error);
        // If an error occurs, do nothing
      });
  };

  chrome.webNavigation.onCompleted.addListener(details => {
    handleChromeNavEvents(details, true);
  });
  chrome.tabs.onActivated.addListener(details => {
    handleChromeNavEvents(details, false);
  });

  useEffect(() => {
    if (allowDomainURL) {
      getCurrentTabURL()
        .then((url: string) => {
          setAllowDomain(evaluateDomain(url, allowDomainURL));
        })
        .catch(error => {
          // If an error occurs, do nothing
          console.error('Error getting active tab URL', error);
        });
    }
  }, [allowDomainURL]);

  const getCurrentTabURL = () => {
    return new Promise((resolve, reject) => {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (tabs && tabs[0] && tabs[0].url) {
          resolve(tabs[0].url);
        } else {
          reject(new Error("Unable to get the current tab's URL"));
        }
      });
    });
  };

  useEffect(() => {
    domainStore.get().then(domain => {
      if (typeof domain === 'string' && domain.trim() !== '') {
        setAllowDomainURL(domain);
      }
    });
  }, []);

  const handleDomainStore = () => {
    domainStore.get().then((domain: string) => {
      if (domain !== '') {
        setAllowDomainURL(domain);
      }
    });
  };
  domainStore.subscribe(handleDomainStore);

  const handleStickyDomainSet = () => {
    setTagIsInstalled(false);
    setProfileIsLoading(true);
    setTagConfig({} as TagConfigModel);
    setCurrentProfile({} as any);
    setCandidates({} as TagConfigPathforaCandidates);

    chrome.runtime.sendMessage({ action: 'setStickyDomain' }, () => {
      if (chrome.runtime.lastError) {
        // console.error('Error:', chrome.runtime.lastError.message);
      }
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (tabs.length > 0) {
          const tab = tabs[0];
          chrome.tabs.reload(tab.id);
        }
      });
    });
  };

  // Define a callback function to handle storage changes
  function handleStorageChange(changes, areaName) {
    if (areaName === 'local') {
      for (const key in changes) {
        if (key === 'tagConfigStorage') {
          const pendingConfig = changes[key].newValue;
          // console.log('tagconfig storage change stuff', pendingConfig);
          setTagConfig(JSON.parse(pendingConfig) as TagConfigModel);
          setTagIsInstalled(Object.keys(pendingConfig).length > 0);
          EmitLog({ name: 'sidepanel', payload: { msg: 'Tag config storage changed', value: pendingConfig } });
          try {
            const data = JSON.parse(pendingConfig);
            setTagConfig(data);
            setTagIsInstalled(Object.keys(data).length > 0);
            EmitLog({ name: 'sidepanel', payload: { msg: 'Tag config storage changed', value: pendingConfig } });
          } catch (error) {
            EmitLog({ name: 'sidepanel', payload: { msg: 'Error parsing tag config.', error: error } });
          }
        }
        if (key === 'entityStorage') {
          const newValue = changes[key].newValue;
          EmitLog({ name: 'sidepanel', payload: { msg: 'Entity storage changed', value: newValue } });
          setCurrentProfile(JSON.parse(newValue) as any);
        }
      }
    }
  }

  chrome.storage.onChanged.addListener(handleStorageChange);

  useEffect(() => {
    const fetchData = async () => {
      setCurrentProfile({ test: 'test' });
    };

    fetchData();
  }, []);

  useEffect(() => {
    setCandidates(tagConfig?.pathfora?.publish?.candidates);
  }, [tagConfig]);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const fetchData = async () => {
      try {
        const data = await tagConfigStore.get();
        setIsLoading(false);
        if (Object.keys(data).length === 0) {
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'getConfig' }, response => {
              if (chrome.runtime.lastError) {
                // console.error('Error:', chrome.runtime.lastError.message);
              } else if (response) {
                EmitLog({ name: 'sidepanel', payload: { msg: 'Config response.', data: response } });
              }
            });
          });
          setTimeout(fetchData, 1000);
        } else {
          const pendingConfig = JSON.parse(data) as TagConfigModel;
          setTagConfig(pendingConfig);
          setTagIsInstalled(Object.keys(pendingConfig).length > 0);
        }
      } catch (error) {
        EmitLog({ name: 'sidepanel', payload: { msg: 'Error fetching data.', error: error } });
      }
    };

    fetchData();
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const fetchData = async () => {
      setProfileIsLoading(true);
      try {
        const data = await entityStorage.get();
        if (!data) {
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'getEntity' }, response => {
              if (chrome.runtime.lastError) {
                // console.error('Error:', chrome.runtime.lastError.message);
              } else if (response) {
                EmitLog({ name: 'sidepanel', payload: { msg: 'Entity response.', data: response } });
              }
            });
          });
          setTimeout(fetchData, 1000);
        } else {
          setCurrentProfile(JSON.parse(data) as any);
          setProfileIsLoading(false);
        }
      } catch (error) {
        EmitLog({ name: 'sidepanel', payload: { msg: 'Error fetching data.', data: error } });
      }
    };

    fetchData();
  }, [isEnabled]);

  useEffect(() => {
    if (location.pathname === '/src/pages/sidepanel/index.html') {
      setActivePath('/');
      return;
    }
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleStateToggle = isActive => {
    setIsEnabled(isActive);
    extensionStateStorage.set(isActive);
  };

  const handleNavigation = path => {
    setActivePath(path);
    navigate(path);
  };

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      // overflow={'hidden'}
      flexDirection="column"
      sx={{
        background: '#E9E8EE',
      }}>
      <TopNavigation isEnabled={isEnabled} onChange={handleStateToggle} />

      {isEnabled ? (
        <>
          {allowDomain ? (
            <>
              {isLoading ? (
                <Box width={'100%'} justifyContent={'center'} alignItems={'center'}>
                  <CircularProgress color="secondary" />
                </Box>
              ) : (
                <>
                  <Box
                    minHeight={`calc(100vh - 56px)`}
                    justifyContent={'center'}
                    alignItems={'flex-start'}
                    display="flex"
                    flexDirection="column">
                    <Routes>
                      <Route path="/settings" element={<Configuration />} />
                      <Route
                        path="/profile"
                        element={<Profile profileIsLoading={profileIsLoading} profile={currentProfile} />}
                      />
                      <Route path="/personalization" element={<Personalization candidates={candidates} />} />
                      <Route path="*" element={<Debugger tagIsInstalled={tagIsInstalled} tagConfig={tagConfig} />} />
                    </Routes>
                  </Box>
                  <BottomNavigation
                    value={activePath}
                    tagIsInstalled={tagIsInstalled}
                    onChange={newValue => handleNavigation(newValue)}
                  />
                </>
              )}
            </>
          ) : (
            <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'} p={5} spacing={1}>
              <WrongDomain />
              <Typography variant={'body1'} align={'center'} pb={2} maxWidth={'450px'}>
                {allowDomainURL ? (
                  <>
                    Wait a minute! You are currently analyzing <strong>{allowDomainURL}</strong>. If you&apos;d like to
                    analyze this domain instead simple pin it below.
                  </>
                ) : (
                  <>
                    You are not currently analyzing a domain. To get started, navigate to your preferred domain and pin
                    it below.
                  </>
                )}
              </Typography>
              <Button size={'small'} color={'secondary'} variant="outlined" onClick={handleStickyDomainSet}>
                Pin Domain
              </Button>
            </Stack>
          )}
        </>
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

export default SidePanel;

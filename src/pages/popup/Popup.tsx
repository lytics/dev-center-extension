// core
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

// mui
import { Box, CircularProgress, Stack, Typography } from '@mui/material';

// styles
import '@pages/popup/Popup.css';

// components
import Debugger from '@pages/popup/sections/Debugger';
import Profile from '@pages/popup/sections/Profile';
import Personalization from '@pages/popup/sections/Personalization';
import Configuration from '@pages/popup/sections/Configuration';
import TopNavigation from '@pages/popup/components/TopNavigation';
import BottomNavigation from '@pages/popup/components/BottomNavigation';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';
import useStorage from '@src/shared/hooks/useStorage';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';
import tagConfigStore from '@src/shared/storages/tagConfigStorage';
import entityStorage from '@src/shared/storages/entityStorage';

import { DeveloperCenterIcon } from '@pages/popup/assets/svg/developerCenterIcon';

const Popup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const extensionState = useStorage(extensionStateStorage);
  const [isEnabled, setIsEnabled] = useState(extensionState);
  const [tagIsInstalled, setTagIsInstalled] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const [isLoading, setIsLoading] = useState(true);
  const [profileIsLoading, setProfileIsLoading] = useState(true);
  const [tagConfig, setTagConfig] = useState<TagConfigModel>({} as TagConfigModel);
  const [currentProfile, setCurrentProfile] = useState<any>({} as any);


  // Define a callback function to handle storage changes
  function handleStorageChange(changes, areaName) {
    if (areaName === 'local') {
      for (const key in changes) {
        if (key === 'tagConfig') {
          const newValue = changes[key].newValue;
          console.log(`Tag config storage changed:`, newValue);
        }
      }
    }
  }
  chrome.storage.onChanged.addListener(handleStorageChange);

  useEffect(() => {
    const fetchData = async () => {
      setCurrentProfile({"test":"test"})
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const fetchData = async () => {
      try {
        const data = await tagConfigStore.get();
        setIsLoading(false);
        if (!data) {
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "getConfig"}, function(response) { console.log('response', response); });  
          });
          setTimeout(fetchData, 1000);
        } else {
          setTagConfig(JSON.parse(data) as TagConfigModel);
          setTagIsInstalled(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
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
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "getEntity"}, function(response) { console.log('response', response); });  
          });
          setTimeout(fetchData, 1000);
        } else {
          setCurrentProfile(JSON.parse(data) as any);
          setProfileIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isEnabled]);

  useEffect(() => {
    if (location.pathname === '/src/pages/popup/index.html') {
      setActivePath('/');
      return;
    }
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleNavigation = (newValue) => {
    setActivePath(newValue);
    navigate(newValue);
  };

  const handleStateToggle = (isActive) => {
    setIsEnabled(isActive);
    extensionStateStorage.set(isActive);
  };


  return (
    <Box
      width="600px"
      height="500px"
      display="flex"
      flexDirection="column"
      sx={{
        background: '#E9E8EE',
      }}>

      <TopNavigation isEnabled={isEnabled} onChange={handleStateToggle} />

      {isEnabled ? (
        <>
          {isLoading ? (
            <>
              <Box flex={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <CircularProgress color="secondary" />
              </Box>
            </>
          ) : (
            <>
              <Box flex={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Routes>
                  <Route path="/settings" element={<Configuration />} />
                  <Route path="/profile" element={<Profile profileIsLoading={profileIsLoading} profile={currentProfile} />} />
                  <Route path="/personalization" element={<Personalization />} />
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

export default Popup;

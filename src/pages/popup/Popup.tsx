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
import { TagConfigModel } from '@root/src/pages/popup/models/tagConfigModel';
import useStorage from '@src/shared/hooks/useStorage';
import extensionStateStorage from '@src/shared/storages/extensionStateStorage';
import { DeveloperCenterIcon } from '@pages/popup/assets/svg/developerCenterIcon';
// import SampleConfig from '@pages/popup/assets/data/sampleConfig.json';

const Popup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const extensionState = useStorage(extensionStateStorage);
  const [isEnabled, setIsEnabled] = useState(extensionState);
  const [activePath, setActivePath] = useState('/');
  const [isLoading, setIsLoading] = useState(true);
  const [tagIsInstalled, setTagIsInstalled] = useState(false);
  const [tagConfig, setTagConfig] = useState<TagConfigModel>({} as TagConfigModel);

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

  // temp
  useEffect(() => {
    if (!isEnabled) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) return;

    chrome.storage.local.get(['tagConfig'], function (result) {
      const storedConfig = JSON.parse(result.tagConfig);
      setTagConfig(storedConfig);
      setTagIsInstalled(true);
    });
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
    
    // const port = chrome.tabs.connect({name: "knockknock"});
    // port.postMessage({joke: "Knock knock"});
    // port.onMessage.addListener(function(msg) {
    //   if (msg.question === "Who's there?")
    //     port.postMessage({answer: "Madame"});
    //   else if (msg.question === "Madame who?")
    //     port.postMessage({answer: "Madame... Bovary"});
    // });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) { console.log(response); });  
    });
  };


  return (
    <Box
      width="500px"
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
                  <Route path="/profile" element={<Profile />} />
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

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
import SampleConfig from '@pages/popup/assets/data/sampleConfig.json';
import { DeveloperCenterIcon } from '@pages/popup/assets/svg/developerCenterIcon';

const Popup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const [isLoading, setIsLoading] = useState(true);
  const [tagIsInstalled, setTagIsInstalled] = useState(false);
  const [tagConfig, setTagConfig] = useState<TagConfigModel>({} as TagConfigModel);

  // temp
  useEffect(() => {
    if (!isEnabled) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) return;

    const timer = setTimeout(() => {
      setTagConfig(SampleConfig);
      setTagIsInstalled(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isEnabled]);

  // helper to ensure correct tab is loaded initially
  useEffect(() => {
    if (location.pathname === '/src/pages/popup/index.html') {
      setActivePath('/');
      return;
    }

    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleNavigation = newValue => {
    setActivePath(newValue);
    navigate(newValue);
  };

  return (
    <Box
      width="500px"
      height="450px"
      display="flex"
      flexDirection="column"
      sx={{
        background: '#E9E8EE',
      }}>
      <TopNavigation onChange={setIsEnabled} />

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

// import logo from '@assets/img/logo.svg';
// import useStorage from '@src/shared/hooks/useStorage';
// import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
// import withSuspense from '@src/shared/hoc/withSuspense';
// import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';

import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Debugger from '@pages/popup/sections/Debugger';
import Profile from '@pages/popup/sections/Profile';
import Personalization from '@pages/popup/sections/Personalization';

import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Plumbing, Person, Brush } from '@mui/icons-material';
import '@pages/popup/Popup.css';

const Popup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [lyticsIsInstalled, setLyticsIsInstalled] = useState(false);
  const location = useLocation(); // Use useLocation
  const [value, setValue] = useState('/');
  // const theme = useStorage(exampleThemeStorage);

  useEffect(() => {
    if (location.pathname === '/src/pages/popup/index.html') {
      setValue('/');
      return;
    }

    setValue(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLyticsIsInstalled(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNavigation = (newValue) => {
    setValue(newValue);
    navigate(newValue);
  };
  // tag install status
    // is installed
    // what version
  // profile explorer
  // experience debugger
  return (
    <Box
      // className={"App"}  
      width="400px"
      height="400px"
      display="flex"
      flexDirection="column"
      sx={{
        background: "#E9E8EE"
      }}
    >
      <Box
        flex={1}
      >
        <Box>
          {value}
        </Box>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/personalization" element={<Personalization />} />
          <Route path="*" element={<Debugger />} />
        </Routes>
        {/* <Stack
          width="100%"
          height="100%"
          justifyContent={"center"}
          alignItems={"center"}
        >
          {isLoading ? (
            <Box textAlign="center">
              <CircularProgress />
            </Box>
          ) : (
            <Box textAlign="center">
              {!lyticsIsInstalled ? (
                <Box>
                  Lytics Not Detected. <br/>
                  Checking again in 5 seconds.
                </Box>
              ) : (
                <Stack>
                  <Box>
                    Lytics Detected
                  </Box>
                  <Box>
                    Version 3.0.0
                  </Box>
                </Stack>
              )}
            </Box>
          )}
        </Stack> */}
      </Box>
      <BottomNavigation 
        showLabels
        value={value}
        onChange={(event, newValue) => handleNavigation(newValue)}
      >
        <BottomNavigationAction 
          label="Debugger"
          value="/"
          icon={<Plumbing />} 
        />
        <BottomNavigationAction 
          label="Profile" 
          value="/profile"
          icon={<Person />} 
        />
        <BottomNavigationAction 
          label="Personalization" 
          value="/personalization"
          icon={<Brush />} 
        />
      </BottomNavigation>
    </Box>   
    );
};

export default Popup;

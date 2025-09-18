import { useCallback, useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import BottomNavigation from '@root/src/pages/sidepanel/components/BottomNavigation';

// styles
import { Box, CircularProgress } from '@mui/material';
import '@pages/sidepanel/SidePanel.css';

// storage
import tagConfigStore from '@src/shared/storages/tagConfigStorage';
import entityStorage from '@src/shared/storages/entityStorage';
import { TagConfigModel, TagConfigPathforaCandidates } from '@root/src/shared/models/tagConfigModel';

// components
import Debugger from '@root/src/pages/sidepanel/sections/Debugger';
import Profile from '@root/src/pages/sidepanel/sections/Profile';
import Personalization from '@root/src/pages/sidepanel/sections/Personalization';
import Configuration from '@root/src/pages/sidepanel/sections/Configuration';
import { EmitLog } from '@src/shared/components/EmitLog';

interface SidePanelProps {
  key: any;
  isEnabled: boolean;
}

const SidePanel: React.FC<SidePanelProps> = ({ key, isEnabled }) => {
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState('/');
  const [tagIsInstalled, setTagIsInstalled] = useState(false);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [profileIsLoading, setProfileIsLoading] = useState(true);
  const [tagConfig, setTagConfig] = useState<TagConfigModel>({} as TagConfigModel);
  const [currentProfile, setCurrentProfile] = useState<any>({} as any);
  const [candidates, setCandidates] = useState<TagConfigPathforaCandidates>({} as TagConfigPathforaCandidates);

  // Tab state
  const [debugTab, setDebugTab] = useState(0);
  const [profileTab, setProfileTab] = useState(0);
  const [personalizationTab, setPersonalizationTab] = useState(0);

  const safeJSON = (jsonString: string, details: string): any | null => {
    try {
      const parsedJSON = JSON.parse(jsonString);
      return parsedJSON;
    } catch (error) {
      console.error('Error parsing JSON:', details, error);
      return null;
    }
  };

  // Define a callback function to handle storage changes
  function handleStorageChange(changes, areaName) {
    if (areaName === 'local') {
      for (const key in changes) {
        if (key === 'tagConfigStorage') {
          if (changes[key].newValue === undefined || changes[key].newValue === null) {
            // setRefreshTimestamp(Date.now());
            return;
          }

          const safeConfig = safeJSON(changes[key].newValue, 'tag config storage change');
          if (!safeConfig) {
            EmitLog({ name: 'sidepanel', payload: { msg: 'Error parsing tag config.', error: 'Invalid JSON' } });
            return;
          }
          setTagConfig(safeConfig);
          setTagIsInstalled(Object.keys(safeConfig).length > 0);
          EmitLog({ name: 'sidepanel', payload: { msg: 'Tag config storage changed', value: safeConfig } });
        }

        if (key === 'entityStorage') {
          if (changes[key].newValue === undefined || changes[key].newValue === null) {
            // setRefreshTimestamp(Date.now());
            return;
          }

          const safeProfile = safeJSON(changes[key].newValue, 'entity storage change');
          if (!safeProfile) {
            EmitLog({ name: 'sidepanel', payload: { msg: 'Error parsing tag config.', error: 'Invalid JSON' } });
            return;
          }
          setCurrentProfile(safeProfile);
          EmitLog({ name: 'sidepanel', payload: { msg: 'Entity storage changed', value: safeProfile } });
        }
      }
    }
  }
  chrome.storage.onChanged.addListener(handleStorageChange);

  useEffect(() => {
    EmitLog({ name: 'sidepanel', payload: { msg: 'SidePanel reset.' } });
  }, [key]);
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
          const pendingConfig = safeJSON(data, 'tag config fetch');
          if (!pendingConfig) {
            EmitLog({
              name: 'sidepanel',
              payload: { msg: 'Error parsing pending tag config.', error: 'Invalid JSON' },
            });
            return;
          }
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
          const safeData = safeJSON(data, 'profile fetch');
          if (!safeData) {
            EmitLog({
              name: 'sidepanel',
              payload: { msg: 'Error parsing pending entity.', error: 'Invalid JSON' },
            });
            return;
          }
          setCurrentProfile(safeData);
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

  const handleNavigation = path => {
    setActivePath(path);
    navigate(path);
  };

  return (
    <>
      {isLoading ? (
        <Box width={'100%'} display="flex" justifyContent={'center'} alignItems={'center'} pt={5}>
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
                element={
                  <Profile
                    profileIsLoading={profileIsLoading}
                    profile={currentProfile}
                    getter={profileTab}
                    setter={setProfileTab}
                    tagConfig={tagConfig}
                  />
                }
              />
              <Route
                path="/personalization"
                element={
                  <Personalization candidates={candidates} getter={personalizationTab} setter={setPersonalizationTab} />
                }
              />
              <Route
                path="*"
                element={
                  <Debugger
                    tagIsInstalled={tagIsInstalled}
                    tagConfig={tagConfig}
                    getter={debugTab}
                    setter={setDebugTab}
                  />
                }
              />
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
  );
};

export default SidePanel;

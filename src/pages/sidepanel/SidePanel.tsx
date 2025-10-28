import '@pages/sidepanel/SidePanel.css';

import { useEffect, useMemo, useState } from 'react';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Box, CircularProgress } from '@mui/material';
import BottomNavigation from '@root/src/pages/sidepanel/components/BottomNavigation';
import { useCurrentTabState } from '@root/src/pages/sidepanel/hooks/useCurrentTabState';
import Configuration from '@root/src/pages/sidepanel/sections/Configuration';
import Debugger from '@root/src/pages/sidepanel/sections/Debugger';
import Personalization from '@root/src/pages/sidepanel/sections/Personalization';
import Profile from '@root/src/pages/sidepanel/sections/Profile';
import { hasProfile, hasTagConfig } from '@root/src/pages/sidepanel/utils/domainStateHelpers';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';
import { EmitLog } from '@src/shared/components/EmitLog';

import TagStatus from './sections/TagStatus';

interface SidePanelProps {
  key: any;
  isEnabled: boolean;
}

const SidePanel: React.FC<SidePanelProps> = ({ key, isEnabled }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { tagConfig: currentTabTagConfig, profile: currentTabProfile, domainState } = useCurrentTabState();

  const [isLoading, setIsLoading] = useState(true);
  const [profileIsLoading, setProfileIsLoading] = useState(false);
  const [debugTab, setDebugTab] = useState(0);
  const [profileTab, setProfileTab] = useState(0);
  const [personalizationTab, setPersonalizationTab] = useState(0);

  const tagConfig = currentTabTagConfig as TagConfigModel;
  const currentProfile = currentTabProfile;
  const tagIsInstalled = hasTagConfig(domainState);
  const candidates = useMemo(() => tagConfig?.pathfora?.publish?.candidates || {}, [tagConfig]);

  const activePath = useMemo(() => {
    return location.pathname === '/src/pages/sidepanel/index.html' ? '/' : location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    EmitLog({ name: 'sidepanel', payload: { msg: 'SidePanel reset.' } });

    if (hasTagConfig(domainState)) {
      setIsLoading(false);
      EmitLog({
        name: 'sidepanel',
        payload: { msg: 'Tag config updated from per-tab storage', config: currentTabTagConfig },
      });
    } else if (isEnabled) {
      setIsLoading(true);
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (tabs[0]?.id) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'getConfig' }, response => {
            setIsLoading(false);
            if (chrome.runtime.lastError) {
              EmitLog({
                name: 'sidepanel',
                payload: { msg: 'No response from content script', error: chrome.runtime.lastError.message },
              });
            } else if (response) {
              EmitLog({ name: 'sidepanel', payload: { msg: 'Config response received', data: response } });
            }
          });
        }
      });
    }

    if (hasProfile(domainState)) {
      setProfileIsLoading(false);
      EmitLog({
        name: 'sidepanel',
        payload: { msg: 'Profile updated from per-tab storage' },
      });
    } else if (isEnabled) {
      setProfileIsLoading(true);
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (tabs[0]?.id) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'getEntity' }, response => {
            setProfileIsLoading(false);
            if (!chrome.runtime.lastError && response) {
              EmitLog({ name: 'sidepanel', payload: { msg: 'Entity response received', data: response } });
            }
          });
        }
      });
    }
  }, [key, currentTabTagConfig, currentTabProfile, domainState, isEnabled]);

  const handleNavigation = (path: string) => {
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
          <Box justifyContent={'center'} alignItems={'flex-start'} display="flex" flexDirection="column">
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
                path="/debug"
                element={
                  <Debugger
                    tagIsInstalled={tagIsInstalled}
                    tagConfig={tagConfig}
                    getter={debugTab}
                    setter={setDebugTab}
                  />
                }
              />
              <Route path="*" element={<TagStatus tagIsInstalled={tagIsInstalled} tagConfig={tagConfig} />} />
            </Routes>
          </Box>
          <BottomNavigation value={activePath} onChange={newValue => handleNavigation(newValue)} />
        </>
      )}
    </>
  );
};

export default SidePanel;

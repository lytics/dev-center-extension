import React, { useState } from 'react';
import { Box, Stack, Tab, Tabs, CircularProgress } from '@mui/material';
import CustomTabPanel from '@src/pages/popup/components/CustomTabPanel';
import ProfileDetail from '@src/pages/popup/sections/ProfileDetail';
import ProfileSummary from '@src/pages/popup/sections/ProfileSummary';

interface ProfileTabProps {
  profile: any;
  profileIsLoading: boolean;
}

const Profile: React.FC<ProfileTabProps> = ({ profileIsLoading, profile }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSetTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      m={1}
      sx={{
        width: 'calc(100% - 20px)',
        height: 'calc(100% - 20px)',
      }}>
      <Stack>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
          }}>
          <Tabs value={activeTab} onChange={handleSetTab} textColor="secondary" indicatorColor="secondary">
            <Tab id="summary" label="Summary" />
            <Tab id="raw" disabled={profileIsLoading} label="Details" />
          </Tabs>
        </Box>
        <CustomTabPanel value={activeTab} index={0}>
          {profileIsLoading ? (
            <Box m={2}>
              <CircularProgress color="secondary" />
            </Box>
          ) : (
            <ProfileSummary profile={profile} />
          )}
        </CustomTabPanel>
        <CustomTabPanel value={activeTab} index={1}>
          <ProfileDetail profile={profile} />
        </CustomTabPanel>
      </Stack>
    </Box>
  );
};

export default Profile;
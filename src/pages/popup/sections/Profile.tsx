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
    <Stack alignItems={'flex-start'} justifyContent={'center'} height={'100%'} width={'100%'} overflow={'hidden'}>
      <Box borderBottom={1} borderColor={'divider'} width={"100%"}>
        <Tabs value={activeTab} onChange={handleSetTab} textColor="secondary" indicatorColor="secondary">
          <Tab id="summary" label="Summary" />
          <Tab id="raw" disabled={profileIsLoading} label="Details" />
        </Tabs>
      </Box>
      <Box
        flexGrow={1}
        width={"100%"}
        overflow={"auto"}
      >
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
      </Box>
    </Stack>
  );
};

export default Profile;

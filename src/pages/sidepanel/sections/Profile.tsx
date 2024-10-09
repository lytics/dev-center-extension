import React, { Dispatch, SetStateAction } from 'react';
import { Box, Stack, Tab, Tabs, CircularProgress } from '@mui/material';
import CustomTabPanel from '@root/src/pages/sidepanel/components/CustomTabPanel';
import ProfileDetail from '@root/src/pages/sidepanel/sections/ProfileDetail';
import ProfileSummary from '@root/src/pages/sidepanel/sections/ProfileSummary';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';

interface ProfileTabProps {
  profile: any;
  profileIsLoading: boolean;
  getter: number;
  setter: Dispatch<SetStateAction<number>>;
  tagConfig: TagConfigModel;
}

const Profile: React.FC<ProfileTabProps> = ({ profileIsLoading, profile, getter, setter, tagConfig }) => {
  const handleSetTab = (event, newValue) => {
    setter(newValue);
  };

  return (
    <Stack alignItems={'flex-start'} justifyContent={'center'} height={'100vh'} width={'100%'} overflow={'hidden'}>
      <Box borderBottom={1} borderColor={'divider'} width={'100%'}>
        <Tabs value={getter} onChange={handleSetTab} textColor="secondary" indicatorColor="secondary">
          <Tab id="summary" label="Summary" />
          <Tab id="raw" disabled={profileIsLoading} label="Details" />
        </Tabs>
      </Box>
      <Box flexGrow={1} width={'100%'} overflow={'auto'}>
        <CustomTabPanel value={getter} index={0}>
          {profileIsLoading ? (
            <Box m={2}>
              <CircularProgress color="secondary" />
            </Box>
          ) : (
            <ProfileSummary profile={profile} tagConfig={tagConfig} />
          )}
        </CustomTabPanel>
        <CustomTabPanel value={getter} index={1}>
          <ProfileDetail profile={profile} />
        </CustomTabPanel>
      </Box>
    </Stack>
  );
};

export default Profile;

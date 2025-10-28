import React, { Dispatch, SetStateAction } from 'react';
import { Box, Stack, CircularProgress } from '@mui/material';
import CustomTabPanel from '@root/src/pages/sidepanel/components/CustomTabPanel';
import { TabNavigation } from '@root/src/pages/sidepanel/components/TabNavigation';
import ProfileDetail from '@root/src/pages/sidepanel/sections/ProfileDetail';
import ProfileSummary from '@root/src/pages/sidepanel/sections/ProfileSummary';
import { appContent } from '@root/src/shared/content/appContent';

interface ProfileTabProps {
  profile: any;
  profileIsLoading: boolean;
  getter: number;
  setter: Dispatch<SetStateAction<number>>;
}

const Profile: React.FC<ProfileTabProps> = ({ profileIsLoading, profile, getter, setter }) => {
  const handleSetTab = (event: React.SyntheticEvent, newValue: number) => {
    setter(newValue);
  };

  const tabs = [
    { id: 'summary', label: appContent.profileTabs.summary, disabled: false },
    { id: 'details', label: appContent.profileTabs.details, disabled: profileIsLoading },
  ];

  return (
    <Stack alignItems={'flex-start'} justifyContent={'flex-start'} height={'100%'} width={'100%'}>
      <TabNavigation tabs={tabs} value={getter} onChange={handleSetTab} />
      <Box flexGrow={1} width={'100%'} overflow={'auto'} sx={{ height: 0 }}>
        <CustomTabPanel value={getter} index={0}>
          {profileIsLoading ? (
            <Box m={2}>
              <CircularProgress color="secondary" />
            </Box>
          ) : (
            <ProfileSummary profile={profile} />
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

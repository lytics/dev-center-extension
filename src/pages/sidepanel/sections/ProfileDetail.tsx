import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import TreeDisplay from '@root/src/pages/sidepanel/components/TreeDisplay';

interface ProfileDetailTabProps {
  profile: any;
}

const StyledPanel = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#272728', // Dark background (appColors.common.darkPanel)
  borderTopLeftRadius: theme.spacing(1), // 8px - rounded top-left corner
  borderTopRightRadius: theme.spacing(1), // 8px - rounded top-right corner
  borderBottomLeftRadius: 0, // Sharp bottom-left corner
  borderBottomRightRadius: 0, // Sharp bottom-right corner
  padding: '0.625rem', // 10px inner padding
  cursor: 'default',
  transition: 'none',
  '&:hover': {
    boxShadow: 'none',
    transform: 'none',
  },
}));

const ProfileDetail: React.FC<ProfileDetailTabProps> = ({ profile }) => {
  return (
    <StyledPanel>
      <TreeDisplay data={profile?.data} collapsed={2} />
    </StyledPanel>
  );
};

export default ProfileDetail;

import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FileDownload } from '@mui/icons-material';
import { appColors } from '@root/src/theme/palette';
import TreeDisplay from '@root/src/pages/sidepanel/components/TreeDisplay';

interface ProfileDetailTabProps {
  profile: any;
}

const StyledPanel = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: appColors.common.darkPanel,
  borderRadius: theme.spacing(1), // 8px all corners
  padding: '0.625rem',
  cursor: 'default',
  transition: 'none',
  '&:hover': {
    boxShadow: 'none',
    transform: 'none',
  },
}));

const ExportButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1.5),
  backgroundColor: appColors.common.white,
  color: appColors.neutral[900],
  fontWeight: appColors.common.fontWeight.semiBold,
  fontSize: appColors.common.fontSize.base,
  textTransform: 'none',
  borderRadius: theme.spacing(1),
  border: `1px solid ${appColors.neutral[500]}`,
  '&:hover': {
    backgroundColor: appColors.neutral[50],
  },
}));

const ProfileDetail: React.FC<ProfileDetailTabProps> = ({ profile }) => {
  const handleExport = () => {
    const dataStr = JSON.stringify(profile?.data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `profile-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Stack spacing={2} width="100%">
      <StyledPanel>
        <TreeDisplay data={profile?.data} collapsed={2} />
      </StyledPanel>
      <ExportButton startIcon={<FileDownload />} onClick={handleExport}>
        Export Profile JSON
      </ExportButton>
    </Stack>
  );
};

export default ProfileDetail;

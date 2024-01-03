import React from 'react';
import { Box } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ProfileDetailTabProps {
  profile: any;
}

const ProfileDetail: React.FC<ProfileDetailTabProps> = ({ profile }) => {
  const formatRawData = (data: any) => {
    return JSON.stringify(data, null, 2);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        fontSize: '12px',
        height: '280px',
        overflow: 'auto',
      }}
    >
      <SyntaxHighlighter language="json" style={{ ...materialDark }}>
        {formatRawData(profile)}
      </SyntaxHighlighter>
    </Box>
  );
};

export default ProfileDetail;
import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ProfileTabProps {
  profile: any;
  profileIsLoading: boolean;
}

const Profile: React.FC<ProfileTabProps> = ({ profileIsLoading, profile }) => {
  useEffect(() => {
    console.log('profile', profile);
  }, [profile]);

  const jsonString = JSON.stringify(profile, null, 2);

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        fontSize: "12px",
        height: "350px",
        overflow: 'auto', 
      }}
    >
      {profileIsLoading ? (
        <Box m={2}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Box m={2}>
          <SyntaxHighlighter language="json" style={{ ...materialDark }}>
            {jsonString}
          </SyntaxHighlighter>
        </Box>
      )}
    </Box>
  );
};

export default Profile;

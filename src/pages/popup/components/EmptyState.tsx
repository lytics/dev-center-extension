import React from 'react';
import { Box, Stack } from '@mui/material';
import { DeprecatedEmpty, GeneralEmpty, ListeningEmpty } from '@root/src/pages/popup/assets/svg/empty';

type EmptyType = 'empty' | 'listening' | 'deprecated';

interface EmptyStateProps {
  body: React.ReactNode;
  type: EmptyType;
}

const EmptyState: React.FC<EmptyStateProps> = ({ body, type }) => {
  const translateType = (type: EmptyType) => {
    switch (type) {
      case 'listening':
        return (<ListeningEmpty />);
      case 'deprecated':
        return (<DeprecatedEmpty />);
      default:
        return (<GeneralEmpty />);
    }
  }

  return (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {translateType(type)}
      <Box
        sx={{
          color: '#B0A5D4',
          fontSize: '14px',
          textAlign: 'center',
        }}
      >
        {body}
      </Box>
    </Stack>
  );
};

export default EmptyState;

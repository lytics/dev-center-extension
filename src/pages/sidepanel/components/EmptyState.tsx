import React from 'react';
import { Box, Stack } from '@mui/material';
import { DeprecatedEmpty, GeneralEmpty, ListeningEmpty } from '@root/src/pages/sidepanel/assets/svg/empty';

type EmptyType = 'empty' | 'listening' | 'deprecated';

interface EmptyStateProps {
  body: React.ReactNode;
  type: EmptyType;
}

const EmptyState: React.FC<EmptyStateProps> = ({ body, type }) => {
  const translateType = (type: EmptyType) => {
    switch (type) {
      case 'listening':
        return <ListeningEmpty />;
      case 'deprecated':
        return <DeprecatedEmpty />;
      default:
        return <GeneralEmpty />;
    }
  };

  return (
    <Stack width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
      <Box width={'125px'}>{translateType(type)}</Box>
      <Box pt={1} pb={5} fontSize={'14px'} textAlign={'center'} color={'#B0A5D4'}>
        {body}
      </Box>
    </Stack>
  );
};

export default EmptyState;

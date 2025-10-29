import React from 'react';
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GeneralEmpty, ListeningEmpty } from '@root/src/pages/sidepanel/assets/svg/empty';

type EmptyType = 'empty' | 'listening' | 'deprecated';

interface EmptyStateProps {
  body: React.ReactNode;
  type: EmptyType;
}

const DeprecatedContainer = styled(Stack)(() => ({
  width: '18.8125rem', // 301px
  height: '9rem', // 144px
  paddingLeft: '2.9375rem', // 47px
  paddingRight: '2.9375rem', // 47px
  gap: '1.5rem', // 24px
  justifyContent: 'center',
  alignItems: 'center',
}));

const SparkleImage = styled('img')(() => ({
  width: '3.125rem', // 50px
  height: '3.125rem', // 50px
}));

const DeprecatedText = styled(Box)(() => ({
  width: '12.9375rem', // 207px
  height: '2.375rem', // 38px
  fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
  fontWeight: 700,
  fontSize: '1rem', // 16px
  lineHeight: '100%',
  letterSpacing: '-0.5px',
  textAlign: 'center',
  color: '#383838',
}));

const SecondaryText = styled(Box)(() => ({
  width: '12.9375rem', // 207px
  height: '2.125rem', // 34px
  fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
  fontWeight: 510,
  fontSize: '0.875rem', // 14px
  lineHeight: '100%',
  letterSpacing: '-0.5px',
  textAlign: 'center',
  color: '#8F8D8D',
}));

const EmptyState: React.FC<EmptyStateProps> = ({ body, type }) => {
  const translateType = (type: EmptyType) => {
    switch (type) {
      case 'listening':
        return <ListeningEmpty />;
      case 'deprecated':
        return <SparkleImage src="/sparkles.png" alt="No legacy campaigns" />;
      default:
        return <GeneralEmpty />;
    }
  };

  if (type === 'deprecated') {
    return (
      <DeprecatedContainer>
        {translateType(type)}
        <Stack gap={'0.5rem'} alignItems={'center'}>
          <DeprecatedText>{body}</DeprecatedText>
          <SecondaryText>You&apos;re using the latest personalization framework</SecondaryText>
        </Stack>
      </DeprecatedContainer>
    );
  }

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

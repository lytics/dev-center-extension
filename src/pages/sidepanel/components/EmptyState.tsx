import React from 'react';
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GeneralEmpty, ListeningEmpty } from '@root/src/pages/sidepanel/assets/svg/empty';
import { Sparkles } from '@root/src/pages/sidepanel/assets/svg/sparkles';
import { appColors } from '@root/src/theme/palette';
import { appContent } from '@root/src/shared/content/appContent';

type EmptyType = 'empty' | 'listening' | 'deprecated';

interface EmptyStateProps {
  body: React.ReactNode;
  type: EmptyType;
}

const DeprecatedContainer = styled(Stack)(() => ({
  width: '18.8125rem', // 301px
  height: '9rem', // 144px
  padding: '0 2.9375rem', // 0 47px (top/bottom left/right)
  gap: '1.5rem', // 24px
  justifyContent: 'center',
  alignItems: 'center',
}));

const DeprecatedText = styled(Box)(() => ({
  width: '12.9375rem', // 207px
  height: '2.375rem', // 38px
  font: '700 1rem/1 SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
  textAlign: 'center',
  color: appColors.neutral[600],
}));

const SecondaryText = styled(Box)(() => ({
  width: '12.9375rem', // 207px
  height: '2.125rem', // 34px
  font: '500 0.875rem/1 SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
  textAlign: 'center',
  color: appColors.neutral[400],
}));

const EmptyState: React.FC<EmptyStateProps> = ({ body, type }) => {
  const translateType = (type: EmptyType) => {
    switch (type) {
      case 'listening':
        return <ListeningEmpty />;
      case 'deprecated':
        return (
          <Box width={'3.125rem'} height={'3.125rem'}>
            <Sparkles />
          </Box>
        );
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
          <SecondaryText>{appContent.personalizationEmptyStates.noLegacyCampaignsSubtext}</SecondaryText>
        </Stack>
      </DeprecatedContainer>
    );
  }

  return (
    <Stack width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
      <Box width={'125px'}>{translateType(type)}</Box>
      <Box
        pt={1}
        pb={5}
        fontSize={'14px'}
        textAlign={'center'}
        color={appColors.neutral[300]}
        fontFamily={'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}>
        {body}
      </Box>
    </Stack>
  );
};

export default EmptyState;

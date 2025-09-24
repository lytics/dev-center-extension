import React from 'react';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { appColors } from '@root/src/theme/palette';
import { appContent } from '@root/src/shared/content/appContent';

interface AutoDetectionIndicatorProps {
  currentDomain?: string;
  textContent?: typeof appContent.autoDetection;
}

const StyledIndicatorCard = styled(Stack)(({ theme }) => ({
  padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  borderRadius: theme.spacing(1),
  backgroundColor: appColors.common.colors.autoDetection.background,
  border: `${theme.spacing(0.125)} solid ${appColors.common.colors.autoDetection.border}`,
  cursor: 'default',
  transition: 'none',
  '&:hover': {
    boxShadow: 'none',
    transform: 'none',
  },
}));

export const AutoDetectionIndicator = ({
  currentDomain = window.location.hostname,
  textContent = appContent.autoDetection,
}: AutoDetectionIndicatorProps): JSX.Element => {
  return (
    <StyledIndicatorCard>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="body2" fontWeight={appColors.common.fontWeight.medium} color={appColors.neutral[900]}>
          {textContent.autoDetectedTitle}
        </Typography>

        <Typography
          variant="body2"
          color={appColors.common.colors.autoDetection.domain}
          fontWeight={appColors.common.fontWeight.bold}
          onClick={() => {
            // Open the domain in a new tab
            chrome.tabs.create({ url: `https://${currentDomain}` });
          }}
          sx={{
            textDecoration: 'underline',
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
              opacity: 0.8,
            },
          }}>
          {currentDomain}
        </Typography>
      </Stack>
    </StyledIndicatorCard>
  );
};

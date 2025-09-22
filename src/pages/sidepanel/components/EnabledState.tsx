import React from 'react';
import { Button, Typography } from '@mui/material';
import { ConfigDomain } from '../assets/svg/ConfigDomain';
import { styled } from '@mui/material/styles';
import { appColors } from '@root/src/theme/palette';
import { appContent } from '@root/src/shared/content/appContent';
import { Container, StyledCard, Title, Description, StyledLink } from '@src/shared/components/SharedStyles';

// Extract the type from appContent for better type safety
type EnabledStateTextContent = typeof appContent.enabledState;

interface EnabledStateProps {
  domainState: {
    pinnedURL: string;
  };
  tabValid: boolean;
  onPin: () => void;
  documentationUrl: string;
  // Optional: allow overriding content (useful for testing/customization)
  textContent?: EnabledStateTextContent;
}

// Using shared styles from SharedStyles.tsx

const OuterCard = styled(StyledCard)(({ theme }) => ({
  padding: `${theme.spacing(4)} ${theme.spacing(4)} ${theme.spacing(4)} ${theme.spacing(4)}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(2),
}));

// EnabledState-specific DocCard with semiBold font weight
const EnabledDocCard = styled(StyledCard)(({ theme }) => ({
  padding: theme.spacing(2.5),
  fontWeight: appColors.common.fontWeight.semiBold,
}));

const DocText = styled(Typography)(() => ({
  lineHeight: appColors.common.lineHeight.tight,
  fontSize: appColors.common.fontSize.small,
  color: appColors.common.colors.textSecondary,
  fontWeight: appColors.common.fontWeight.semiBold,
}));

// Title and Description imported from SharedStyles.tsx

const StyledButton = styled(Button)(() => ({
  color: appColors.common.colors.accent,
  borderColor: appColors.common.colors.accent,
  borderWidth: '0.0625rem',
  fontWeight: appColors.common.fontWeight.bold,
  fontSize: appColors.common.fontSize.baseSmall,
  lineHeight: 1.55,
  '&:hover': {
    backgroundColor: 'transparent',
    borderColor: appColors.common.colors.accent,
  },
}));

// StyledLink imported from SharedStyles.tsx

export const EnabledState = ({
  domainState,
  tabValid,
  onPin,
  documentationUrl,
  textContent = appContent.enabledState, // Default to centralized content
}: EnabledStateProps): JSX.Element => {
  return (
    <Container>
      <OuterCard>
        <ConfigDomain />
        <Title variant="h6" align="center">
          {textContent.title}
        </Title>
        <Typography variant="body2" color="text.secondary" align="center">
          {domainState.pinnedURL ? (
            <>
              {textContent.pinnedUrlText.prefix}
              <strong>{domainState.pinnedURL}</strong>
              {tabValid ? textContent.pinnedUrlText.suffix : textContent.pinnedUrlText.suffixAnotherTab}
            </>
          ) : (
            <Description>
              {textContent.noPinnedUrlText}
              <StyledLink variant="body2" href={documentationUrl} target="_blank">
                {textContent.documentationLinkText}.
              </StyledLink>
            </Description>
          )}
        </Typography>
        <StyledButton size={'medium'} variant="outlined" onClick={onPin}>
          {textContent.buttonText}
        </StyledButton>
      </OuterCard>
      <EnabledDocCard>
        <DocText align="center">{textContent.adBlockerNotice}</DocText>
      </EnabledDocCard>
    </Container>
  );
};

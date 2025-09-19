import React from 'react';
import { Button, Stack, Typography, Card, Link } from '@mui/material';
import { ConfigDomain } from '../assets/svg/ConfigDomain';
import { styled } from '@mui/material/styles';
import { appColors } from '@root/src/theme/palette';
import { appContent } from '@root/src/shared/content/appContent';

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

const Container = styled(Stack)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(1.5),
  gap: theme.spacing(3),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  backgroundColor: appColors.common.white,
  borderRadius: theme.spacing(1),
  boxShadow: 'none',
  border: 'none',
  cursor: 'default',
  transition: 'none',
  '&:hover': {
    boxShadow: 'none',
    transform: 'none',
  },
}));

const OuterCard = styled(StyledCard)(({ theme }) => ({
  padding: `${theme.spacing(4)} ${theme.spacing(4)} ${theme.spacing(4)} ${theme.spacing(4)}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(2),
}));

const DocCard = styled(StyledCard)(({ theme }) => ({
  padding: theme.spacing(2.5),
  fontWeight: appColors.common.fontWeight.semiBold,
}));

const DocText = styled(Typography)(() => ({
  lineHeight: appColors.common.lineHeight.tight,
  fontSize: appColors.common.fontSize.small,
  color: appColors.common.colors.textSecondary,
  fontWeight: appColors.common.fontWeight.semiBold,
}));

const Title = styled(Typography)(() => ({
  fontSize: appColors.common.fontSize.base,
  fontWeight: appColors.common.fontWeight.semiBold,
}));

const Description = styled(Typography)(() => ({
  lineHeight: appColors.common.lineHeight.tight,
  fontSize: appColors.common.fontSize.small,
  color: appColors.common.colors.textSecondary,
  fontWeight: appColors.common.fontWeight.medium,
}));

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

const StyledLink = styled(Link)(() => ({
  textDecoration: 'underline',
  cursor: 'pointer',
  color: appColors.common.colors.textSecondary,
}));

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
      <DocCard>
        <DocText align="center">{textContent.adBlockerNotice}</DocText>
      </DocCard>
    </Container>
  );
};

import React from 'react';
import { Box, Card, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Toggle from '@root/src/pages/sidepanel/components/Toggle';
import { ArrowPointer } from '@root/src/pages/sidepanel/assets/svg/ArrowPointer';
import { appColors } from '@root/src/theme/palette';
import { Container, StyledCard, DocCard, Title, Description, StyledLink } from '@src/shared/components/SharedStyles';

interface DisabledStateProps {
  documentationUrl: string;
  onDocLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  toggleLabel: string;
  title: string;
  description: string;
  documentationText: string;
  documentationLinkText: string;
  documentationSuffix: string;
}

const OuterCard = styled(StyledCard)(({ theme }) => ({
  padding: `${theme.spacing(4)} ${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(2)}`,
}));

const ToggleRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  '& svg': {
    transform: 'translateY(-0.6rem)',
  },
}));

const ToggleCard = styled(Card)(({ theme }) => ({
  width: '13.7rem',
  height: '2.6rem',
  backgroundColor: theme.palette.grey[100],
  borderRadius: '5.6rem',
  boxShadow: 'none',
  border: 'none',
  padding: `${theme.spacing(1.5)} ${theme.spacing(2.9)}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1.3),
  cursor: 'default',
  transition: 'none',
  '&:hover': {
    boxShadow: 'none',
    transform: 'none',
  },
}));

const ToggleText = styled(Typography)(() => ({
  fontFamily: appColors.common.fontFamily,
  fontWeight: appColors.common.fontWeight.bold,
  fontSize: appColors.common.fontSize.base,
  lineHeight: '100%',
  letterSpacing: '-0.03rem',
  display: 'flex',
  alignItems: 'center',
  margin: 0,
}));

const SwitchWrapper = styled(Box)(({ theme }) => ({
  '& .MuiSwitch-root': {
    width: '1.7rem',
    height: '1.2rem',
    padding: 0,
  },
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: theme.spacing(0.25),
    '&.Mui-checked': {
      transform: 'translateX(0.5rem)',
    },
    '&.Mui-disabled': {
      color: appColors.toggle.thumb,
      '& .MuiSwitch-thumb': {
        backgroundColor: appColors.toggle.thumb,
        boxShadow: '0 0 0.55rem 0 #00000040, -0.27rem 0 0.55rem 0 #00000017',
      },
      '& + .MuiSwitch-track': {
        backgroundColor: appColors.toggle.active,
        border: `0.1rem solid ${appColors.toggle.activeBorder}`,
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: '0.9rem',
    height: '0.9rem',
  },
  '& .MuiSwitch-track': {
    borderRadius: '0.6rem',
  },
}));

export const DisabledState = ({
  documentationUrl,
  onDocLinkClick,
  toggleLabel,
  title,
  description,
  documentationText,
  documentationLinkText,
  documentationSuffix,
}: DisabledStateProps): JSX.Element => {
  return (
    <Container>
      <OuterCard>
        <Stack spacing={2} alignItems="center">
          <ToggleRow>
            <ArrowPointer aria-hidden="true" />

            <ToggleCard>
              <ToggleText>{toggleLabel}</ToggleText>
              <SwitchWrapper>
                <Toggle checked disabled />
              </SwitchWrapper>
            </ToggleCard>
          </ToggleRow>

          <StyledCard>
            <Stack spacing={1} alignItems="center" textAlign="center">
              <Title variant="h6">{title}</Title>
              <Description>{description}</Description>
            </Stack>
          </StyledCard>
        </Stack>
      </OuterCard>

      <DocCard>
        <Description>
          {documentationText}{' '}
          <StyledLink href={documentationUrl} target="_blank" onClick={onDocLinkClick}>
            {documentationLinkText}
          </StyledLink>
          {documentationSuffix}
        </Description>
      </DocCard>
    </Container>
  );
};

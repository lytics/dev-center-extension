import React from 'react';
import { Box, Stack, Typography, Link, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Lock } from '@mui/icons-material';
import { appColors } from '@root/src/theme/palette';
import { appContent } from '@root/src/shared/content/appContent';

interface Interest {
  label: string;
  value: number;
}

interface InterestsProps {
  hasData: boolean;
  interests?: Interest[];
  textContent?: typeof appContent.interests;
}

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: appColors.common.white,
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(3, 2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  cursor: 'default',
  transition: 'none',
  '&:hover': {
    boxShadow: 'none',
    transform: 'none',
  },
}));

const TitleText = styled(Typography)(() => ({
  fontWeight: appColors.common.fontWeight.semiBold,
  fontSize: appColors.common.fontSize.base,
  color: appColors.neutral[900],
}));

const EmptyStateContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  gap: theme.spacing(1.25),
  padding: theme.spacing(1.5),
  backgroundColor: appColors.common.white,
  borderRadius: theme.spacing(1),
  border: `1px solid ${appColors.neutral[500]}`,
}));

const LockIcon = styled(Lock)(() => ({
  fontSize: '1.5rem', // 24px
  color: appColors.neutral[400],
  flexShrink: 0,
}));

const EmptyStateText = styled(Typography)(() => ({
  fontSize: appColors.common.fontSize.small,
  color: appColors.neutral[300],
  lineHeight: appColors.common.lineHeight.tight,
}));

const StyledLink = styled(Link)(() => ({
  fontWeight: appColors.common.fontWeight.bold,
  fontSize: appColors.common.fontSize.small,
  color: appColors.common.colors.accent,
  textDecoration: 'underline',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const InterestsContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

const InterestRow = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
}));

const InterestLabel = styled(Typography)(() => ({
  fontSize: appColors.common.fontSize.baseSmall,
  fontWeight: appColors.common.fontWeight.medium,
  color: appColors.neutral[900],
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: '100%',
  height: '0.5rem', // 8px
  borderRadius: theme.spacing(0.5),
  backgroundColor: appColors.common.colors.accentLight,
  '& .MuiLinearProgress-bar': {
    backgroundColor: appColors.common.colors.accent,
    borderRadius: theme.spacing(0.5),
  },
}));

export const Interests = ({
  hasData,
  interests = [],
  textContent = appContent.interests,
}: InterestsProps): JSX.Element => {
  return (
    <Container>
      <TitleText>{textContent.title}</TitleText>

      {hasData && interests.length > 0 ? (
        <InterestsContainer>
          {interests.map((interest, index) => (
            <InterestRow key={index}>
              <InterestLabel>{interest.label}</InterestLabel>
              <StyledLinearProgress
                variant="determinate"
                value={interest.value}
                aria-label={`${interest.label}: ${interest.value}%`}
              />
            </InterestRow>
          ))}
        </InterestsContainer>
      ) : (
        <EmptyStateContainer>
          <LockIcon aria-hidden="true" />
          <EmptyStateText>
            {textContent.emptyMessage}{' '}
            <StyledLink
              href={textContent.learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={textContent.learnMoreAriaLabel}>
              {textContent.learnMoreText}
            </StyledLink>
          </EmptyStateText>
        </EmptyStateContainer>
      )}
    </Container>
  );
};

export default Interests;

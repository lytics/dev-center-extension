import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Lock } from '@mui/icons-material';
import { appColors } from '@root/src/theme/palette';
import { appContent } from '@root/src/shared/content/appContent';

interface InterestsProps {
  hasData: boolean;
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
  font: '700 0.75rem/1.42 Inter, sans-serif', // Bold 12px, line-height 142%
  color: appColors.common.colors.accent,
  textDecoration: 'underline',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const Interests = ({ hasData, textContent = appContent.interests }: InterestsProps): JSX.Element => {
  return (
    <Container>
      <TitleText>{textContent.title}</TitleText>

      {!hasData && (
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

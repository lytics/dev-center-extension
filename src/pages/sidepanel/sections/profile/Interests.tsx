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
  minHeight: '9.625rem', // 154px minimum height
  backgroundColor: appColors.common.white,
  borderRadius: theme.spacing(1.5), // 12px
  padding: '1.5rem 1rem', // 24px 16px
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem', // 12px
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
  alignItems: 'flex-start',
  width: '100%',
  minHeight: '4.6875rem', // 75px
  gap: '0.625rem', // 10px
  padding: '0.75rem', // 12px
  backgroundColor: appColors.common.white,
  borderRadius: theme.spacing(1), // 8px
  border: '1px solid #E6E6E6',
  boxSizing: 'border-box',
}));

const LockIcon = styled(Lock)(() => ({
  fontSize: '1.5rem', // 24px
  color: appColors.neutral[400],
  flexShrink: 0,
}));

const EmptyStateText = styled(Typography)(() => ({
  fontSize: appColors.common.fontSize.small,
  color: appColors.neutral[600],
  lineHeight: appColors.common.lineHeight.tight,
}));

const StyledLink = styled(Link)(() => ({
  fontSize: appColors.common.fontSize.small,
  color: appColors.common.colors.accent,
  textDecoration: 'underline',
  cursor: 'pointer',
  fontWeight: appColors.common.fontWeight.medium,
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
              aria-label="Learn more about sharing interests">
              {textContent.learnMoreText}
            </StyledLink>
          </EmptyStateText>
        </EmptyStateContainer>
      )}
    </Container>
  );
};

export default Interests;

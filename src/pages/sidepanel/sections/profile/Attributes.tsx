import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { appColors } from '@root/src/theme/palette';
import { appContent } from '@root/src/shared/content/appContent';

interface AttributesProps {
  count: number;
  textContent?: typeof appContent.attributes;
}

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
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

const HeaderRow = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const TitleText = styled(Typography)(() => ({
  fontWeight: appColors.common.fontWeight.semiBold,
  fontSize: appColors.common.fontSize.base,
  color: appColors.neutral[900],
}));

const CountBadge = styled(Box)(({ theme }) => ({
  backgroundColor: appColors.neutral[100],
  borderRadius: theme.spacing(0.5), // 4px
  padding: '0.25rem 0.5rem', // 4px 8px
  fontSize: appColors.common.fontSize.baseSmall,
  fontWeight: appColors.common.fontWeight.semiBold,
  color: appColors.neutral[900],
}));

const DescriptionBox = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '0.75rem', // 12px
  backgroundColor: appColors.common.white,
  borderRadius: theme.spacing(1), // 8px
  border: '1px solid #E6E6E6',
  boxSizing: 'border-box',
}));

const DescriptionText = styled(Typography)(() => ({
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

export const Attributes = ({ count, textContent = appContent.attributes }: AttributesProps): JSX.Element => {
  return (
    <Container>
      <HeaderRow>
        <TitleText>{textContent.title}</TitleText>
        <CountBadge>{count}</CountBadge>
      </HeaderRow>

      <DescriptionBox>
        <DescriptionText>
          {textContent.description}{' '}
          <StyledLink
            href={textContent.learnMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Learn more about configuring attributes">
            {textContent.learnMoreText}
          </StyledLink>
        </DescriptionText>
      </DescriptionBox>
    </Container>
  );
};

export default Attributes;

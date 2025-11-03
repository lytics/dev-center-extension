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
  padding: theme.spacing(0.5, 1),
  fontSize: appColors.common.fontSize.baseSmall,
  fontWeight: appColors.common.fontWeight.semiBold,
  color: appColors.neutral[900],
}));

const DescriptionBox = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1.5),
  backgroundColor: appColors.common.white,
  borderRadius: theme.spacing(1),
  border: `1px solid ${appColors.neutral[500]}`,
}));

const DescriptionText = styled(Typography)(() => ({
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
            aria-label={textContent.learnMoreAriaLabel}>
            {textContent.learnMoreText}
          </StyledLink>
        </DescriptionText>
      </DescriptionBox>
    </Container>
  );
};

export default Attributes;

import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { appColors } from '@root/src/theme/palette';

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
}

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.25), // 10px between icon and text
  height: theme.spacing(5), // 40px
  padding: `${theme.spacing(1.375)} ${theme.spacing(2)} ${theme.spacing(0.875)} ${theme.spacing(3)}`, // 11px 16px 7px 24px (top right bottom left)
  width: '100%',
  opacity: 1,
}));

const TitleText = styled(Typography)(() => ({
  fontSize: '1.125rem',
  fontWeight: appColors.common.fontWeight.bold,
}));

export const SectionHeader = ({ icon, title }: SectionHeaderProps): JSX.Element => {
  return (
    <HeaderContainer>
      {icon}
      <TitleText variant="h2">{title}</TitleText>
    </HeaderContainer>
  );
};

export default SectionHeader;

import React from 'react';
import { Box, Stack, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { HelpOutline } from '@mui/icons-material';
import { appColors } from '@root/src/theme/palette';
import { appContent } from '@root/src/shared/content/appContent';

interface AudienceMembershipProps {
  audiences: string[];
  textContent?: typeof appContent.audienceMembership;
}

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '10.3125rem',
  backgroundColor: appColors.common.white,
  borderRadius: theme.spacing(1.5),
  padding: '1.5rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
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

const AudienceChipsContainer = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '0.5rem', // 8px
  alignItems: 'center',
}));

const StyledChip = styled(Chip)(() => ({
  backgroundColor: appColors.common.colors.accentLight,
  borderRadius: '6.25rem',
  padding: '0.375rem 1rem',
  height: 'auto',
  fontSize: appColors.common.fontSize.small,
  fontWeight: appColors.common.fontWeight.medium,
  color: appColors.neutral[900],
  border: 'none',
  cursor: 'default',
  gap: '0.5rem',
  '& .MuiChip-label': {
    padding: 0,
  },
  '& .MuiChip-deleteIcon': {
    margin: 0,
    color: appColors.common.colors.accent,
    fontSize: '1rem',
  },
  '&:hover': {
    backgroundColor: appColors.common.colors.accentLight,
  },
}));

const QuestionIcon = styled(HelpOutline)(() => ({
  fontSize: '1rem',
  color: appColors.common.colors.accent,
}));

export const AudienceMembership = ({
  audiences,
  textContent = appContent.audienceMembership,
}: AudienceMembershipProps): JSX.Element => {
  return (
    <Container>
      <TitleText>{textContent.title}</TitleText>

      <AudienceChipsContainer>
        {audiences.map((audience, index) => (
          <StyledChip
            key={index}
            label={audience}
            onDelete={() => {}}
            deleteIcon={<QuestionIcon />}
            aria-label={`${audience} audience with information`}
          />
        ))}
      </AudienceChipsContainer>
    </Container>
  );
};

export default AudienceMembership;

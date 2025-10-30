import React from 'react';
import { Box, Stack, Typography, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { appColors } from '@root/src/theme/palette';
import { appContent } from '@root/src/shared/content/appContent';

interface ProfileHeaderProps {
  lyticsId: string;
  lastUid: string;
  completeness: number;
  textContent?: typeof appContent.profileHeader;
}

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '11.3125rem',
  backgroundColor: appColors.common.white,
  borderRadius: theme.spacing(1.5),
  padding: '1.5rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  cursor: 'default',
  transition: 'none',
  '&:hover': {
    boxShadow: 'none',
    transform: 'none',
  },
}));

const FieldRow = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const FieldLabel = styled(Typography)(() => ({
  fontWeight: appColors.common.fontWeight.semiBold,
  fontSize: appColors.common.fontSize.baseSmall,
  color: appColors.neutral[900],
  whiteSpace: 'nowrap',
}));

const FieldValue = styled(Typography)(() => ({
  fontSize: appColors.common.fontSize.baseSmall,
  color: appColors.neutral[600],
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  textAlign: 'right',
  flex: 1,
}));

const CompletenessContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
}));

const ProgressBarWrapper = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: '100%',
  height: '0.5rem',
  borderRadius: theme.spacing(0.5),
  backgroundColor: appColors.common.colors.accentLight,
  '& .MuiLinearProgress-bar': {
    backgroundColor: appColors.common.colors.accent,
    borderRadius: theme.spacing(0.5),
  },
}));

const CompletenessLabel = styled(Typography)(() => ({
  fontSize: appColors.common.fontSize.small,
  color: appColors.neutral[400],
  whiteSpace: 'nowrap',
}));

export const ProfileHeader = ({
  lyticsId,
  lastUid,
  completeness,
  textContent = appContent.profileHeader,
}: ProfileHeaderProps): JSX.Element => {
  return (
    <Container>
      {/* Lytics ID */}
      <FieldRow>
        <FieldLabel>{textContent.lyticsIdLabel}</FieldLabel>
        <FieldValue title={lyticsId}>{lyticsId}</FieldValue>
      </FieldRow>

      {/* Last _UID (Cookie) */}
      <FieldRow>
        <FieldLabel>{textContent.lastUidLabel}</FieldLabel>
        <FieldValue title={lastUid}>{lastUid}</FieldValue>
      </FieldRow>

      {/* Profile Completeness */}
      <CompletenessContainer>
        <FieldLabel>{textContent.completenessLabel}</FieldLabel>
        <ProgressBarWrapper>
          <StyledLinearProgress variant="determinate" value={completeness} aria-label={`${completeness}% complete`} />
          <CompletenessLabel>
            {completeness}% {textContent.completeText}
          </CompletenessLabel>
        </ProgressBarWrapper>
      </CompletenessContainer>
    </Container>
  );
};

export default ProfileHeader;

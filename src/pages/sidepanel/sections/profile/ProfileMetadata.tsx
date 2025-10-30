import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { appColors } from '@root/src/theme/palette';
import { appContent } from '@root/src/shared/content/appContent';

interface ProfileMetadataProps {
  lastUpdated: string;
  lastAttribute: string;
  textContent?: typeof appContent.profileMetadata;
}

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '7.6875rem',
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

export const ProfileMetadata = ({
  lastUpdated,
  lastAttribute,
  textContent = appContent.profileMetadata,
}: ProfileMetadataProps): JSX.Element => {
  return (
    <Container>
      {/* Profile Last Updated */}
      <FieldRow>
        <FieldLabel>{textContent.lastUpdatedLabel}</FieldLabel>
        <FieldValue title={lastUpdated}>{lastUpdated}</FieldValue>
      </FieldRow>

      {/* Last Attribute */}
      <FieldRow>
        <FieldLabel>{textContent.lastAttributeLabel}</FieldLabel>
        <FieldValue title={lastAttribute}>{lastAttribute}</FieldValue>
      </FieldRow>
    </Container>
  );
};

export default ProfileMetadata;

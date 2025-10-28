import React, { useEffect, useState } from 'react';

import { Cancel, CheckCircle, Error, MonitorHeartOutlined } from '@mui/icons-material';
import { Box, Chip, CircularProgress, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import SimpleTable from '@root/src/pages/sidepanel/components/SimpleTable';
import { appContent } from '@root/src/shared/content/appContent';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';
import { appColors } from '@root/src/theme/palette';

interface TagStatusProps {
  tagIsInstalled: boolean;
  tagConfig: TagConfigModel;
  textContent?: typeof appContent.tagStatus;
}

const StyledContainer = styled(Box)(({ theme }) => ({
  paddingInline: theme.spacing(1.25),
  paddingBottom: theme.spacing(12), // 96px bottom space to clear bottom navigation
  height: '100%',
  width: '100%',
  overflow: 'auto',
  boxSizing: 'border-box',
  cursor: 'default',
  transition: 'none',
  '&:hover': {
    boxShadow: 'none',
    transform: 'none',
  },
}));

const StyledHeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.25),
  marginLeft: theme.spacing(2),
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const StyledHeaderTypography = styled(Typography)(() => ({
  fontSize: '1.125rem',
  fontWeight: appColors.common.fontWeight.bold,
}));

const StyledStatusCard = styled(Stack)(({ theme }) => ({
  background: appColors.common.white,
  borderRadius: theme.spacing(1.5),
  border: '4px solid transparent',
  padding: theme.spacing(1),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const StyledContentContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}));

const StyledIconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.25),
}));

const StyledSdkTypography = styled(Typography)(() => ({
  fontSize: appColors.common.fontSize.baseSmall,
  fontWeight: appColors.common.fontWeight.bold,
}));

const StyledVersionChip = styled(Chip)(({ theme }) => ({
  background:
    'linear-gradient(98.77deg, rgba(118, 28, 208, 0.18) 43.32%, rgba(161, 28, 208, 0.18) 64.54%, rgba(208, 124, 28, 0.18) 87.9%)',
  borderRadius: '999px',
  fontWeight: appColors.common.fontWeight.bold,
  letterSpacing: '-0.5px',
  paddingInline: theme.spacing(0.5),
}));

const StyledTableContainer = styled(Box)(({ theme }) => ({
  background: appColors.common.white,
  padding: theme.spacing(3, 2),
  borderRadius: theme.spacing(1.5),
  marginTop: theme.spacing(2),
}));

const StyledSearchingCard = styled(Stack)(({ theme }) => ({
  background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #FCC504, #E80339) border-box',
  borderRadius: theme.spacing(1),
  border: '4px solid transparent',
  padding: theme.spacing(1),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const StyledLoadingContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: 0,
  textAlign: 'center',
}));

const StyledDescriptionTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(1),
}));

const TagStatus: React.FC<TagStatusProps> = ({ tagIsInstalled, tagConfig, textContent = appContent.tagStatus }) => {
  const [legacyTag, setLegacyTag] = useState(false);

  useEffect(() => {
    if (tagConfig?.version) {
      const version = tagConfig.version.split('.');
      if (version[0] < '3') {
        setLegacyTag(true);
      }
    }
  }, [tagConfig]);

  return (
    <StyledContainer>
      <StyledHeaderContainer>
        <MonitorHeartOutlined />
        <StyledHeaderTypography variant="h2">{textContent.title}</StyledHeaderTypography>
      </StyledHeaderContainer>
      {tagIsInstalled ? (
        <Stack>
          <StyledStatusCard direction="row" spacing={2} display="flex" alignItems="center" justifyContent="center">
            {legacyTag ? (
              <>
                <Cancel style={{ fontSize: 30, color: appColors.error.main }} />
                <Typography variant="body1">
                  {textContent.deprecatedVersion} <Chip label={`v${tagConfig?.version}`} size="small" />
                </Typography>
              </>
            ) : (
              <StyledContentContainer>
                <StyledIconContainer>
                  <CheckCircle style={{ fontSize: 24, color: appColors.toggle.active }} />
                  <StyledSdkTypography variant="body1">{textContent.sdkInstalled} </StyledSdkTypography>
                </StyledIconContainer>
                <StyledVersionChip label={`v${tagConfig?.version}`} size="small" />
              </StyledContentContainer>
            )}
          </StyledStatusCard>

          <StyledTableContainer>
            <SimpleTable
              rows={[
                { label: textContent.tableLabels.accountId, value: tagConfig?.cid?.[0] },
                {
                  label: textContent.tableLabels.stream,
                  value: tagConfig?.stream || textContent.tableLabels.defaultStream,
                },
                { label: textContent.tableLabels.cookieName, value: tagConfig?.cookie },
                { label: textContent.tableLabels.profileKey, value: tagConfig?.entity?.byFieldKey },
                {
                  label: textContent.tableLabels.thirdPartyCookies,
                  value: tagConfig?.loadid ? textContent.tableLabels.enabled : textContent.tableLabels.disabled,
                },
              ]}
            />
          </StyledTableContainer>
        </Stack>
      ) : (
        <Stack>
          <StyledLoadingContainer>
            <CircularProgress color="secondary" />
          </StyledLoadingContainer>
          <StyledSearchingCard direction="row" spacing={2} display="flex" alignItems="center" justifyContent="center">
            <Error style={{ fontSize: 26, color: appColors.warning.main }} />
            <Typography variant="body2">{textContent.searchingForSdk}</Typography>
          </StyledSearchingCard>
          <Box>
            <StyledDescriptionTypography variant="body2">
              {textContent.notFoundMessage}{' '}
              <a
                href="https://docs.lytics.com/docs/lytics-javascript-tag#installation"
                target="_blank"
                rel="noreferrer">
                {textContent.documentationLinkText}
              </a>
              .
            </StyledDescriptionTypography>
          </Box>
        </Stack>
      )}
    </StyledContainer>
  );
};

export default TagStatus;

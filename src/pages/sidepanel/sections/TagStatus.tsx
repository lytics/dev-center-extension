import React, { useEffect, useState } from 'react';
import { Box, Chip, CircularProgress, Stack, Typography } from '@mui/material';
import { Cancel, CheckCircle, Error } from '@mui/icons-material';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';
import SimpleTable from '@root/src/pages/sidepanel/components/SimpleTable';

interface TagStatusProps {
  tagIsInstalled: boolean;
  tagConfig: TagConfigModel;
}

const TagStatus: React.FC<TagStatusProps> = ({ tagIsInstalled, tagConfig }) => {
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
    <Box>
      {tagIsInstalled ? (
        <Stack>
          <Stack
            direction="row"
            spacing={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={3}
            p={1}
            mt={1}
            mb={1}
            sx={{
              background:
                'linear-gradient(white, white) padding-box, linear-gradient(90deg, #8610D3 39%, #D532CA 72%, #FF9A01 100%) border-box',
              borderRadius: 2,
              border: '4px solid transparent',
            }}>
            {legacyTag ? (
              <>
                <Cancel style={{ fontSize: 30, color: '#F00' }} />
                <Typography variant="body1">
                  You are using a deprecated version of the Lytics SDK{' '}
                  <Chip label={`v${tagConfig?.version}`} size="small" sx={{ ml: 0.5 }} />
                </Typography>
              </>
            ) : (
              <>
                <CheckCircle style={{ fontSize: 30, color: '#00D27C' }} />
                <Typography variant="body1">
                  Lytics JavaScript SDK Installed{' '}
                  <Chip label={`v${tagConfig?.version}`} size="small" sx={{ ml: 0.5 }} />
                </Typography>
              </>
            )}
          </Stack>

          <Box mt={2}>
            <SimpleTable
              rows={[
                { label: 'Account ID', value: tagConfig?.cid?.[0] },
                { label: 'Stream', value: tagConfig?.stream || 'default' },
                { label: 'Cookie Name', value: tagConfig?.cookie },
                { label: 'Profile Key', value: tagConfig?.entity?.byFieldKey },
                { label: '3rd Party Cookies', value: tagConfig?.loadid ? 'Enabled' : 'Disabled' },
              ]}
            />
          </Box>
        </Stack>
      ) : (
        <Stack>
          <Box mt={2} mb={0} textAlign={'center'}>
            <CircularProgress color="secondary" />
          </Box>
          <Stack
            direction="row"
            spacing={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={3}
            mt={1}
            mb={1}
            p={1}
            sx={{
              background:
                'linear-gradient(white, white) padding-box, linear-gradient(to right, #FCC504, #E80339) border-box',
              borderRadius: 2,
              border: '4px solid transparent',
            }}>
            <Error style={{ fontSize: 26, color: '#FF9A01' }} />
            <Typography variant="body2">Searching for Lytics JavaScript SDK</Typography>
          </Stack>
          <Box>
            <Typography variant="body2" align={'center'} p={1}>
              We have not been able to find the Lytics JavaScript SDK on this page. We&apos;ll continue checking but if
              you haven&apos;t yet installed the tag please refer to our{' '}
              <a
                href="https://docs.lytics.com/docs/lytics-javascript-tag#installation"
                target="_blank"
                rel="noreferrer">
                Lytics JavaScript SDK documentation
              </a>
              .
            </Typography>
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default TagStatus;

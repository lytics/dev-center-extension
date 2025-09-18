import React, { useEffect, useState } from 'react';
import { Box, Button, Chip, Divider, Stack, Typography } from '@mui/material';

import { Lock } from '@mui/icons-material';
import SimpleTable from '@root/src/pages/sidepanel/components/SimpleTable';

import CustomBarChart from '@root/src/pages/sidepanel/components/BarChart';

import { ExtractScores, ExtractSortedMap, ExtractSegments } from '@root/src/models/entity';

interface ProfileSummaryTabProps {
  profile: any;
}

const HighlightBox: React.FC<{ headline: string; cta?: React.ReactNode; value: React.ReactNode }> = ({
  headline,
  value,
  cta,
}) => {
  return (
    <Box
      p={2}
      sx={{
        borderRadius: '5px',
        backgroundColor: '#D9D9E1',
        width: '100%',
      }}>
      <Typography variant="body2" align="center">
        {headline}
      </Typography>
      <Typography variant="h5" align="center" sx={{ fontWeight: 600 }}>
        {value}
      </Typography>
      {cta && <Box>{cta}</Box>}
    </Box>
  );
};

const ProfileSummary: React.FC<ProfileSummaryTabProps> = ({ profile }) => {
  const [hasContent, setHasContent] = useState(false);
  const [hasScores, setHasScores] = useState(false);
  const [totalAttributes, setTotalAttributes] = useState(0);
  const [scores, setScores] = useState([]);
  const [affinities, setAffinities] = useState<{ label: string; value: number }[]>([]);
  const [computedAttributes, setComputedAttributes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // total attributes available
    if (profile?.data?.user) {
      setTotalAttributes(Object.keys(profile.data.user).length);
    }

    // populate content
    if (profile?.data?.user?.lytics_content) {
      const sortedData = ExtractSortedMap(profile?.data?.user?.lytics_content || []);
      setAffinities(sortedData);
      setHasContent(true);
    }
    // populate computed attributes
    if (profile?.data?.user?.segments) {
      const computedAttributesObject = ExtractSegments(profile.data.user, 'segments');
      setComputedAttributes(computedAttributesObject);
    }

    // populate scores
    const updatedScores = ExtractScores(profile.data?.user);

    if (updatedScores.length > 0) {
      setHasScores(true);
    } else {
      setHasScores(false);
    }
    setScores(updatedScores);
  }, [profile]);

  const computedAttributesValue = Object.values(computedAttributes).join(', ');

  const openNewTab = url => {
    window.open(url, '_blank');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        fontSize: '12px',
      }}>
      <Stack direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'}>
        <HighlightBox
          headline={'Available Attributes'}
          value={totalAttributes}
          cta={
            <Box
              borderRadius={2}
              textAlign={'center'}
              mt={1}
              pt={2}
              sx={{
                backgroundColor: '#E9E9EA',
              }}>
              <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => openNewTab('https://docs.lytics.com/docs/account-settings#lytics-api')}>
                Surface Additional Attributes
              </Button>
              <Typography
                p={2}
                sx={{
                  fontSize: '12px',
                }}>
                You may have more attributes available for personalization. Review documentation on how to configure
                which attributes are surfaced to the web.
              </Typography>
            </Box>
          }
        />
      </Stack>
      <Box mt={1}>
        <SimpleTable
          rows={[
            { label: 'Lytics ID', value: profile?.data?.user?._id || 'Unknown' },
            { label: 'Last _UID (Cookie)', value: profile?.data?.user?._uid || profile?.data?._uid || 'Unknown' },
            {
              label: 'Audiences',
              position: 'top',
              fancyValue: (
                <Box pl={1} pr={1} display="flex" justifyContent="center" flexDirection="row" flexWrap="wrap">
                  {computedAttributesValue.split(',').map((attribute, index) => (
                    <Chip
                      size={'small'}
                      variant={'outlined'}
                      key={index}
                      label={attribute}
                      sx={{ borderRadius: 1, mr: 1, mb: 1, backgroundColor: '#FFF' }}
                    />
                  ))}
                </Box>
              ),
            },
            {
              label: 'Behavior',
              position: 'top',
              fancyValue: (
                <Box>
                  {hasScores ? (
                    <CustomBarChart data={scores} color1={'#00BAE3'} color2={'#85DB83'} />
                  ) : (
                    <Stack
                      direction={'row'}
                      p={1}
                      border={1}
                      bgcolor={'#FFF'}
                      borderRadius={1}
                      borderColor={'#F3F3F3'}
                      alignItems="center">
                      <Box mr={1} color={'#C8C8D6'}>
                        <Lock />
                      </Box>
                      <Typography variant="subtitle2" align="left" color={'#A5A5B1'}>
                        Scores are not currently shared for this account. You can share them{' '}
                        <a
                          href="https://docs.lytics.com/docs/personalization-api#allowlist-fields-for-public-api"
                          target="_blank"
                          rel="noreferrer">
                          here
                        </a>
                        .
                      </Typography>
                    </Stack>
                  )}
                </Box>
              ),
            },
            {
              label: 'Interests',
              position: 'top',
              fancyValue: (
                <Box>
                  {hasContent ? (
                    <CustomBarChart data={affinities} color1={'#9D70FD'} color2={'#D36FDE'} />
                  ) : (
                    <Stack
                      direction={'row'}
                      p={1}
                      border={1}
                      bgcolor={'#FFF'}
                      borderRadius={1}
                      borderColor={'#F3F3F3'}
                      alignItems="center">
                      <Box mr={1} color={'#C8C8D6'}>
                        <Lock />
                      </Box>
                      <Typography variant="subtitle2" align="left" color={'#A5A5B1'}>
                        Interests are not currently shared for this account. You can share them{' '}
                        <a
                          href="https://docs.lytics.com/docs/personalization-api#allowlist-fields-for-public-api"
                          target="_blank"
                          rel="noreferrer">
                          here
                        </a>
                        .
                      </Typography>
                    </Stack>
                  )}
                </Box>
              ),
            },
          ]}
        />
        <Divider sx={{ mt: 0.5 }} />
      </Box>
    </Box>
  );
};

export default ProfileSummary;

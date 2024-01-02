import React, { useEffect, useState } from 'react';
import { Box, Divider, LinearProgress, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SimpleTable from '@pages/popup/components/SimpleTable';

const useStyles = makeStyles(() => ({
  linearProgress: {
    background: '#C5C5CD',
    borderRadius: '2px',
    '& .MuiLinearProgress-bar': {
      background: 'linear-gradient(90deg, #8356FF 11.36%, #19EFD7 100%)',
    },
  },
}));

interface ProfileSummaryTabProps {
  profile: any;
}

interface Scores {
  Consistency: number;
  Frequency: number;
  Intensity: number;
  Maturity: number;
  Momentum: number;
  Propensity: number;
  Quantity: number;
  Recency: number;
  Volatility: number;
}

function CustomBarChart({ data }) {
  const classes = useStyles();

  return (
    <Stack spacing={0.5}>
      {data.map((item, index) => (
        <Stack key={index} spacing={1} direction={'row'}>
          <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'right', width: '300px' }}>
            {item.label}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={Math.round(item.value * 100)} // Scale the value to 0-100
            sx={{
              width: '100%',
              height: '1rem',
            }}
            className={classes.linearProgress}
          />
        </Stack>
      ))}
    </Stack>
  );
}

const ProfileSummary: React.FC<ProfileSummaryTabProps> = ({ profile }) => {
  const [hasContent, setHasContent] = useState(false);
  const [hasScores, setHasScores] = useState(false);
  const [hasComputedAttributes, setHasComputedAttributes] = useState(false);

  const [totalAttributes, setTotalAttributes] = useState(0);
  const [scores, setScores] = useState<Scores>({} as Scores);
  const [affinities, setAffinities] = useState<{ [key: string]: number }>({});
  const [computedAttributes, setComputedAttributes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // total attributes available
    if (profile?.data?.user) {
      setTotalAttributes(Object.keys(profile.data.user).length);
    }

    // populate content
    if (profile?.data?.user?.lytics_content) {
      const affinityEntries = Object.entries(profile.data.user.lytics_content);
      const filteredEntries = affinityEntries.filter(([key]) => key.length > 1);
      const slicedEntries = filteredEntries.slice(0, 20);
      const affinityObject = Object.fromEntries(slicedEntries);
      setAffinities(affinityObject as { [key: string]: number });
      setHasContent(true);
    }
    // populate computed attributes
    if (profile?.data?.user?.segments) {
      const segmentsArray = profile.data.user.segments;
      const computedAttributesObject = segmentsArray.reduce((result, segment) => {
        result[segment] = segment;
        return result;
      }, {});

      // Set the state with the resulting map
      setComputedAttributes(computedAttributesObject);
      setHasComputedAttributes(true);
    }

    // populate scores
    if (
      profile?.data?.user?.score_consistency ||
      profile?.data?.user?.score_frequency ||
      profile?.data?.user?.score_intensity ||
      profile?.data?.user?.score_maturity ||
      profile?.data?.user?.score_momentum ||
      profile?.data?.user?.score_propensity ||
      profile?.data?.user?.score_quantity ||
      profile?.data?.user?.score_recency ||
      profile?.data?.user?.score_volatility
    ) {
      setHasScores(true);
      setScores({
        Consistency: profile.data.user.score_consistency,
        Frequency: profile.data.user.score_frequency,
        Intensity: profile.data.user.score_intensity,
        Maturity: profile.data.user.score_maturity,
        Momentum: profile.data.user.score_momentum,
        Propensity: profile.data.user.score_propensity,
        Quantity: profile.data.user.score_quantity,
        Recency: profile.data.user.score_recency,
        Volatility: profile.data.user.score_volatility,
      });
      console.log('scores', scores);
    }
  }, [profile]);

  const computedAttributesValue = Object.values(computedAttributes).join(', ');

  const sortedData = Object.entries(affinities)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        fontSize: '12px',
        height: '265px',
        overflow: 'auto',
        p: 1,
      }}>
      <Box mt={1}>
        <SimpleTable
          rows={[
            { label: 'Total Attributes', value: totalAttributes },
            { label: 'Lytics ID', value: profile?.data?.user?._id || 'Unknown' },
            { label: 'Last Web Cookie', value: profile?.data?.user?._uid || 'Unknown' },
          ]}
        />
        <Divider sx={{ mt: 0.5 }} />
      </Box>
      <Stack direction="row" spacing={2} mt={1} alignItems={'flex-start'} justifyContent={'center'}>
        <Stack
          spacing={0}
          sx={{
            width: '100%',
          }}>
          <Box>
            <Typography variant="subtitle2" align="center" sx={{ fontWeight: 600 }}>
              Behaviors
            </Typography>
          </Box>
          <Stack
            p={2}
            spacing={0.5}
            sx={{
              borderRadius: '5px',
              backgroundColor: '#D9D9E1',
            }}>
            {hasScores ? (
              <>
                {Object.entries(scores).map(([label, value], index) => (
                  <Stack key={index} direction="row" spacing={1} alignItems="center">
                    <Box
                      sx={{
                        borderRadius: '50%',
                        width: '35px',
                        height: '35px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(90deg, #7938CB 50%, #9A2EC8 100%)',
                        fontWeight: 800,
                        color: '#fff',
                      }}>
                      {value}
                    </Box>
                    <Typography variant="subtitle2" pl={1} align="left">
                      {label}
                    </Typography>
                  </Stack>
                ))}
              </>
            ) : (
              <Typography variant="subtitle2" align="center">
                No scores available
              </Typography>
            )}
          </Stack>
        </Stack>
        <Stack spacing={0}>
          <Box>
            <Typography variant="subtitle2" pr={1} align="center" sx={{ fontWeight: 600 }}>
              Interests
            </Typography>
          </Box>
          <Box
            p={2}
            sx={{
              borderRadius: '5px',
              backgroundColor: '#D9D9E1',
            }}>
              {hasContent ? (
                <CustomBarChart data={sortedData} />
              ) : (
                <Typography variant="subtitle2" align="center">
                  No interests available
                </Typography>
              )}
          </Box>
        </Stack>
      </Stack>
      {hasComputedAttributes && (
        <Box mt={1}>
          <SimpleTable
            rows={[
              { label: 'Computed Attributes', value: computedAttributesValue },
            ]}
          />
          <Divider sx={{ mt: 0.5 }} />
        </Box>
      )}
    </Box>
  );
};

export default ProfileSummary;

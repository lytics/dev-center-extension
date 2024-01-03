import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, LinearProgress, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SimpleTable from '@pages/popup/components/SimpleTable';

const useStyles = makeStyles(() => ({
  linearProgress: {
    background: '#DCDCEA',
    borderRadius: '2px',
    '& .MuiLinearProgress-bar': {
      background: 'linear-gradient(75.62deg, #6C31B8 57.26%, #AB32DE 94.2%)',
    },
  },
}));

interface ProfileSummaryTabProps {
  profile: any;
}

const HighlightBox: React.FC<{ headline: string; cta?: React.ReactNode; value: React.ReactNode }> = ({ headline, value, cta }) => {
  return (
    <Box
      p={2}
      sx={{
        borderRadius: "5px",
        backgroundColor: "#D9D9E1",
        width: "100%",
      }}
    >
      <Typography variant="body2" align="center">
        {headline}
      </Typography>
      <Typography variant="h5" align="center" sx={{ fontWeight: 600 }}>
        {value}
      </Typography>
      {cta && (
        <Box>
          {cta}
        </Box>
      )}
    </Box>
  );
};

function CustomBarChart({ data }) {
  const classes = useStyles();
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  };

  return (
    <Stack spacing={0.5}>
      {data.map((item, index) => (
        <Stack key={index} spacing={1} direction={'row'}>
           <Box
            sx={{
              background: '#EDEDF1',
              width: '150px'
            }}
           >
            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'right' }}>
              {truncateString(item.label, 20)}
            </Typography>
          </Box>
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
  const [totalAttributes, setTotalAttributes] = useState(0);
  const [scores, setScores] = useState([]);
  const [affinities, setAffinities] = useState<{ [key: string]: number }>({});
  const [computedAttributes, setComputedAttributes] = useState<{ [key: string]: string }>({});

  const appendScore = (scoresArray, profileData, propertyName, label) => {
    const propertyValue = profileData?.user?.[propertyName];

    if (propertyValue) {
      return [
        ...scoresArray,
        {
          label: label,
          value: propertyValue/100,
        },
      ];
    }
  
    return scoresArray;
  }

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
      setComputedAttributes(computedAttributesObject);
    }

    // populate scores
    let updatedScores = appendScore(scores, profile.data, 'score_consistency', 'Consistency');
    updatedScores = appendScore(updatedScores, profile.data, 'score_frequency', 'Frequency');
    updatedScores = appendScore(updatedScores, profile.data, 'score_intensity', 'Intensity');
    updatedScores = appendScore(updatedScores, profile.data, 'score_maturity', 'Maturity');
    updatedScores = appendScore(updatedScores, profile.data, 'score_momentum', 'Momentum');
    updatedScores = appendScore(updatedScores, profile.data, 'score_propensity', 'Propensity');
    updatedScores = appendScore(updatedScores, profile.data, 'score_quantity', 'Quantity');
    updatedScores = appendScore(updatedScores, profile.data, 'score_recency', 'Recency');
    updatedScores = appendScore(updatedScores, profile.data, 'score_volatility', 'Volatility');
    
    if(updatedScores.length > 0){
      setHasScores(true);
    } else {
      setHasScores(false);
    }
    setScores(updatedScores);
  }, [profile]);

  const computedAttributesValue = Object.values(computedAttributes).join(', ');

  const sortedData = Object.entries(affinities)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);

  const openNewTab = (url) => {
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
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <HighlightBox
          headline={"Available Attributes"}
          value={totalAttributes}
          cta={
            <Box
              borderRadius={2}
              textAlign={"center"}
              mt={1}
              pt={2}
              sx={{
                backgroundColor: "#E9E9EA",
              }}
            >
              <Button variant="outlined" size="small" color="secondary" onClick={() => openNewTab('https://www.example.com')}>
                Surface Additional Attributes
              </Button>
              <Typography
                p={2}
                sx={{
                  fontSize: "12px"
                }}
              >
                You may have more attributes available for personalization. Review documentation on how to configure which attributes are surfaced to the web.
              </Typography>
            </Box>
          }
        />
      </Stack>
      <Box mt={1}>
        <SimpleTable
          rows={[
            { label: 'Lytics ID', value: profile?.data?.user?._id || 'Unknown' },
            { label: 'Last Web Cookie', value: profile?.data?.user?._uid || profile?.data?._uid  || 'Unknown' },
            { label: 'Behavior', value: (
              <Box>
                {hasScores ? (
                  <CustomBarChart data={scores} />
                ) : (
                  <Typography variant="subtitle2" align="left">
                    No scores available (ensure they are turned on)
                  </Typography>
                )}
              </Box>
            )},
            { label: 'Interests', value: (
              <Box>
                {hasContent ? (
                  <CustomBarChart data={sortedData} />
                ) : (
                  <Typography variant="subtitle2" align="left">
                    No interests available (ensure they are turned on)
                  </Typography>
                )}
              </Box>) 
            },
            { label: 'Computed Attributes', value: (
                computedAttributesValue.split(',').map((attribute, index) => (
                  <Typography key={index} variant="subtitle2" align="left" fontSize={"12px"}>
                    {attribute}
                  </Typography>
                ))
            ) }
          ]}
        />
        <Divider sx={{ mt: 0.5 }} />
      </Box>
    </Box>
  );
};

export default ProfileSummary;

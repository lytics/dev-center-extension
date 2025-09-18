import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Divider,
  LinearProgress,
  Stack,
  Typography,
  Grid,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Collapse,
  Tooltip,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ExpandMore, HelpOutline, Lock } from '@mui/icons-material';
import SimpleTable from '@root/src/pages/sidepanel/components/SimpleTable';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';

interface BarStylesProps {
  backgroundGradient: string;
}

const barStyles = makeStyles(() => ({
  linearProgress: ({ backgroundGradient }: BarStylesProps) => ({
    background: '#DCDCEA',
    borderRadius: '2px',
    '& .MuiLinearProgress-bar': {
      background: backgroundGradient,
    },
  }),
}));
interface ProfileSummaryTabProps {
  profile: any;
  tagConfig: TagConfigModel;
}

export interface ContentEntity {
  created?: string;
  fetched?: string;
  updated?: string;
  description?: string;
  longDescription?: string;
  httpstatus?: string;
  language?: string;
  primaryImage?: string;
  url?: string;
  collections?: string[];
  // topics are a map[string]number
  topics?: Record<string, number>;
  confidence?: number;
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

interface CustomBarChartProps {
  data: any;
  color1?: string;
  color2?: string;
}

const CustomBarChart: React.FC<CustomBarChartProps> = ({ data, color1, color2 }: CustomBarChartProps) => {
  const classes = barStyles({
    backgroundGradient: `linear-gradient(75deg, ${color1 || '#6C31B8'} 60%, ${color2 || '#AB32DE'} 100%)`,
  });

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  };

  return (
    <Stack spacing={0.5}>
      {data.map((item, index) => (
        <Stack key={index} spacing={1} direction={'row'} ml={1} mr={1}>
          <Box
            sx={{
              width: '200px',
              borderRadius: '2px',
              // background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 80%, #D8D8E5 100%)',
            }}>
            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'right' }}>
              {truncateString(item.label, 20)}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={Math.round(item.value * 100)}
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
};

const RecommendationTile = ({ item }: { item: ContentEntity }) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid container spacing={1} borderRadius={1} bgcolor={'#FFF'} mb={2}>
      <Grid item xs={12} onClick={() => setOpen(!open)}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant={'body1'} width={'90%'}>
            <a href={item?.url}>{item?.url}</a>
          </Typography>
          <ExpandMore />
        </Box>
      </Grid>
      <Collapse in={open}>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow key={'url'}>
                <TableCell align="left" size="small">
                  <Typography variant={'body2'}>URL</Typography>
                </TableCell>
                <TableCell align="right" size="small">
                  <Typography variant={'body2'}>
                    <a href={item?.url}>{item?.url}</a>
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow key={'description'}>
                <TableCell align="left" size="small">
                  <Typography variant={'body2'}>Description</Typography>
                </TableCell>
                <TableCell align="right" size="small">
                  <Typography variant={'body2'}>
                    {item?.description || item?.longDescription || 'No description available'}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow key={'topics'}>
                <TableCell align="left" size="small">
                  <Typography variant={'body2'}>Topics</Typography>
                </TableCell>
                <TableCell align="right" size="small">
                  {item.topics &&
                    Object.keys(item.topics).map((topic, index) => (
                      <Chip key={index} label={topic} style={{ marginRight: 1, marginTop: 1 }} />
                    ))}
                </TableCell>
              </TableRow>
              <TableRow key={'image'}>
                <TableCell align="left">
                  <Typography variant={'body2'}>Image</Typography>
                </TableCell>
                <TableCell align="right">
                  <img src={item.primaryImage} alt={'Not Available'} width={'100vw'} />
                </TableCell>
              </TableRow>
              <TableRow key={'confidence'}>
                <TableCell align="left" size="small">
                  <Box display="flex" alignItems="center">
                    <Typography variant={'body2'} display="inline">
                      Confidence
                    </Typography>
                    <Tooltip title="The confidence score of the content item to the user">
                      <HelpOutline fontSize="small" />
                    </Tooltip>
                  </Box>
                </TableCell>
                <TableCell align="right" size="small">
                  <Typography variant={'body2'}>{Math.round(item.confidence * 100) || 0}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </Grid>
  );
};

const ProfileSummary: React.FC<ProfileSummaryTabProps> = ({ profile, tagConfig }) => {
  const [hasContent, setHasContent] = useState(false);
  const [hasScores, setHasScores] = useState(false);
  const [totalAttributes, setTotalAttributes] = useState(0);
  const [scores, setScores] = useState([]);
  const [affinities, setAffinities] = useState<{ [key: string]: number }>({});
  const [computedAttributes, setComputedAttributes] = useState<{ [key: string]: string }>({});

  const [recommendations, setRecommendations] = useState<ContentEntity[]>([]);
  const recommendAPI = useCallback(async () => {
    if (!profile || !tagConfig || !profile.data) {
      return;
    }
    const accountID = tagConfig?.cid?.[0];
    const uid = profile?.data?._uid as string;
    if (!accountID || !uid) {
      return;
    }

    const response = await fetch(`https://api.lytics.io/api/content/recommend/${accountID}/user/_uid/${uid}`);
    const json = await response.json();
    // for each item in the data array in JSON, convert to a ContentEntity
    const contentEntities = json.data.map(item => {
      const entity: ContentEntity = {
        created: item.created,
        fetched: item.fetched,
        updated: item.updated,
        description: item.description,
        longDescription: item.long_description,
        httpstatus: item.httpstatus,
        primaryImage: item.primary_image,
        url: item?.url,
        topics: item?.global,
        confidence: item.confidence,
      };
      return entity;
    });
    setRecommendations(contentEntities);
    return;
  }, [profile, tagConfig]);

  useEffect(() => {
    recommendAPI();
  }, [profile, tagConfig, recommendAPI]);

  const appendScore = (scoresArray, profileData, propertyName, label) => {
    const propertyValue = profileData?.user?.[propertyName];

    if (propertyValue) {
      return [
        ...scoresArray,
        {
          label: label,
          value: propertyValue / 100,
        },
      ];
    }

    return scoresArray;
  };

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
    let updatedScores = [];
    updatedScores = appendScore(updatedScores, profile.data, 'score_consistency', 'Consistency');
    updatedScores = appendScore(updatedScores, profile.data, 'score_frequency', 'Frequency');
    updatedScores = appendScore(updatedScores, profile.data, 'score_intensity', 'Intensity');
    updatedScores = appendScore(updatedScores, profile.data, 'score_maturity', 'Maturity');
    updatedScores = appendScore(updatedScores, profile.data, 'score_momentum', 'Momentum');
    updatedScores = appendScore(updatedScores, profile.data, 'score_propensity', 'Propensity');
    updatedScores = appendScore(updatedScores, profile.data, 'score_quantity', 'Quantity');
    updatedScores = appendScore(updatedScores, profile.data, 'score_recency', 'Recency');
    updatedScores = appendScore(updatedScores, profile.data, 'score_volatility', 'Volatility');

    if (updatedScores.length > 0) {
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
                    <CustomBarChart data={sortedData} color1={'#9D70FD'} color2={'#D36FDE'} />
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
            {
              label: 'Content Recommendations',
              position: 'top',
              fancyValue: (
                <>
                  {recommendations.map((item, index) => (
                    <RecommendationTile key={index} item={item} />
                  ))}
                </>
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

import React, { useEffect } from 'react';

import { Box, Chip, Stack, Typography } from '@mui/material';
import { Lock } from '@mui/icons-material';

import tagConfigStore from '@src/shared/storages/tagConfigStorage';
import { ContentEntity, ExtractSortedMap } from '@root/src/models/entity';

import SimpleTable from '@root/src/pages/sidepanel/components/SimpleTable';
import CustomBarChart from '@root/src/pages/sidepanel/components/BarChart';

const Content: React.FC = () => {
  const [tabUrl, setTabUrl] = React.useState<string>('');
  const [entity, setEntity] = React.useState<ContentEntity | null>(null);
  const [topicMap, setTopicMap] = React.useState<any>(null);
  const [collections, setCollections] = React.useState([]);
  chrome.runtime.onMessage.addListener(function (request) {
    // listen for messages sent from background.js
    if (request.url && request.url !== tabUrl) setTabUrl(request.url);
  });

  // get the current page
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (tabs.length > 0) {
        setTabUrl(tabs[0].url);
      }
    });

    const fetchEntity = async () => {
      if (tabUrl === '') {
        return;
      }
      const rawTagConfig = await tagConfigStore.get();
      const tagConfig = JSON.parse(rawTagConfig);

      const response = await fetch(
        'https://api.lytics.io/v2/content/entity/' +
          tagConfig.cid +
          '?' +
          new URLSearchParams({
            url: tabUrl,
          }),
      );
      if (!response.ok) {
        throw new Error('Failed to fetch entity');
      }
      const json = await response.json();
      const fetched = {
        created: json.data?.entity?.created,
        fetched: json.data?.entity?.fetched,
        updated: json.data?.entity?.updated,
        description: json.data?.entity?.description,
        longDescription: json.data?.entity?.long_description,
        httpstatus: json.data?.entity?.httpstatus,
        language: json.data?.entity?.language,
        primaryImage: json.data?.entity?.primary_image,
        url: json.data?.entity?.url,
        collections: json.data?.entity?.['_segments'] || [],
        topics: json.data?.entity?.global,
      };
      setEntity(fetched);

      setTopicMap(ExtractSortedMap(fetched.topics));
      setCollections(fetched.collections);
    };
    fetchEntity();
  }, [tabUrl]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        fontSize: '12px',
        height: 'calc(-185px + 100vh)',
        overflow: 'auto',
      }}>
      <Stack direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'}>
        <Box mt={2} flexGrow={1} overflow={'auto'}>
          <SimpleTable
            rows={[
              { label: 'Description', value: entity?.description },
              { label: 'Long Description', value: entity?.longDescription },
              {
                label: 'URL',
                value: (
                  <a href={entity?.url} target="_blank" rel="noreferrer">
                    {entity?.url}
                  </a>
                ),
              },
              {
                label: 'Primary Image',
                position: 'top',
                fancyValue: entity?.primaryImage ? (
                  <img src={entity?.primaryImage} alt={'Thumbnail'} style={{ width: '100%' }} />
                ) : (
                  <Typography variant="body2" align={'left'}>
                    Primary image not found.
                  </Typography>
                ),
              },
              { label: 'Created', value: entity?.created },
              { label: 'Fetched', value: entity?.fetched },
              { label: 'Updated', value: entity?.updated },
              { label: 'HTTP Status', value: entity?.httpstatus },
              {
                label: 'Collections',
                position: 'top',
                fancyValue: (
                  <Box pl={1} pr={1} display="flex" justifyContent="center" flexDirection="row" flexWrap="wrap">
                    {collections.map((attribute, index) => (
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
                label: 'Topics',
                position: 'top',
                fancyValue: (
                  <Box height={250}>
                    {entity?.topics ? (
                      <CustomBarChart data={topicMap} color1={'#9D70FD'} color2={'#D36FDE'} />
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
                          This URL has not yet been classified and indexed by Lytics. You can manually add it{' '}
                          <a href="https://app.lytics.com/content/classification" target="_blank" rel="noreferrer">
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
        </Box>
      </Stack>
    </Box>
  );
};

export default Content;

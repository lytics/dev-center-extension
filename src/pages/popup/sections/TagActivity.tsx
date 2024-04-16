import { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, Box, Chip, Stack, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import tagActivityStore from '@src/shared/storages/tagActivityStorage';
import { EventModel, EventType } from '@src/shared/models/eventModel';
import TreeDisplay from '@root/src/pages/popup/components/TreeDisplay';
import EmptyState from '@src/pages/popup/components/EmptyState';
import moment from 'moment';

const TagActivity = () => {
  const [tagActivity, setTagActivity] = useState<EventModel[]>([] as EventModel[]);

  const translateEventType = (type: string) => {
    return EventType[type];
  };

  function calculateTimeAgo(timestamp) {
    const currentTime = moment();
    const timeAgo = moment(timestamp).from(currentTime);
    return timeAgo;
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await tagActivityStore.get();
      const parsedResults = result.map(item => {
        return JSON.parse(item);
      });
      const reversedResults = parsedResults.reverse();
      setTagActivity(reversedResults);
    };
    tagActivityStore.subscribe(fetchData);
    fetchData();
  }, []);

  const clearActivity = () => {
    tagActivityStore.clear();
    setTagActivity([]);
  };

  return (
    <Box fontSize={12}>
      <Box>
        <Button onClick={clearActivity}>Reset Activity</Button>
      </Box>
      {tagActivity.length === 0 ? (
        <Box mt={6}>
          <EmptyState
            type={'empty'}
            body={
              <Box maxWidth={375}>
                No activity has been seen since extension activated. Please emit an event using jstag.send or refresh
                the page.
              </Box>
            }
          />
        </Box>
      ) : (
        <Stack>
          {tagActivity.map((item, index) => (
            <>
              {item && (
                <Accordion disableGutters key={index}>
                  <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id={index.toString()}>
                    <Stack
                      direction={'row'}
                      justifyContent="space-between"
                      width="100%"
                      alignItems="center"
                      spacing={2}>
                      <Chip size="small" variant="outlined" label={translateEventType(item.type)} />
                      <Typography variant="body2">{calculateTimeAgo(item.ts)}</Typography>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack>
                      <Box p={1} textAlign={'left'} border={0} borderRadius={1} bgcolor={'#F3F3F3'} fontSize={10}>
                        <Typography variant={'body2'}>{item.description}</Typography>
                      </Box>
                      {item.type === 'collect-data' && (
                        <Box fontSize={12}>
                          {item.queryParamObj ? (
                            <TreeDisplay data={item.queryParamObj} collapsed={2} />
                          ) : (
                            <TreeDisplay data={item.parsedBodyDataObj} collapsed={2} />
                          )}
                        </Box>
                      )}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              )}
            </>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default TagActivity;

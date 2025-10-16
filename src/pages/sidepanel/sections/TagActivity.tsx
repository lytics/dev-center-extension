import { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, Box, Chip, Stack, Typography } from '@mui/material';
import { ExpandMore, Delete } from '@mui/icons-material';
import { EventModel, EventType } from '@src/shared/models/eventModel';
import TreeDisplay from '@root/src/pages/sidepanel/components/TreeDisplay';
import EmptyState from '@root/src/pages/sidepanel/components/EmptyState';
import { useCurrentTabState } from '@root/src/pages/sidepanel/hooks/useCurrentTabState';
import moment from 'moment';

const TagActivity = () => {
  const { tagActivity: currentTabActivity, clearActivity } = useCurrentTabState();
  const [tagActivity, setTagActivity] = useState<EventModel[]>([] as EventModel[]);

  const translateEventType = (type: string) => {
    return EventType[type];
  };

  function calculateTimeAgo(timestamp) {
    const currentTime = moment();
    const timeAgo = moment(timestamp).from(currentTime);
    return timeAgo;
  }

  // Update local state when current tab activity changes
  useEffect(() => {
    if (currentTabActivity) {
      // Reverse the array to show most recent first
      const reversedResults = [...currentTabActivity].reverse();
      setTagActivity(reversedResults);
    } else {
      setTagActivity([]);
    }
  }, [currentTabActivity]);

  const handleClearActivity = async () => {
    await clearActivity();
    setTagActivity([]);
  };

  return (
    <Box fontSize={12}>
      <Box textAlign={'right'} m={1}>
        <Button
          size={'small'}
          variant={'text'}
          color={'secondary'}
          onClick={handleClearActivity}
          startIcon={<Delete />}>
          Clear Logs
        </Button>
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

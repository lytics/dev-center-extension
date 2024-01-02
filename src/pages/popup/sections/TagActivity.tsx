import { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Chip, Stack, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import tagActivityStore from '@src/shared/storages/tagActivityStorage';
import { EventModel, EventType } from '@src/shared/models/eventModel';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import moment from 'moment';

function TagActivity() {
  const [tagActivity, setTagActivity] = useState<EventModel[]>([] as EventModel[]);

  const translateEventType = (type: string) => {
    return EventType[type];
  }

  const formatRawData = (data: any) => {
    return JSON.stringify(data, null, 2);
  }

  function calculateTimeAgo(timestamp) {
    const currentTime = moment();
    const timeAgo = moment(timestamp).from(currentTime);
    return timeAgo;
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await tagActivityStore.get();

      // loop results and JSON parse before updating activity state
      const parsedResults = result.map((item) => {
        return JSON.parse(item);
      });
      const reversedResults = parsedResults.reverse();
      setTagActivity(reversedResults);
    };
    tagActivityStore.subscribe(fetchData);
    fetchData();
  }, []);

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        fontSize: "12px",
        height: "285px",
        overflow: 'auto', 
      }}
    >
      <Stack>
        {tagActivity.map((item, index) => (
          <>
          {item && (
            <Accordion disableGutters key={index}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id={index.toString()}
              >
                <Stack
                  direction={"row"}
                  justifyContent="space-between"
                  width="100%"
                  alignItems="center"
                  spacing={2}
                >
                  <Chip size="small" variant="outlined" label={translateEventType(item.type)} />
                  <Typography variant='body2'>{calculateTimeAgo(item.ts)}</Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Stack>
                  <Box
                    p={1}
                    textAlign={"left"}
                    border={0}
                    borderRadius={1}
                    bgcolor={"#F3F3F3"}
                    fontSize={10}
                  >
                    <Typography variant={"body2"}>{item.description}</Typography>
                  </Box>
                  {item.type === "collect-data" && (
                    <Box
                      fontSize={12}
                    >
                      {item.queryParamObj ? (
                          <SyntaxHighlighter language="json" style={{ ...materialDark }}>
                          {formatRawData(item.queryParamObj)}
                        </SyntaxHighlighter>
                      ) : (
                        <SyntaxHighlighter language="json" style={{ ...materialDark }}>
                          {formatRawData(item.parsedBodyDataObj)}
                        </SyntaxHighlighter>
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
    </Box>
  );
}

export default TagActivity;

import { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, Box, Chip, Stack, Typography } from '@mui/material';
import { ExpandMore, Delete } from '@mui/icons-material';
import { EventModel, EventType } from '@src/shared/models/eventModel';
import TreeDisplay from '@root/src/pages/sidepanel/components/TreeDisplay';
import EmptyState from '@root/src/pages/sidepanel/components/EmptyState';
import { styled } from '@mui/material/styles';
import { useCurrentTabState } from '@root/src/pages/sidepanel/hooks/useCurrentTabState';
import { appColors } from '@root/src/theme/palette';
import { appContent } from '@root/src/shared/content/appContent';
import moment from 'moment';

interface TagActivityProps {
  textContent?: typeof appContent.tagActivity;
}

const TagActivity = ({ textContent = appContent.tagActivity }: TagActivityProps) => {
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

  const StyledTableContainer = styled(Box)(({ theme }) => ({
    background: appColors.common.white,
    // padding: theme.spacing(3, 2),
    borderRadius: theme.spacing(1.5),
    marginTop: theme.spacing(2),
  }));

  const StyledAccordion = styled(Accordion)(() => ({
    backgroundColor: appColors.common.white,
    '&.MuiAccordion-root::before': {
      background: 'rgba(82, 82, 82, 0.13)',
    },
  }));

  const StyledChip = styled(Chip)(() => ({
    color: appColors.common.colors.accent,
    backgroundColor: 'rgba(147, 59, 255, 0.12)',
    fontWeight: appColors.common.fontWeight.semiBold,
    fontSize: appColors.common.fontSize.small,
    borderColor: 'transparent',
  }));

  const StyledTimeTypography = styled(Typography)(() => ({
    color: appColors.common.colors.textSecondary,
    fontWeight: appColors.common.fontWeight.medium,
    fontSize: appColors.common.fontSize.small,
  }));

  const StyledButton = styled(Button)(() => ({
    color: appColors.common.colors.accent,
  }));

  return (
    <Box fontSize={12}>
      <Box textAlign={'right'} m={1}>
        <StyledButton size={'small'} variant={'text'} onClick={handleClearActivity} startIcon={<Delete />}>
          {textContent.clearLogsLabel}
        </StyledButton>
      </Box>
      {tagActivity.length === 0 ? (
        <Box mt={6}>
          <EmptyState type={'empty'} body={<Box maxWidth={375}>{textContent.emptyStateMessage}</Box>} />
        </Box>
      ) : (
        <StyledTableContainer>
          {tagActivity.map((item, index) => (
            <>
              {item && (
                <StyledAccordion disableGutters key={index}>
                  <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id={index.toString()}>
                    <Stack
                      direction={'row'}
                      justifyContent="space-between"
                      width="100%"
                      alignItems="center"
                      spacing={2}>
                      <StyledChip size="small" variant="outlined" label={translateEventType(item.type)} />
                      <StyledTimeTypography variant="body2">{calculateTimeAgo(item.ts)}</StyledTimeTypography>
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
                </StyledAccordion>
              )}
            </>
          ))}
        </StyledTableContainer>
      )}
    </Box>
  );
};

export default TagActivity;

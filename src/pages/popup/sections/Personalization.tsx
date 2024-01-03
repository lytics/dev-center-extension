import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Chip, Stack, Tab, Tabs, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { TagConfigPathforaCandidates } from '@root/src/shared/models/tagConfigModel';
import JSONTree from '@root/src/pages/popup/components/jsonTree';
import CustomTabPanel from '@src/pages/popup/components/CustomTabPanel';
import EmptyState from '@src/pages/popup/components/EmptyState';

interface PersonalizationProps {
  candidates: TagConfigPathforaCandidates;
}

const TabDetails = ({ items }: { items: any[] }) => {
  return (
    <Stack>
      {items.map((item, index) => (
        <>
          {item && (
            <Accordion disableGutters key={index}>
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id={index.toString()}>
                <Stack direction={'row'} justifyContent="space-between" width="100%" alignItems="center" spacing={2}>
                  <Chip size="small" variant="outlined" label={item.type} />
                  <Typography variant="body2">{item.id}</Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Stack>
                  <Box fontSize={12}>
                    <JSONTree data={item} collapsed={2} />
                  </Box>
                </Stack>
              </AccordionDetails>
            </Accordion>
          )}
        </>
      ))}
    </Stack>
  );
};

const Personalization: React.FC<PersonalizationProps> = ({ candidates }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSetTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Stack alignItems={'flex-start'} justifyContent={'center'} height={'100%'} width={'100%'} overflow={'hidden'}>
      <Box borderBottom={1} borderColor={'divider'} width={'100%'}>
        <Tabs value={activeTab} onChange={handleSetTab} textColor="secondary" indicatorColor="secondary">
          <Tab id="experiences" label="Experiences" />
          <Tab id="legacy" disabled={false} label="Legacy Campaigns" />
        </Tabs>
      </Box>
      <Box flexGrow={1} width={'100%'} overflow={'auto'}>
        <CustomTabPanel value={activeTab} index={0}>
          {candidates?.experiences.length > 0 ? (
            <TabDetails items={candidates?.experiences} />
          ) : (
            <Box
              mt={8}
            >
              <EmptyState
                type={'listening'}
                body={<Box maxWidth={375}>No active Lytics managed experiences were found.</Box>}
              />
            </Box>
          )}
        </CustomTabPanel>
        <CustomTabPanel value={activeTab} index={1}>
          {candidates.variations?.length > 0 || candidates.legacyABTests?.length > 0 ? (
            <>
              {candidates.variations?.length > 0 && <TabDetails items={candidates.variations} />}
              {candidates.legacyABTests?.length > 0 && <TabDetails items={candidates.legacyABTests} />}
            </>
          ) : (
            <Box
              mt={8}
            >
              <EmptyState
                type={'deprecated'}
                body={
                  <Box maxWidth={375}>
                    Great news! No legacy campaigns are currently active on this page and you are not at risk of using a
                    sunset feature.
                  </Box>
                }
              />
            </Box>
          )}
        </CustomTabPanel>
      </Box>
    </Stack>
  );
};

export default Personalization;

import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Chip, Stack, Tab, Tabs, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { TagConfigPathforaCandidates } from '@root/src/shared/models/tagConfigModel';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CustomTabPanel from '@src/pages/popup/components/CustomTabPanel';
import EmptyState from '@src/pages/popup/components/EmptyState';

interface PersonalizationProps {
  candidates: TagConfigPathforaCandidates;
}

const TabDetails = ({ items }: { items: any[] }) => {
  const formatRawData = (data: any) => {
    return JSON.stringify(data, null, 2);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        fontSize: '12px',
        height: '285px',
        overflow: 'auto',
      }}>
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
                      <SyntaxHighlighter language="json" style={{ ...materialDark }}>
                        {formatRawData(item)}
                      </SyntaxHighlighter>
                    </Box>
                  </Stack>
                </AccordionDetails>
              </Accordion>
            )}
          </>
        ))}
      </Stack>
    </Box>
  );
};

const Personalization: React.FC<PersonalizationProps> = ({ candidates }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSetTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      m={1}
      sx={{
        width: 'calc(100% - 20px)',
        height: 'calc(100% - 20px)',
      }}>
      <Stack>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
          }}>
          <Tabs value={activeTab} onChange={handleSetTab} textColor="secondary" indicatorColor="secondary">
            <Tab id="experiences" label="Experiences" />
            <Tab id="legacy" disabled={false} label="Legacy Campaigns" />
          </Tabs>
        </Box>
        <CustomTabPanel value={activeTab} index={0}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              fontSize: '12px',
              height: '280px',
              overflow: 'auto',
            }}>
            {candidates?.experiences.length > 0 ? (
              <TabDetails items={candidates?.experiences} />
            ) : (
              <EmptyState
                type={'listening'}
                body={<Box maxWidth={375}>No active Lytics managed experiences were found.</Box>}
              />
            )}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={activeTab} index={1}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              fontSize: '12px',
              height: '280px',
              overflow: 'auto',
            }}>
            {candidates.variations?.length > 0 || candidates.legacyABTests?.length > 0 ? (
              <>
                {candidates.variations?.length > 0 && <TabDetails items={candidates.variations} />}
                {candidates.legacyABTests?.length > 0 && <TabDetails items={candidates.legacyABTests} />}
              </>
            ) : (
              <EmptyState
                type={'deprecated'}
                body={
                  <Box maxWidth={375}>
                    Great news! No legacy campaigns are currently active on this page and you are not at risk of using a
                    sunset feature.
                  </Box>
                }
              />
            )}
          </Box>
        </CustomTabPanel>
      </Stack>
    </Box>
  );
};

export default Personalization;

import React, { useState } from 'react';
import { Box, Stack, Tab, Tabs } from '@mui/material';
import TagStatus from '@pages/popup/sections/TagStatus';
import TagConfig from '@pages/popup/sections/TagConfig';
import TagActivity from '@pages/popup/sections/TagActivity';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';
import CustomTabPanel from '@src/pages/popup/components/CustomTabPanel';

interface DebuggerProps {
  tagIsInstalled: boolean;
  tagConfig: TagConfigModel;
}

const Debugger: React.FC<DebuggerProps> = ({ tagIsInstalled, tagConfig }) => {
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
            <Tab id="status" label="Status" />
            <Tab id="configuration" disabled={!tagIsInstalled} label="Configuration" />
            <Tab id="activity" disabled={!tagIsInstalled} label="Activity" />
          </Tabs>
        </Box>
        <CustomTabPanel value={activeTab} index={0}>
          <TagStatus tagIsInstalled={tagIsInstalled} tagConfig={tagConfig} />
        </CustomTabPanel>
        <CustomTabPanel value={activeTab} index={1}>
          <TagConfig tagConfig={tagConfig} />
        </CustomTabPanel>
        <CustomTabPanel value={activeTab} index={2}>
          <TagActivity />
        </CustomTabPanel>
      </Stack>
    </Box>
  );
};

export default Debugger;

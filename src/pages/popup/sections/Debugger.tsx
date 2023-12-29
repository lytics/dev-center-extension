import React, { useState } from 'react';
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import TagStatus from '@pages/popup/sections/TagStatus';
import TagConfig from '@pages/popup/sections/TagConfig';
import TagActivity from '@pages/popup/sections/TagActivity';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';

interface DebuggerProps {
  tagIsInstalled: boolean;
  tagConfig: TagConfigModel;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

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
            <Tab label="Status" {...a11yProps(0)} />
            <Tab disabled={!tagIsInstalled} label="Configuration" {...a11yProps(1)} />
            <Tab disabled={!tagIsInstalled} label="Activity" {...a11yProps(2)} />
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

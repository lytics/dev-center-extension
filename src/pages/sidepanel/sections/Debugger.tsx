import React, { Dispatch, SetStateAction } from 'react';

import { Box, Stack, Tab, Tabs } from '@mui/material';
import CustomTabPanel from '@root/src/pages/sidepanel/components/CustomTabPanel';
import TagActivity from '@root/src/pages/sidepanel/sections/TagActivity';
import TagConfig from '@root/src/pages/sidepanel/sections/TagConfig';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';

interface DebuggerProps {
  tagIsInstalled: boolean;
  tagConfig: TagConfigModel;
  getter: number;
  setter: Dispatch<SetStateAction<number>>;
}

const Debugger: React.FC<DebuggerProps> = ({ tagIsInstalled, tagConfig, getter, setter }) => {
  const handleSetTab = (event, newValue) => {
    setter(newValue);
  };

  return (
    <Stack alignItems={'flex-start'} justifyContent={'center'} height={'100%'} width={'100%'}>
      <Box borderBottom={1} borderColor={'divider'} width={'100%'}>
        <Tabs value={getter} onChange={handleSetTab} textColor="secondary" indicatorColor="secondary">
          <Tab id="configuration" disabled={!tagIsInstalled} label="Configuration" />
          <Tab id="activity" disabled={!tagIsInstalled} label="Activity" />
        </Tabs>
      </Box>
      <Box flexGrow={1} width={'100%'} overflow={'auto'}>
        <CustomTabPanel value={getter} index={0}>
          <TagConfig tagConfig={tagConfig} />
        </CustomTabPanel>
        <CustomTabPanel value={getter} index={1}>
          <TagActivity />
        </CustomTabPanel>
      </Box>
    </Stack>
  );
};

export default Debugger;

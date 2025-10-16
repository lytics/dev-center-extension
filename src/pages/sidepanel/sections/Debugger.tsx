import React, { Dispatch, SetStateAction } from 'react';
import { Box, Stack } from '@mui/material';
import CustomTabPanel from '@root/src/pages/sidepanel/components/CustomTabPanel';
import { TabNavigation } from '@root/src/pages/sidepanel/components/TabNavigation';
import TagActivity from '@root/src/pages/sidepanel/sections/TagActivity';
import TagConfig from '@root/src/pages/sidepanel/sections/TagConfig';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';
import { appContent } from '@root/src/shared/content/appContent';

interface DebuggerProps {
  tagIsInstalled: boolean;
  tagConfig: TagConfigModel;
  getter: number;
  setter: Dispatch<SetStateAction<number>>;
}

const Debugger: React.FC<DebuggerProps> = ({ tagIsInstalled, tagConfig, getter, setter }) => {
  const handleSetTab = (event: React.SyntheticEvent, newValue: number) => {
    setter(newValue);
  };

  const tabs = [
    { id: 'configuration', label: appContent.debuggerTabs.configuration, disabled: !tagIsInstalled },
    { id: 'activity', label: appContent.debuggerTabs.activity, disabled: !tagIsInstalled },
  ];

  return (
    <Stack alignItems={'flex-start'} justifyContent={'center'} height={'100%'} width={'100%'}>
      <TabNavigation tabs={tabs} value={getter} onChange={handleSetTab} />
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

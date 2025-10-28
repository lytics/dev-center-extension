import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanelContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  height: 'calc(100vh - 185px)',
  overflow: 'auto',
}));

const CustomTabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index, ...other } = props;

  return (
    <TabPanelContainer
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box>{children}</Box>}
    </TabPanelContainer>
  );
};

export default CustomTabPanel;

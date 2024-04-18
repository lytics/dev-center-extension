import { Box } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      p={1}
      role={'tabpanel'}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      sx={{ height: 'calc(100vh - 185px)', overflow: 'auto' }}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

export default CustomTabPanel;

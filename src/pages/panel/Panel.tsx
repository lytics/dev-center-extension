import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import '@pages/panel/Panel.css';

const Panel: React.FC = () => {
  return (
    <Box className="container">
      <Typography variant="h1">Dev Tools Panel</Typography>
      <Button>test</Button>
    </Box>
  );
};

export default Panel;

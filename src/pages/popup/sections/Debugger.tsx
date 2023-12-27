import React, { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';

const Debugger = () => {
  const [lyticsIsInstalled, setLyticsIsInstalled] = useState(false);

  useEffect(() => {
    setLyticsIsInstalled(true);
  }, []);

  return (
    <Box textAlign="center">
      Debugger
    </Box>
    // <Box textAlign="center">
    //   {!lyticsIsInstalled ? (
    //     <Box>
    //       Lytics Not Detected. <br/>
    //       Checking again in 5 seconds.
    //     </Box>
    //   ) : (
    //     <Stack>
    //       <Box>
    //         Lytics Detected
    //       </Box>
    //       <Box>
    //         Version 3.0.0
    //       </Box>
    //     </Stack>
    //   )}
    // </Box>
  );
};

export default Debugger;

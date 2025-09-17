import React from 'react';
import { Box, Card, Stack, Typography } from '@mui/material';
import Toggle from '@root/src/pages/sidepanel/components/Toggle';
import { ArrowPointer } from '@root/src/pages/sidepanel/assets/svg/arrowPointer';
import './DisabledState.scss';

const DisabledState: React.FC = () => {
  return (
    <Stack className="disabled-state-container">
      {/* Main White Card Container */}
      <Card className="disabled-state-card outer-card">
        <Stack spacing={2} alignItems="center">
          {/* Arrow Pointer + Gray Card Row */}
          <Box className="disabled-state-toggle-row">
            {/* Arrow Pointer */}
            <ArrowPointer />

            {/* Gray Card - Toggle */}
            <Card className="disabled-state-toggle-card">
              <Typography className="disabled-state-toggle-text">Enable Extension</Typography>
              <Box className="disabled-state-switch-wrapper">
                <Toggle checked disabled />
              </Box>
            </Card>
          </Box>

          {/* Nested White Card - Content */}
          <Card className="disabled-state-card">
            <Stack spacing={1} alignItems="center" textAlign="center">
              <Typography variant="h6" fontWeight={600} align="center" className="disabled-state-title">
                Enable extension to analyze domains
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center" className="disabled-state-description">
                Activate the extension using the toggle at the top left. The current page will reload and you&apos;ll
                instantly gain access to the full developer toolkit if the domain has the Lytics tag installed.
              </Typography>
            </Stack>
          </Card>
        </Stack>
      </Card>

      {/* Separate White Card - SDK Documentation */}
      <Card className="disabled-state-card doc-card">
        <Typography variant="body2" color="text.secondary" align="center" className="disabled-state-doc-text">
          If you havent yet installed the Lytics tag, please refer to our Lytics JavaScript SDK{' '}
          <Typography component="span" variant="body2" className="disabled-state-link">
            documentation
          </Typography>
          .
        </Typography>
      </Card>
    </Stack>
  );
};

export default DisabledState;

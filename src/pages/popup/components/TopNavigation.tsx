// core
import { useState } from 'react';

// mui
import { FormGroup, FormControlLabel, AppBar, Toolbar, Box } from '@mui/material';

// components
import Toggle from '@pages/popup/components/Toggle';
import { LyticsLogo } from '@pages/popup/assets/svg/logo';

interface TopNavProps {
  isEnabled: boolean;
  onChange: (value: boolean) => void;
}

const TopNavigation: React.FC<TopNavProps> = ({ isEnabled, onChange }) => {
  const [toggleLabel, setToggleLabel] = useState('Disabled');

  const handleToggleChange = event => {
    onChange(event.target.checked);
    setToggleLabel(event.target.checked ? 'Enabled' : 'Disabled');
  };

  return (
    <>
      <AppBar
        position={'static'}
        elevation={0}
        sx={{
          background: 'linear-gradient(to right, #6C31B8, #AB32DE)',
        }}>
        <Toolbar>
          <Box pl={1}>
            <LyticsLogo />
          </Box>
          <Box flexGrow={1} />
          <FormGroup>
            <FormControlLabel
              control={<Toggle checked={isEnabled} />}
              onChange={handleToggleChange}
              label={<Box sx={{ pl: 1 }}>{toggleLabel}</Box>}
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopNavigation;

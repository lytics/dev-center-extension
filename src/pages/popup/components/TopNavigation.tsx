// core
import { useState } from 'react';

// mui
import { FormGroup, FormControlLabel, AppBar, Toolbar, Box } from '@mui/material';

// components
import Toggle from '@pages/popup/components/Toggle';
import { LyticsLogo } from '@pages/popup/assets/svg/logo';

interface TopNavProps {
  onChange: (value: boolean) => void;
}

const TopNavigation: React.FC<TopNavProps> = ({ onChange }) => {
  const [toggleLabel, setToggleLabel] = useState('Disabled');

  const handleToggleChange = event => {
    onChange(event.target.checked);
    setToggleLabel(event.target.checked ? 'Enabled' : 'Disabled');
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: 'linear-gradient(to right, #6C31B8, #AB32DE)',
      }}>
      <Toolbar>
        <Box pl={1}>
          <LyticsLogo />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
          }}
        />
        <FormGroup>
          <FormControlLabel
            control={<Toggle />}
            onChange={handleToggleChange}
            label={<Box sx={{ pl: 1 }}>{toggleLabel}</Box>}
          />
        </FormGroup>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;

// core
import { useState, useEffect } from 'react';

// mui
import { FormGroup, FormControlLabel, AppBar, Toolbar, Box, Typography, useTheme, IconButton } from '@mui/material';
import { HelpOutline, Settings } from '@mui/icons-material';

// components
import Toggle from '@root/src/pages/sidepanel/components/Toggle';

interface TopNavProps {
  isEnabled: boolean;
  onChange: (value: boolean) => void;
}

const TopNavigation: React.FC<TopNavProps> = ({ isEnabled, onChange }) => {
  const [toggleLabel, setToggleLabel] = useState(isEnabled ? 'Disable Extension' : 'Enable Extension');
  const theme = useTheme();

  // Sync label with isEnabled prop changes
  useEffect(() => {
    setToggleLabel(isEnabled ? 'Disable Extension' : 'Enable Extension');
  }, [isEnabled]);

  const handleToggleChange = event => {
    onChange(event.target.checked);
    setToggleLabel(event.target.checked ? 'Disable Extension' : 'Enable Extension');
  };

  return (
    <>
      <AppBar
        position={'static'}
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.default,
          padding: '10px',
        }}>
        <Toolbar
          sx={{
            minHeight: '48px !important',
            padding: '10px 10px 20px 10px',
            borderBottom: `1.5px solid ${theme.palette.divider}`,
          }}>
          <Box display="flex" alignItems="center" gap={2}>
            <FormGroup>
              <FormControlLabel
                control={<Toggle checked={isEnabled} />}
                onChange={handleToggleChange}
                labelPlacement="start"
                label={
                  <Typography
                    variant="body2"
                    sx={{
                      pr: 1.5,
                      color: theme.palette.text.primary,
                      fontWeight: 700,
                      fontSize: '16px',
                      letterSpacing: '-0.5px',
                    }}>
                    {toggleLabel}
                  </Typography>
                }
                sx={{
                  margin: 0,
                  '& .MuiFormControlLabel-label': {
                    fontSize: '14px',
                  },
                }}
              />
            </FormGroup>
          </Box>

          <Box flexGrow={1} />

          <Box display="flex" alignItems="center" gap={0.5}>
            <IconButton
              size="small"
              sx={{
                color: theme.palette.text.secondary,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                  color: theme.palette.text.primary,
                },
                width: 32,
                height: 32,
              }}
              aria-label="help">
              <HelpOutline fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              sx={{
                color: theme.palette.text.secondary,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                  color: theme.palette.text.primary,
                },
                width: 32,
                height: 32,
              }}
              aria-label="settings">
              <Settings fontSize="small" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopNavigation;

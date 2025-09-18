// core
import React from 'react';

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
  const toggleLabel = isEnabled ? 'Disable Extension' : 'Enable Extension';
  const theme = useTheme();

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <>
      <AppBar
        position={'static'}
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.default,
          padding: '0.6rem',
        }}>
        <Toolbar
          sx={{
            padding: '0.6rem 0.6rem 1.3rem 0.6rem',
            borderBottom: `0.1rem solid ${theme.palette.divider}`,
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
                      fontSize: '1rem',
                      letterSpacing: '-0.03rem',
                    }}>
                    {toggleLabel}
                  </Typography>
                }
                sx={{
                  margin: 0,
                  '& .MuiFormControlLabel-label': {
                    fontSize: '0.875rem',
                  },
                }}
              />
            </FormGroup>
          </Box>

          <Box flexGrow={1} />

          <Box display="flex" alignItems="center" gap={0.5}>
            <IconButton
              size="medium"
              sx={{
                color: theme.palette.text.secondary,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                  color: theme.palette.text.primary,
                },
                width: 35,
                height: 35,
              }}
              aria-label="help">
              <HelpOutline fontSize="medium" />
            </IconButton>

            <IconButton
              size="medium"
              sx={{
                color: theme.palette.text.secondary,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                  color: theme.palette.text.primary,
                },
                width: 35,
                height: 35,
              }}
              aria-label="settings">
              <Settings fontSize="medium" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopNavigation;

import React from 'react';
import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

const Toggle = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 35,
  height: 24,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 3.75, // Adjusted margin to center the 16.5px thumb properly
    transitionDuration: '200ms',
    marginLeft: 4,
    '&.Mui-checked': {
      transform: 'translateX(10.0px)', // Adjusted for 16.5px thumb
      color: '#fff',
      '& .MuiSwitch-thumb': {
        backgroundColor: '#fff !important', // White circle when enabled
        boxShadow: '0px 0px 8.73px 0px rgba(0, 0, 0, 0.25), -4.36px 0px 8.73px 0px rgba(0, 0, 0, 0.09) !important', // Figma spec box-shadow for enabled state
      },
      '& + .MuiSwitch-track': {
        backgroundColor: '#49D68F !important', // Green color for enabled state (Figma spec)
        border: '1.5px solid #3BBB7B !important', // Border color for enabled state (Figma spec)
        opacity: 1,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#4CAF50',
      border: '6px solid #fff',
      boxShadow: '0px 0px 8.73px 0px rgba(0, 0, 0, 0.25), -4.36px 0px 8.73px 0px rgba(0, 0, 0, 0.09) !important',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: '#fff',
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.5,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16.5,
    height: 16.5,
    backgroundColor: '#D6D3DB', // Dark gray for disabled state
    opacity: 1,
    border: '1.09px solid transparent',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  '& .MuiSwitch-track': {
    borderRadius: 24 / 2,
    backgroundColor: '#fff', // White background for disabled state
    border: '1.5px solid #D6D3DB', // Border for disabled state
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border-color'], {
      duration: 200,
    }),
  },
}));

export default Toggle;

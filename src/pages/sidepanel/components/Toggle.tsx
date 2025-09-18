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
  width: '2.19rem',
  height: '1.5rem',
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: '0.2343rem',
    transitionDuration: '200ms',
    marginLeft: '0.25rem',
    '&.Mui-checked': {
      transform: 'translateX(0.625rem)',
      color: '#fff',
      '& .MuiSwitch-thumb': {
        backgroundColor: '#fff',
        boxShadow: '0 0 0.55rem 0 #00000040, -0.27rem 0 0.55rem 0 #00000017',
      },
      '& + .MuiSwitch-track': {
        backgroundColor: '#49D68F',
        border: '0.094rem solid #3BBB7B',
        opacity: 1,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#4CAF50',
      border: '0.375rem solid #fff',
      boxShadow: '0 0 0.55rem 0 #00000040, -0.27rem 0 0.55rem 0 #00000017',
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
    width: '1.03rem',
    height: '1.03rem',
    backgroundColor: '#D6D3DB',
    opacity: 1,
    border: '0.068rem solid transparent',
    boxShadow: '0 0.125rem 0.25rem #0000001a',
  },
  '& .MuiSwitch-track': {
    borderRadius: '0.75rem',
    backgroundColor: '#fff',
    border: '0.094rem solid #D6D3DB',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border-color'], {
      duration: 200,
    }),
  },
}));

export default Toggle;

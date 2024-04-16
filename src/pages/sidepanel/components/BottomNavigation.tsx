import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Brush, Person, Plumbing } from '@mui/icons-material';

interface BottomNavProps {
  value: string;
  tagIsInstalled: boolean;
  onChange: (newValue: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ value, tagIsInstalled, onChange }) => {
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}>
      <BottomNavigationAction
        label="Debugger"
        value="/"
        icon={<Plumbing />}
        sx={{
          '&.Mui-selected': {
            color: 'secondary.main',
          },
        }}
      />
      <BottomNavigationAction
        label="Profile"
        value="/profile"
        disabled={!tagIsInstalled}
        icon={<Person />}
        sx={{
          '&.Mui-selected': {
            color: 'secondary.main',
          },
        }}
      />
      <BottomNavigationAction
        label="Personalization"
        value="/personalization"
        disabled={!tagIsInstalled}
        icon={<Brush />}
        sx={{
          '&.Mui-selected': {
            color: 'secondary.main',
          },
        }}
      />
    </BottomNavigation>
  );
};

export default BottomNav;

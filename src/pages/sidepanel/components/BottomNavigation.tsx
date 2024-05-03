import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Plumbing from '@mui/icons-material/Plumbing';
import Person from '@mui/icons-material/Person';
import Brush from '@mui/icons-material/Brush';
import Description from '@mui/icons-material/Description';

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
      <BottomNavigationAction
        label="Content"
        value="/content"
        disabled={!tagIsInstalled}
        icon={<Description />}
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

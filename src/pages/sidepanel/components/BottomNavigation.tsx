import React from 'react';

import { AutoFixHighOutlined, Person, PestControlOutlined } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { styled } from '@mui/material/styles';
import { appColors } from '@root/src/theme/palette';

interface BottomNavProps {
  value: string;
  onChange: (newValue: string) => void;
}

interface NavigationSection {
  route: string;
  icon: React.ReactElement;
  ariaLabel: string;
}

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1.5, 2),
  cursor: 'default',
  transition: 'none',
  '&:hover': {
    boxShadow: 'none',
    transform: 'none',
  },
}));

const StyledBottomNavigationAction = styled(BottomNavigationAction)<{
  isSelected: boolean;
}>(({ theme, isSelected }) => ({
  flex: 'none',
  minWidth: 0,
  paddingBlock: theme.spacing(1.5),
  backgroundColor: isSelected ? appColors.common.colors.accent : 'transparent',
  borderRadius: theme.spacing(0.5),
  transition: 'none',
  '&.Mui-selected': {
    color: appColors.common.white,
  },
}));

const navigationSections: NavigationSection[] = [
  {
    route: '/',
    icon: <PestControlOutlined />,
    ariaLabel: 'Debug',
  },
  {
    route: '/profile',
    icon: <Person />,
    ariaLabel: 'Profile',
  },
  {
    route: '/personalization',
    icon: <AutoFixHighOutlined />,
    ariaLabel: 'Personalization',
  },
];

export const BottomNav = ({ value, onChange }: BottomNavProps): JSX.Element => {
  return (
    <StyledBottomNavigation value={value} onChange={(_, newValue) => onChange(newValue)}>
      {navigationSections.map(section => {
        const isSelected = value === section.route;
        return (
          <StyledBottomNavigationAction
            key={section.route}
            value={section.route}
            icon={section.icon}
            isSelected={isSelected}
            aria-label={section.ariaLabel}
          />
        );
      })}
    </StyledBottomNavigation>
  );
};

export default BottomNav;

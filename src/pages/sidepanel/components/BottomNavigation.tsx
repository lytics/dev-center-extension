import React from 'react';

import { AutoFixHighOutlined, MonitorHeart, Person, PestControlOutlined } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Tooltip } from '@mui/material';
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

const StyledBottomNavigation = styled(BottomNavigation)(() => ({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: '4.375rem', // 70px (Figma spec)
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '0.625rem', // 10px (Figma spec)
  padding: '0.75rem 1rem', // 12px top/bottom, 16px left/right (Figma spec)
  backgroundColor: 'transparent', // Transparent to show blur behind
  borderTop: '1px solid rgba(255, 255, 255, 0.5)',
  boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)',
  cursor: 'pointer',
  transition: 'none',
  zIndex: 1000,
  isolation: 'isolate', // Create stacking context
  // Blur background using pseudo-element
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(233, 232, 237, 0.4)',
    backdropFilter: 'blur(80px) saturate(200%)',
    WebkitBackdropFilter: 'blur(80px) saturate(200%)',
    zIndex: -1,
  },
  '&:hover': {
    boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)',
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
  color: isSelected ? appColors.common.white : '',

  '&:hover': {
    backgroundColor: isSelected ? 'appColors.common.colors.accent' : 'rgba(136, 72, 249, 0.1)', // Light accent color on hover
  },
}));

const navigationSections: NavigationSection[] = [
  {
    route: '/',
    icon: <MonitorHeart />,
    ariaLabel: 'Status',
  },
  {
    route: '/debug',
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
          <Tooltip key={section.route} title={section.ariaLabel} placement="top" arrow>
            <StyledBottomNavigationAction
              value={section.route}
              icon={section.icon}
              isSelected={isSelected}
              aria-label={section.ariaLabel}
            />
          </Tooltip>
        );
      })}
    </StyledBottomNavigation>
  );
};

export default BottomNav;

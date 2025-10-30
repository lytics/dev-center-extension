import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import { appColors } from '@root/src/theme/palette';

export interface TabItem {
  id: string;
  label: string;
  disabled?: boolean;
}

interface TabNavigationProps {
  tabs: TabItem[];
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const TabsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: '2.5rem', // 40px
  height: '2.5rem', // 40px
  '& .MuiTabs-flexContainer': {
    gap: theme.spacing(1.5), // 12px gap between tabs
  },
  '& .MuiTabs-indicator': {
    display: 'none', // Hide the default underline indicator
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  minHeight: '2rem', // 32px
  height: '2rem', // 32px
  padding: theme.spacing(0.75, 1.25), // 6px top/bottom, 10px left/right
  fontSize: appColors.common.fontSize.baseSmall,
  fontWeight: appColors.common.fontWeight.semiBold,
  fontFamily: appColors.common.fontFamily,
  textTransform: 'none',
  color: appColors.neutral[400],
  backgroundColor: 'transparent',
  borderRadius: theme.spacing(1), // Square pill shape (8px rounded corners)
  minWidth: 'auto',
  transition: theme.transitions.create(['background-color', 'color'], {
    duration: 200,
  }),
  '&.Mui-selected': {
    color: appColors.common.colors.accent, // #8848F9
    backgroundColor: appColors.common.white,
    fontWeight: appColors.common.fontWeight.bold,
  },
  '&.Mui-disabled': {
    color: appColors.neutral[400],
    opacity: 0.4,
  },
  '&:hover:not(.Mui-selected):not(.Mui-disabled)': {
    color: appColors.neutral[600],
    backgroundColor: 'transparent',
  },
}));

export const TabNavigation = ({ tabs, value, onChange }: TabNavigationProps): JSX.Element => {
  return (
    <TabsContainer>
      <StyledTabs value={value} onChange={onChange}>
        {tabs.map(tab => (
          <StyledTab key={tab.id} id={tab.id} label={tab.label} disabled={tab.disabled ?? false} />
        ))}
      </StyledTabs>
    </TabsContainer>
  );
};

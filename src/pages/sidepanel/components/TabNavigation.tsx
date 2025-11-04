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
  padding: `1.5rem ${theme.spacing(2)} 0.5rem`, // 16px top/sides, 8px bottom
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  cursor: 'pointer',
  '& .MuiTabs-flexContainer': {
    gap: theme.spacing(1.5),
  },
  '& .MuiTabs-indicator': {
    display: 'none',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  minHeight: '2rem', // 32px
  height: '2rem', // 32px
  padding: theme.spacing(0.75, 1.25), // 6px top/bottom, 10px left/right
  font: `${appColors.common.fontWeight.semiBold} ${appColors.common.fontSize.baseSmall} ${appColors.common.fontFamily}`,
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

const Divider = styled(Box)(() => ({
  width: 'calc(100% - 1.2rem)', // Full width minus left and right margins (0.6rem each side)
  height: '0.09375rem', // 1.5px
  backgroundColor: `${appColors.neutral[200]}21`, // neutral[200] with 21 hex opacity (13%)
  margin: '0 0.6rem', // 0.6rem (9.6px) horizontal margins
}));

export const TabNavigation = ({ tabs, value, onChange }: TabNavigationProps): JSX.Element => {
  return (
    <>
      <TabsContainer>
        <StyledTabs value={value} onChange={onChange}>
          {tabs.map(tab => (
            <StyledTab key={tab.id} id={tab.id} label={tab.label} disabled={tab.disabled ?? false} />
          ))}
        </StyledTabs>
      </TabsContainer>
      <Divider />
    </>
  );
};

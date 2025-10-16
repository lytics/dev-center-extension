import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';
import TreeDisplay from '@root/src/pages/sidepanel/components/TreeDisplay';

interface ConfigTabProps {
  tagConfig: TagConfigModel;
}

const StyledPanel = styled(Box)(({ theme }) => ({
  width: '100%', // Fill container width (outer frame is 395px with 10px padding on each side = 375px content)
  backgroundColor: '#272728', // Dark background
  borderRadius: theme.spacing(1), // 8px - slightly rounded corners
  padding: theme.spacing(1.25), // 10px
  cursor: 'default',
  transition: 'none',
  '&:hover': {
    boxShadow: 'none',
    transform: 'none',
  },
}));

const TagConfig: React.FC<ConfigTabProps> = ({ tagConfig }) => {
  return (
    <StyledPanel>
      <TreeDisplay data={tagConfig} />
    </StyledPanel>
  );
};

export default TagConfig;

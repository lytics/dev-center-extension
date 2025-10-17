import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';
import TreeDisplay from '@root/src/pages/sidepanel/components/TreeDisplay';

interface ConfigTabProps {
  tagConfig: TagConfigModel;
}

const StyledPanel = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#272728', // Dark background (appColors.common.darkPanel)
  borderTopLeftRadius: theme.spacing(1), // 8px - rounded top-left corner
  borderTopRightRadius: theme.spacing(1), // 8px - rounded top-right corner
  borderBottomLeftRadius: 0, // Sharp bottom-left corner
  borderBottomRightRadius: 0, // Sharp bottom-right corner
  padding: '0.625rem', // 10px inner padding
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

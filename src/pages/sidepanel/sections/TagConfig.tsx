import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { appColors } from '@root/src/theme/palette';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';
import TreeDisplay from '@root/src/pages/sidepanel/components/TreeDisplay';

interface ConfigTabProps {
  tagConfig: TagConfigModel;
}

const StyledPanel = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: appColors.common.darkPanel,
  borderRadius: `${theme.spacing(1)} ${theme.spacing(1)} 0 0`, // 8px top corners, 0px bottom corners (top-left, top-right, bottom-right, bottom-left)
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

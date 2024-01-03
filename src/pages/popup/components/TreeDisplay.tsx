import React from 'react';
import { Box } from '@mui/material';
import ReactJson from 'react-json-view';

interface TreeDisplayProps {
  data: any;
  collapsed?: boolean | number;
}

const TreeDisplay: React.FC<TreeDisplayProps> = ({ data, collapsed }) => {
  return (
    <Box fontSize={'12px'} height={'100%'} overflow={'auto'}>
      <ReactJson
        src={data}
        name={false}
        theme={'codeschool'}
        iconStyle="triangle"
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSize={true}
        indentWidth={4}
        collapsed={collapsed || 1}
        collapseStringsAfterLength={20}
      />
    </Box>
  );
};

export default TreeDisplay;

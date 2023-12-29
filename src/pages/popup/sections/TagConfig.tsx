import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';

interface ConfigTabProps {
  tagConfig: TagConfigModel;
}

const TagConfig: React.FC<ConfigTabProps> = ({ tagConfig }) => {
  useEffect(() => {
    console.log('tagConfig', tagConfig);
  }, [tagConfig]);

  const jsonString = JSON.stringify(tagConfig, null, 2);

  return (
    <Box 
      sx={{
        fontSize: "12px",
        maxHeight: '285px',
        overflow: 'auto', 
      }}>
      <SyntaxHighlighter language="json" style={{ ...materialDark }}>
        {jsonString}
      </SyntaxHighlighter>
    </Box>
  );
};

export default TagConfig;

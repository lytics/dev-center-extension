import React from "react";
import { Box } from "@mui/material";
import ReactJson from 'react-json-view'


interface TreeProps {
  data: any;
  collapsed?: boolean | number;
}

const JSONTree: React.FC<TreeProps> = ({ data, collapsed }) => {
  return (
    <Box
      fontSize={"12px"}
      height={"100%"}
      overflow={"auto"}
    >
      <ReactJson 
        src={data}
        name={false}
        theme={"codeschool"}
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

export default JSONTree;

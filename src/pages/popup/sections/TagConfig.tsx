import React from 'react';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';
import JSONTree from '@root/src/pages/popup/components/jsonTree';

interface ConfigTabProps {
  tagConfig: TagConfigModel;
}

const TagConfig: React.FC<ConfigTabProps> = ({ tagConfig }) => {
  return (
    <JSONTree data={tagConfig} />
  );
};

export default TagConfig;

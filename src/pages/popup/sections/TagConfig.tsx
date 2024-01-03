import React from 'react';
import { TagConfigModel } from '@root/src/shared/models/tagConfigModel';
import TreeDisplay from '@root/src/pages/popup/components/TreeDisplay';

interface ConfigTabProps {
  tagConfig: TagConfigModel;
}

const TagConfig: React.FC<ConfigTabProps> = ({ tagConfig }) => {
  return <TreeDisplay data={tagConfig} />;
};

export default TagConfig;

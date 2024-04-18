import React from 'react';
import TreeDisplay from '@root/src/pages/sidepanel/components/TreeDisplay';

interface ProfileDetailTabProps {
  profile: any;
}

const ProfileDetail: React.FC<ProfileDetailTabProps> = ({ profile }) => {
  return <TreeDisplay data={profile?.data} collapsed={2} />;
};

export default ProfileDetail;

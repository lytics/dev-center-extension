import React from 'react';
import JSONTree from '@root/src/pages/popup/components/jsonTree';


interface ProfileDetailTabProps {
  profile: any;
}

const ProfileDetail: React.FC<ProfileDetailTabProps> = ({ profile }) => {
  return (
    <JSONTree data={profile?.data} collapsed={2} />
  );
};

export default ProfileDetail;
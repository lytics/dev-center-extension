import React, { useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import ProfileHeader from '@root/src/pages/sidepanel/sections/profile/ProfileHeader';
import AudienceMembership from '@root/src/pages/sidepanel/sections/profile/AudienceMembership';
import Attributes from '@root/src/pages/sidepanel/sections/profile/Attributes';
import BehaviorMetrics from '@root/src/pages/sidepanel/sections/profile/BehaviorMetrics';
import Interests from '@root/src/pages/sidepanel/sections/profile/Interests';
import ProfileMetadata from '@root/src/pages/sidepanel/sections/profile/ProfileMetadata';
interface ProfileSummaryTabProps {
  profile: any;
}

const ProfileSummary: React.FC<ProfileSummaryTabProps> = ({ profile }) => {
  const [hasContent, setHasContent] = useState(false);
  const [totalAttributes, setTotalAttributes] = useState(0);
  const [scores, setScores] = useState([]);

  const appendScore = (scoresArray, profileData, propertyName, label) => {
    const propertyValue = profileData?.user?.[propertyName];

    if (propertyValue) {
      return [
        ...scoresArray,
        {
          label: label,
          value: propertyValue / 100,
        },
      ];
    }

    return scoresArray;
  };

  useEffect(() => {
    // total attributes available
    if (profile?.data?.user) {
      setTotalAttributes(Object.keys(profile.data.user).length);
    }

    // populate content (for Interests component)
    if (profile?.data?.user?.lytics_content) {
      setHasContent(true);
    } else {
      setHasContent(false);
    }

    // populate scores (for Behavior component)
    let updatedScores = [];
    updatedScores = appendScore(updatedScores, profile.data, 'score_consistency', 'Consistency');
    updatedScores = appendScore(updatedScores, profile.data, 'score_frequency', 'Frequency');
    updatedScores = appendScore(updatedScores, profile.data, 'score_intensity', 'Intensity');
    updatedScores = appendScore(updatedScores, profile.data, 'score_maturity', 'Maturity');
    updatedScores = appendScore(updatedScores, profile.data, 'score_momentum', 'Momentum');
    updatedScores = appendScore(updatedScores, profile.data, 'score_propensity', 'Propensity');
    updatedScores = appendScore(updatedScores, profile.data, 'score_quantity', 'Quantity');
    updatedScores = appendScore(updatedScores, profile.data, 'score_recency', 'Recency');
    updatedScores = appendScore(updatedScores, profile.data, 'score_volatility', 'Volatility');
    setScores(updatedScores);
  }, [profile]);

  const lastUpdatedText = useMemo(() => {
    const modified = profile?.data?.user?._modified;
    if (!modified) return 'Unknown';

    const updatedTime = new Date(modified);
    const now = new Date();
    const diffMs = now.getTime() - updatedTime.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min. ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;

    return updatedTime.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }, [profile?.data?.user?._modified]);

  const lastAttributeText = useMemo(() => {
    const user = profile?.data?.user;
    if (!user) return 'Unknown';

    const attributes = Object.keys(user).filter(
      key => !key.startsWith('_') && !key.startsWith('score_') && key !== 'segments',
    );

    return attributes.length > 0 ? attributes[0] : 'Unknown';
  }, [profile?.data?.user]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingTop: '0.75rem',
        gap: '0.75rem',
        overflow: 'auto',
        paddingBottom: '5rem',
      }}>
      {/* NEW: Profile Header Component */}
      <ProfileHeader
        lyticsId={profile?.data?.user?._id || 'Unknown'}
        lastUid={profile?.data?.user?._uid || profile?.data?._uid || 'Unknown'}
        completeness={78}
      />

      <AudienceMembership
        audiences={
          profile?.data?.user?.segments || ['anonymous_profiles', 'smt_new', 'all', 'orc_experience_24bd33fc6ab8...']
        }
      />

      <Attributes count={totalAttributes || 46} />

      <BehaviorMetrics
        metrics={
          scores.length > 0
            ? scores.map(score => ({
                label: score.label,
                value: Math.round(score.value * 100),
              }))
            : [
                { label: 'Consistency', value: 0 },
                { label: 'Frequency', value: 0 },
              ]
        }
      />

      <Interests hasData={hasContent} />

      <ProfileMetadata lastUpdated={lastUpdatedText} lastAttribute={lastAttributeText} />
    </Box>
  );
};

export default ProfileSummary;

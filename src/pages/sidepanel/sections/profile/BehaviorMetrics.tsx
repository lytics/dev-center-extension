import React from 'react';
import { Box, Stack, Typography, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { appColors } from '@root/src/theme/palette';
import { appContent } from '@root/src/shared/content/appContent';

interface BehaviorMetric {
  label: string;
  value: number; // 0-100 percentage
}

interface BehaviorMetricsProps {
  metrics: BehaviorMetric[];
  textContent?: typeof appContent.behaviorMetrics;
}

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '21.25rem', // 340px minimum height
  backgroundColor: appColors.common.white,
  borderRadius: theme.spacing(1.5), // 12px
  padding: '1.5rem 1rem', // 24px 16px
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem', // 24px
  cursor: 'default',
  transition: 'none',
  '&:hover': {
    boxShadow: 'none',
    transform: 'none',
  },
}));

const TitleText = styled(Typography)(() => ({
  fontWeight: appColors.common.fontWeight.semiBold,
  fontSize: appColors.common.fontSize.base,
  color: appColors.neutral[900],
}));

const MetricsContainer = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem', // 16px gap between metrics
}));

const MetricRow = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem', // 8px gap between label and progress bar
}));

const MetricLabel = styled(Typography)(() => ({
  fontSize: appColors.common.fontSize.baseSmall,
  fontWeight: appColors.common.fontWeight.medium,
  color: appColors.neutral[900],
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: '100%',
  height: '0.5rem', // 8px
  borderRadius: theme.spacing(0.5),
  backgroundColor: appColors.common.colors.accentLight, // Light purple background
  '& .MuiLinearProgress-bar': {
    backgroundColor: appColors.common.colors.accent, // Solid purple, no gradient
    borderRadius: theme.spacing(0.5),
  },
}));

export const BehaviorMetrics = ({
  metrics,
  textContent = appContent.behaviorMetrics,
}: BehaviorMetricsProps): JSX.Element => {
  return (
    <Container>
      <TitleText>{textContent.title}</TitleText>

      <MetricsContainer>
        {metrics.map((metric, index) => (
          <MetricRow key={index}>
            <MetricLabel>{metric.label}</MetricLabel>
            <StyledLinearProgress
              variant="determinate"
              value={metric.value}
              aria-label={`${metric.label}: ${metric.value}%`}
            />
          </MetricRow>
        ))}
      </MetricsContainer>
    </Container>
  );
};

export default BehaviorMetrics;

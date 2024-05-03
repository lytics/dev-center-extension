// do all of the imports
import React from 'react';
import { Box, LinearProgress, Stack, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';

interface BarStylesProps {
  backgroundGradient: string;
}

const barStyles = makeStyles(() => ({
  linearProgress: ({ backgroundGradient }: BarStylesProps) => ({
    background: '#DCDCEA',
    borderRadius: '2px',
    '& .MuiLinearProgress-bar': {
      background: backgroundGradient,
    },
  }),
}));

interface CustomBarChartProps {
  data: { label: string; value: number }[];
  color1?: string;
  color2?: string;
}

const CustomBarChart: React.FC<CustomBarChartProps> = ({ data, color1, color2 }: CustomBarChartProps) => {
  const classes = barStyles({
    backgroundGradient: `linear-gradient(75deg, ${color1 || '#6C31B8'} 60%, ${color2 || '#AB32DE'} 100%)`,
  });

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  };

  return (
    <Stack spacing={0.5}>
      {data.map((item, index) => (
        <Stack key={index} spacing={1} direction={'row'} ml={1} mr={1}>
          <Box
            sx={{
              width: '200px',
              borderRadius: '2px',
              // background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 80%, #D8D8E5 100%)',
            }}>
            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'right' }}>
              {truncateString(item.label, 20)}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={Math.round(item.value * 100)}
            sx={{
              width: '100%',
              height: '1rem',
            }}
            className={classes.linearProgress}
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default CustomBarChart;

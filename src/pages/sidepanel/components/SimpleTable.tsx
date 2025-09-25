import React from 'react';

import { Circle } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { appColors } from '@root/src/theme/palette';

interface TableRow {
  label: string;
  position?: string;
  value?: string;
  fancyValue?: React.ReactNode;
}

interface SimpleTableProps {
  rows: TableRow[];
}

const StyledContainer = styled(Grid)(() => ({
  cursor: 'default',
  transition: 'none',
  '&:hover': {
    boxShadow: 'none',
    transform: 'none',
  },
}));

const StyledLabelTypography = styled(Typography)(() => ({
  fontWeight: appColors.common.fontWeight.semiBold,
  fontSize: appColors.common.fontSize.baseSmall,
  lineHeight: 'normal',
  textAlign: 'left',
}));

const StyledValueTypography = styled(Typography)(({ theme }) => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: appColors.common.fontSize.baseSmall,
  lineHeight: 'normal',
  fontWeight: appColors.common.fontWeight.medium,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  textAlign: 'left',
}));

const StyledCircle = styled(Circle)(() => ({
  fontSize: '0.5rem',
  color: appColors.toggle.active,
}));

const SimpleTable: React.FC<SimpleTableProps> = ({ rows }) => {
  return (
    <StyledContainer container spacing={2}>
      {rows.map((row, index) => (
        <React.Fragment key={index}>
          <Grid item xs={row.position === 'top' ? 12 : 3.5}>
            <StyledLabelTypography variant="subtitle2">{row.label}</StyledLabelTypography>
          </Grid>
          <Grid item xs={row.position === 'top' ? 12 : 8.5}>
            {row.fancyValue ? (
              row.fancyValue
            ) : (
              <StyledValueTypography variant="body2">
                <StyledCircle />
                {row.value}
              </StyledValueTypography>
            )}
          </Grid>
        </React.Fragment>
      ))}
    </StyledContainer>
  );
};

export default SimpleTable;

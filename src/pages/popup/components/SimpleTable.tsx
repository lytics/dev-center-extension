import React from 'react';
import { Grid, Divider, Typography } from '@mui/material';

interface TableRow {
  label: string;
  value: string;
  fancyValue?: React.ReactNode;
}

interface SimpleTableProps {
  rows: TableRow[];
}

const SimpleTable: React.FC<SimpleTableProps> = ({ rows }) => {
  return (
    <Grid container spacing={1}>
      {rows.map((row, index) => (
        <React.Fragment key={index}>
          <Grid item xs={4}>
            <Typography variant="subtitle2" pr={1} align={'right'} sx={{ fontWeight: 600 }}>
              {row.label}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            {row.fancyValue ? (
              row.fancyValue
            ) : (
              <Typography variant="body2" align={'left'}>
                {row.value}
              </Typography>
            )}
          </Grid>
          {index !== rows.length - 1 && ( // Add a divider unless it's the last row
            <Grid item xs={12}>
              <Divider />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default SimpleTable;

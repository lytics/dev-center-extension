import React from 'react';
import { Grid, Divider, Typography } from '@mui/material';

interface TableRow {
  label: string;
  position?: string;
  value?: string;
  fancyValue?: React.ReactNode;
}

interface SimpleTableProps {
  rows: TableRow[];
}

const SimpleTable: React.FC<SimpleTableProps> = ({ rows }) => {
  return (
    <Grid container spacing={1} pl={1} pr={1}>
      {rows.map((row, index) => (
        <React.Fragment key={index}>
          <Grid item xs={row.position === 'top' ? 12 : 3.5}>
            <Typography variant="subtitle2" pr={1} align={'left'} sx={{ fontWeight: 600 }}>
              {row.label}
            </Typography>
          </Grid>
          <Grid item xs={row.position === 'top' ? 12 : 8.5}>
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

import React from 'react';
import { LinearProgress, CircularProgress } from '@mui/material';

const Progress = ({ value }) => {
  return (
    <>
    <p>This is determinate linear Progress bar:</p>
      <div>
        <LinearProgress variant="determinate" value={value} />
      </div>
    <p>This is determinate circular Progress bar:</p>
      <div>
        <CircularProgress variant="determinate" value={value} />
      </div>
    <p>This is indeterminate Progress bar (circular):</p> 
        <CircularProgress /> 
    </>
  );
};

export default Progress;
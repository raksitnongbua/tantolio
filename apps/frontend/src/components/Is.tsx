import React from 'react';
import { Box, Typography } from '@material-ui/core';
const Is = () => {
  return (
    <>
      <Box display="flex">
        <Typography variant="h3" color="textPrimary">
          raksit
        </Typography>
        <Typography variant="h3" color="secondary">
          .is()
        </Typography>
      </Box>
      <Box my={1}>
        <Typography variant="h5" color="secondary">
          Raksit Nongbua
        </Typography>
      </Box>
      <Typography variant="h6" color="textSecondary">
        Web Developer ,
        <br /> Game Developer.
      </Typography>
    </>
  );
};

export default Is;

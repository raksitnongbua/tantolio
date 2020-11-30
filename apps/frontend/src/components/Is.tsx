import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Bounce } from 'react-reveal';
const Is = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box>
        <Bounce right>
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
        </Bounce>
      </Box>
    </Box>
  );
};

export default Is;

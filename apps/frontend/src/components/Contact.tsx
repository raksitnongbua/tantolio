import { Box, Typography } from '@material-ui/core';
import React from 'react';

const Contact = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box display="flex" my={1}>
        <Typography variant="h3" color="textPrimary">
          contact
        </Typography>
        <Typography variant="h3" color="secondary">
          .me()
        </Typography>
      </Box>
      <Box my={1}>
        <Typography variant="body1" color="textSecondary">
          180/3 Jaransanitwong 24 Banchanglor Bangkok noi, Bangkok
          <br />
          090-970-8163
          <br />
          tan.raksit@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;

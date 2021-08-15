import { Box, Typography } from '@material-ui/core';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
const Contact = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <ScrollAnimation animateIn="flipInX" animateOut="flipOutX">
        <Box display="flex" my={1}>
          <Typography variant="h3" color="textPrimary">
            contact
            <Typography variant="h3" color="secondary" component="span">
              .me()
            </Typography>
          </Typography>
        </Box>
        <Box my={1}>
          <Typography variant="body1" color="textSecondary">
            Jaransanitwong 24 Banchanglor Bangkok noi, Bangkok
            <br />
            090-970-8163
            <br />
            tan.raksit@gmail.com
          </Typography>
        </Box>
      </ScrollAnimation>
    </Box>
  );
};

export default Contact;

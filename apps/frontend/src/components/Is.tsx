import React from 'react';
import { Box, Typography } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';

const Is = () => {
  return (
    <Box
      minHeight='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
    >
      <Box>
        <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
          <Box display='flex'>
            <Typography variant='h3' color='textPrimary'>
              raksit
              <Typography variant='h3' color='secondary' component='span'>
                .is()
              </Typography>
            </Typography>
          </Box>
          <Box my={1}>
            <Typography variant='h5' color='secondary'>
              Raksit Nongbua
            </Typography>
          </Box>
          <Typography variant='h6' color='textSecondary'>
            Front-end Developer,
            <br />
            Web Developer,
            <br /> Game Developer.
          </Typography>
        </ScrollAnimation>
      </Box>
    </Box>
  );
};

export default Is;

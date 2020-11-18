import { Box, Typography } from '@material-ui/core';
import React from 'react';

const About = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box display="flex" my={1}>
        <Typography variant="h3" color="textPrimary">
          about
        </Typography>
        <Typography variant="h3" color="secondary">
          .me()
        </Typography>
      </Box>
      <Box my={2}>
        <Typography variant="body1" color="textSecondary">
          &nbsp;&nbsp;I am developer. My coding guideline is "coding is as
          simple as writing!" for easy to reading included fixing. I have
          experience to make a game and a web. I am quick learner and always
          ready to adapt to working as a team. I am easy going. I can get along
          with anybody. I am ready to improve my skills all the time. My hobbies
          are play the game, watching movies and listening music. I would like
          to have a good job which brings a stable income, have security and a
          family
        </Typography>
      </Box>
    </Box>
  );
};

export default About;

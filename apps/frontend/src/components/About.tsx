import { Box, Typography } from '@material-ui/core';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const resumeDownloadLink =
  'https://drive.google.com/file/d/1htIXwum3mSbtEL1mMlSicufU9xtEHn76/view?usp=sharing';
const About = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Box my={1}>
          <Typography variant="h3" color="textPrimary">
            about
            <Typography variant="h3" component="span" color="secondary">
              .me()
            </Typography>
          </Typography>
        </Box>
        <Box my={2}>
          <Typography variant="body1" color="textSecondary">
            &nbsp;&nbsp;I am developer. My coding guideline is
            <span style={{ color: '#eaf076' }}>
              &nbsp;"coding is as simple as writing!"
            </span>
            &nbsp;for easy to reading included fixing. I have experience to make
            a game and a web. I am quick learner and always ready to adapt to
            working as a team. I am easy going. I can get along with anybody. I
            am ready to improve my skills all the time. My hobbies are play the
            game, watching movies and listening music. I would like to have a
            good job which brings a stable income, have security and a family
          </Typography>
          <br />
          <a href={resumeDownloadLink} style={{ textDecoration: 'none' }}>
            <Typography variant="body1" color="textSecondary">
              resume
              <Typography variant="body1" component="span" color="secondary">
                .download()
              </Typography>
            </Typography>
          </a>
        </Box>
      </ScrollAnimation>
    </Box>
  );
};

export default About;

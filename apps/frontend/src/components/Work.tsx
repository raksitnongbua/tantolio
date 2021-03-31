import { Box, Typography } from '@material-ui/core';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const highlightColor = '#70c554';
const commentColor = '#636467';
const subHeaderColor = '#fff457';

const Work = () => {
  return (
    <Box
      minHeight='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
    >
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <Box display='flex' my={1}>
          <Typography variant='h3' color='textPrimary'>
            work
            <Typography variant='h3' color='secondary' component='span'>
              .exp()
            </Typography>
          </Typography>
        </Box>
        <Typography variant='h6' color='textSecondary'>
          @Bitkub Online Co., Ltd.
          <span style={{ color: commentColor }}>(2021-Present)</span>
        </Typography>
        <Box mt={1} mb={4}>
          <Typography variant='body1' color='textSecondary'>
            <span style={{ color: subHeaderColor }}>Front-End Developer </span>
            <br />
            Develop main web page of&nbsp;
            <a
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: highlightColor }}
              href='https://bitkub.com'
            >
              Bitkub
            </a>
            , It's mainly dev in the trading feature
          </Typography>
        </Box>
        <Typography variant='h6' color='textSecondary'>
          @ProGaming Co., Ltd.
          <span style={{ color: commentColor }}>(2016-2021)</span>
        </Typography>
        <Box my={1}>
          <Typography variant='body1' color='textSecondary'>
            <span style={{ color: subHeaderColor }}>Web Developer </span>
            <br />
            In some projects has commissioned develop only front-end or only
            back-end or both depending on the resources of The company
            <br />
            For the&nbsp;
            <span style={{ textDecoration: 'underline' }}>Front-end</span>, I
            have to develop the entire user interface work with the designer
            via&nbsp;
            <span style={{ color: highlightColor }}>Adobe XD</span> or&nbsp;
            <span style={{ color: highlightColor }}>Figma.</span>
            <br />
            Using&nbsp;
            <span style={{ color: highlightColor }}>
              Node.js, ReactJS, Material UI CSS, Formik, Storybook,
            </span>
            &nbsp;And also have been used&nbsp;
            <span style={{ color: highlightColor }}>Redux</span> for some
            projects
            <br />
            <br />
            <span style={{ textDecoration: 'underline' }}>
              Back-end develop
            </span>
            &nbsp;APIs Using&nbsp;
            <span style={{ color: highlightColor }}>
              Express, Firebase Cloud Functions,
            </span>
            &nbsp;As for Database management Using&nbsp;
            <span style={{ color: highlightColor }}>
              Firebase Firestore, MongoDB, ParseServer, GhaphQL, MinIO
            </span>
            &nbsp;and&nbsp;<span style={{ color: highlightColor }}>AWS</span>
          </Typography>
          <br />
          <Typography variant='body1' color='textSecondary'>
            <span style={{ color: subHeaderColor }}>Game Developer</span>
            <br />
            Develop an entire game system using Unity for IOS, Android, and PC
            platforms with&nbsp;
            <span style={{ color: highlightColor }}>C# language</span>
            &nbsp;also&nbsp;
            <span style={{ color: highlightColor }}>Unity Redux</span>&nbsp;for
            data management. As for Game on the web, At first, using&nbsp;
            <span style={{ color: highlightColor }}>Unity tiny Typescript</span>
            &nbsp;and included&nbsp;
            <span style={{ color: highlightColor }}>ReactJS</span> to solve the
            problem of not supported textfield of Unity tiny beta, After has
            changed the program to&nbsp;
            <span style={{ color: highlightColor }}>Cocos typescript</span>
            &nbsp;because the Unity tiny still is a beta version and also
            use&nbsp;
            <span style={{ color: highlightColor }}>
              Firebase Firestore Database
            </span>
            &nbsp;to store data
          </Typography>
          <Typography variant='caption'>
            <span style={{ color: commentColor }}>
              {'/* working on agile methodology */'}
            </span>
          </Typography>
        </Box>
        <Box my={2}>
          <Typography variant='h6' color='textSecondary'>
            Education <span style={{ color: commentColor }}>(2013-2016)</span>
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            Computer Game Multimedia in Information Technology
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            Rangsit University 3.28 GPA
          </Typography>
        </Box>
      </ScrollAnimation>
    </Box>
  );
};

export default Work;

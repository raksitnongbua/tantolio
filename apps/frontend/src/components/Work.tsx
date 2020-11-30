import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { Fade } from 'react-reveal';

const Work = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Fade cascade right duration={1000}>
        <Box display="flex" my={1}>
          <Typography variant="h3" color="textPrimary">
            work
          </Typography>
          <Typography variant="h3" color="secondary">
            .exp()
          </Typography>
        </Box>
        <Typography variant="h6" color="textSecondary">
          @ProGaming Co., Ltd. (2016-Present)
        </Typography>
        <Box my={1}>
          <Typography variant="body1" color="textSecondary">
            - Web Developer <br />
            &nbsp;&nbsp;In some projects has commissioned develop only front-end
            or only back-end or both depending on the resources of The company
            For the Front-end, I have to develop the entire user interface work
            with the designer via Adobe XD or Figma. Using Node.js, ReactJS,
            Material UI CSS, Formik, Storybook, And also have been used Redux
            for some projects Back-end develop APIs Using Express, Firebase
            Cloud Functions, As for Database management Using Firebase
            Firestore, MongoDB, ParseServer, GhaphQL, MinIO and AWS
          </Typography>
          <Typography variant="body1" color="textSecondary">
            - Game Developer
            <br />
            &nbsp;&nbsp;Develop an entire game system using Unity for IOS,
            Android, and PC platforms with C# language also Unity Redux for data
            management. As for Game on the web, At first, using Unity tiny
            Typescript and included ReactJS to solve the problem of not
            supported textfield of Unity tiny beta, After has changed the
            program to Cocos typescript because the Unity tiny still is a beta
            version and also use Firebase Firestore Database to store data.
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {'/* working on agile methodology */'}
          </Typography>
        </Box>
        <Typography variant="h6" color="textSecondary">
          Education (2013-2016)
        </Typography>
        <Box my={1}>
          <Typography variant="body1" color="textSecondary">
            Computer Game Multimedia in Information Technology
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Rangsit University 3.28 GPA
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
};

export default Work;

import { Typography, Container, Box } from '@material-ui/core';
import React from 'react';
const Home = () => {
  return (
    <div>
      <Container maxWidth="md">
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
      </Container>
    </div>
  );
};

export default Home;

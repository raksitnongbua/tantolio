import { Box, Container, Grid } from '@material-ui/core';
import Is from '../components/Is';
import React from 'react';
import Header from '../components/Header';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <div>
      <Header elementVisible={''} />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={1}>
            <Box position="fixed" py={2}>
              <img
                alt="line"
                src={`${process.env.PUBLIC_URL}/images/line.png`}
              />
            </Box>
          </Grid>
          <Grid item xs={11}>
            <div id="containerElement">
              <Element className="element" name="is">
                <Is />
              </Element>
              <Element className="element" name="work">
                <Work />
              </Element>
              <Element className="element" name="about">
                <About />
              </Element>
              <Element className="element" name="contact">
                <Contact />
              </Element>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

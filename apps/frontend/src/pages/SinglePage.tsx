import { Container } from '@material-ui/core';
import Is from '../components/Is';
import React from 'react';
import Header from '../components/Header';
const Home = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Is />
      </Container>
    </div>
  );
};

export default Home;

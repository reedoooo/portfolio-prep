// Home.js
import React, { Component } from 'react';
import { Box } from '@chakra-ui/react';
import './Home.css'; // assuming the CSS file is in the same directory
import MainContent from './MainContent';
// import Header from '../../components/headings/header/Header';

class HomePage extends Component {
  render() {
    return (
      <Box
        // w={'100vw'}
        w={'100%'}
        as={'main'}
        className="home-container"
        py={4}
      >
        {/* <Header /> */}
        <MainContent />
      </Box>
    );
  }
}

export default HomePage;

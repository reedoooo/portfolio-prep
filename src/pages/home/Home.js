import React, { Component } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from '../../components/headings/header/Header.js';
import HomeComponent from './HomeComponent';
import ProfileComponent from '../profile/ProfilePage.js';
import NavContainer from '../../containers/navbar/NavContainer';
import ProjectsHomeContainer from '../projects/ProjectsHomeContainer.js';
import ResumeHomePage from '../resume/ResumeHomePage.js';
import './Home.css'; // assuming the CSS file is in the same directory

class Home extends Component {
  render() {
    return (
      <main className="home-container">
        <Box w={'100vw'}>
          <Header style={{ display: 'block', minHeight: '100vh' }} />
          <NavContainer
            style={{
              display: 'flex',
              zIndex: '100',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100vw',
              height: '20vw',
              alignContent: 'center',
              top: '0',
              backgroundColor: 'black',
            }}
          />
          <Flex flexDirection="column" h={'600vh'}>
            <HomeComponent style={{ display: 'block', minHeight: '100vh' }} />
            <ProfileComponent
              style={{ display: 'block', minHeight: '100vh' }}
            />
            <ResumeHomePage style={{ display: 'block', minHeight: '100vh' }} />
            <ProjectsHomeContainer
              style={{ display: 'block', minHeight: '100vh' }}
            />
          </Flex>
        </Box>
      </main>
    );
  }
}

export default Home;

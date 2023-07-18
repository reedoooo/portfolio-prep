import React, { Component } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from '../../components/headings/header/Header.js';
import HomeComponent from './HomeComponent';
import ProfileComponent from '../profile/ProfilePage.js';
import NavContainer from '../../containers/navbar/NavContainer';
// import ResumeNew from "../resume/ResumeComponent.js";
import ProjectsHomeContainer from '../projects/ProjectsHomeContainer.js';
// import ResumeHomeContainer from "../resume/ResumeHomeContainer.js";
// import ResumeHomeComponent from "../resume/ResumeHomeComponent.js";
import ResumeHomePage from '../resume/ResumeHomePage.js';

class Home extends Component {
  render() {
    return (
      <main>
        <Box w={'100vw'}>
          {/* ---------         ---------              ---------       ---------*/}
          {/* --------------------------------------- Header --------------------------------------- */}
          {/* ---------         ---------              ---------       ---------*/}
          <Header style={{ display: 'block', minHeight: '100vh' }} />
          {/* ---------         ---------              ---------       ---------*/}
          {/* --------------------------------------- Navbar --------------------------------------- */}
          {/* ---------         ---------              ---------       ---------*/}
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
            {/* ---------         ---------              ---------       ---------*/}
            {/* --------------------------------------- Home section --------------------------------------- */}
            {/* ---------         ---------              ---------       ---------*/}
            <HomeComponent style={{ display: 'block', minHeight: '100vh' }} />
            {/* ---------         ---------              ---------       ---------*/}
            {/* --------------------------------------- Profile section --------------------------------------- */}
            {/* ---------         ---------              ---------       ---------*/}
            <ProfileComponent
              style={{ display: 'block', minHeight: '100vh' }}
            />
            {/* ---------         ---------              ---------       ---------*/}
            {/* --------------------------------------- Resume Section --------------------------------------- */}
            {/* ---------         ---------              ---------       ---------*/}
            <ResumeHomePage style={{ display: 'block', minHeight: '100vh' }} />
            {/* ---------         ---------              ---------       ---------*/}
            {/* --------------------------------------- Projects Section --------------------------------------- */}
            {/* ---------         ---------              ---------       ---------*/}
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

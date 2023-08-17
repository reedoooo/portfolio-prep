import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import HomeComponent from './HomeComponent';
import ResumeHomePageSection from '../resume/ResumeHomePageSection.js';
import ProfileHomePageSection from '../profile/ProfileHomePageSection';
import ProjectsHomePageSection from '../projects/ProjectsHomePageSection';

const MainContent = () => (
  <Flex flexDirection="column" h={'400vh'}>
    <Box mb={5}>
      <HomeComponent minHeight="100vh" />
    </Box>
    <Box mb={5} id="profileSection">
      {' '}
      {/* Added the id here */}
      <ProfileHomePageSection minHeight="100vh" />
    </Box>
    <Box mb={5} id="resumeSection">
      <ResumeHomePageSection minHeight="120vh" />
    </Box>
    <Box id="projectsSection">
      <ProjectsHomePageSection minHeight="100vh" />
    </Box>
  </Flex>
);

export default MainContent;

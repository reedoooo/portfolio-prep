// ProjectsHomePageContent.js
import React from 'react';
import { Box, ScaleFade } from '@chakra-ui/react';
import ProjectHomeList from './ProjectHomeList';
import ProjectDetailsModal from '../../../components/modals/Modal_ProjectDetails';

const ProjectsHomeContent = ({ projects, onDetails, showDetails, onHide }) => (
  <Box
    as="section"
    id="projects-home-content"
    p={'1rem'}
    display={'flex'}
    flexDirection={'column'}
    flexGrow={'1'}
    alignItems={'flex-start'}
    justifyContent={'flex-start'}
  >
    <ScaleFade initialScale={0.9} in={true}>
      <ProjectHomeList projects={projects} onDetails={onDetails} />
      <ProjectDetailsModal show={showDetails} onHide={onHide} />
    </ScaleFade>
  </Box>
);

export default ProjectsHomeContent;

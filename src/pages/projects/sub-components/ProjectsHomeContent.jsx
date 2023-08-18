// ProjectsHomePageContent.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import ProjectHomeList from './ProjectHomeList';
import ProjectDetailsModal from '../../../components/modals/Modal_ProjectDetails';

const ProjectsHomeContent = ({ projects, onDetails, showDetails, onHide }) => (
  <Box
    as="section"
    id="projects-home-content"
    p={'1rem'}
    display={'flex'}
    flexGrow={'1'}
    height={'100%'}
    width={'100%'}
  >
    <ProjectHomeList projects={projects} onDetails={onDetails} />
    <ProjectDetailsModal show={showDetails} onHide={onHide} />
  </Box>
);

export default ProjectsHomeContent;

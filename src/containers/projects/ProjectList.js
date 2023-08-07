import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import ProjectItem from '../../components/projects/ProjectItem';

const ProjectList = ({ projects, onDetails }) => (
  <Grid
    className="project-list"
    templateColumns={{
      base: 'repeat(auto-fit, minmax(200px, 1fr))',
      md: 'repeat(auto-fit, minmax(240px, 1fr))',
    }}
    gap={6}
  >
    {projects.map((project, index) => (
      <GridItem key={index} style={{ minHeight: '200px', maxHeight: '400px' }}>
        <ProjectItem project={project} onDetails={onDetails} />
      </GridItem>
    ))}
  </Grid>
);

export default ProjectList;

// import React from 'react';
// import ProjectItem from './ProjectItem';

// const ProjectList = ({ projects, onDetails }) => (
//   <div>
//     {projects.map((project, index) =>
//       <ProjectItem key={index} project={project} onDetails={onDetails} />
//     )}
//   </div>
// );

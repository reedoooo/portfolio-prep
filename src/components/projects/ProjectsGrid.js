import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import ProjectItem from '../../containers/projects/sub-components/ProjectItem';

const ProjectsGrid = ({
  filteredProjects,
  bgColor,
  detailsModalShowHandler,
}) => (
  <Grid
    templateColumns={{
      base: 'repeat(auto-fit, minmax(200px, 1fr))',
      md: 'repeat(auto-fit, minmax(240px, 1fr))',
    }}
    gap={6}
  >
    {filteredProjects.length > 0 &&
      filteredProjects.map((project, index) => (
        <GridItem
          key={index}
          style={{ minHeight: '200px', maxHeight: '400px' }}
        >
          <ProjectItem
            project={project}
            bgColor={bgColor}
            detailsModalShowHandler={detailsModalShowHandler}
          />
        </GridItem>
      ))}
  </Grid>
);

export default ProjectsGrid;

import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import ProjectHomeItem from './ProjectHomeItem';

const ProjectHomeList = ({ projects, onDetails }) => {
  const [itemHeight, setItemHeight] = useState(0);
  const middleRef = useRef(null);

  useEffect(() => {
    if (middleRef.current) {
      setItemHeight(middleRef.current.offsetHeight);
    }
  }, [middleRef]);

  return (
    <Container maxW="container.lg" id="projects-home-list">
      <Grid
        templateColumns={{
          sm: 'repeat(auto-fit, minmax(200px, 1fr))',
          md: 'repeat(auto-fit, minmax(240px, 1fr))',
          lg: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
        gap={6}
        className="project-home-list"
      >
        {projects.slice(0, 3).map((project, index) => (
          <GridItem key={index} ref={index === 2 ? middleRef : null}>
            <Box style={{ height: itemHeight, minHeight: '45vh' }}>
              <ProjectHomeItem project={project} onDetails={onDetails} />
            </Box>{' '}
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectHomeList;

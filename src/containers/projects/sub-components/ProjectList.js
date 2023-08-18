import { Grid, GridItem, Box } from '@chakra-ui/react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects, onDetails }) => (
  <Box
    mt={6}
    id={'projectcontainer-project-list-container'}
    bg="customColors.translucentQuaternary901"
    p={4}
    borderRadius="md"
    boxShadow="lg"
  >
    <Grid
      templateColumns={{
        base: 'repeat(auto-fill, minmax(200px, 1fr))',
        md: 'repeat(auto-fill, minmax(240px, 1fr))',
      }}
      gap={6}
    >
      {projects.map((project, index) => (
        <GridItem key={index}>
          <ProjectItem project={project} onDetails={onDetails} />
        </GridItem>
      ))}
    </Grid>
  </Box>
);

export default ProjectList;

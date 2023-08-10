import { Grid, GridItem, Box } from '@chakra-ui/react';
import ProjectItem from '../../components/projects/ProjectItem';

const ProjectList = ({ projects, onDetails }) => (
  <Box
    mt={6}
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
        <GridItem
          key={index}
          // style={{ minHeight: '100vh', maxHeight: '110vh' }}
        >
          <ProjectItem project={project} onDetails={onDetails} />
        </GridItem>
      ))}
    </Grid>
  </Box>
);

export default ProjectList;

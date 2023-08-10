import { Box, Heading, Divider } from '@chakra-ui/react';

const ProjectsHeader = () => (
  <Box width="90%" minH="10vh" mt={8} flexGrow={1}>
    <Heading as="h2" size="xl" textAlign="center" mb={4} color={'white'}>
      Projects Section
    </Heading>
    <Divider borderColor={'red.500'} />
  </Box>
);

export default ProjectsHeader;

import { Box, Heading, Divider } from '@chakra-ui/react';

const ResumeHeader = () => (
  <Box width="90%" minH="10vh" mt={8} flexGrow={1}>
    <Heading as="h2" size="xl" textAlign="center" mb={4}>
      Resume Section
    </Heading>
    <Divider borderColor={'red.500'} />
  </Box>
);

export default ResumeHeader;

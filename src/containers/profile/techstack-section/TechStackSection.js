import { Box, Flex } from '@chakra-ui/react';
import Techstack from '../../../components/softwareSkills/TechStack.js';
const TechStackSection = () => (
  <Flex
    width="100%"
    flexDirection={{ base: 'column-reverse', md: 'column' }}
    justifyContent="center"
    alignItems="center"
    className="techstack-section-container"
  >
    <Box width="90%" mt={8} height="50%" flexGrow={1}>
      <Techstack />
    </Box>
  </Flex>
);

export default TechStackSection;

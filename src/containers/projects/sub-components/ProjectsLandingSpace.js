import {
  Box,
  Heading,
  Text,
  Icon,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaArrowDown } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const ProjectsLandingSpace = () => {
  const headingSize = useBreakpointValue({ base: 'xl', md: '2xl', sm: 'lg' });
  const textSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Box
      w="100%"
      h="100vh"
      position="relative"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="customColors.translucentQuaternary900"
        zIndex="-1"
      ></Box>

      <Heading mb={4} size={headingSize} mx={'auto'}>
        Crafting Digital Solutions
      </Heading>
      <Text fontSize={textSize} mb={8} px={4} textAlign="center">
        Discover a collection of projects where innovation meets excellence.
      </Text>
      <Flex align="center" direction="column">
        <Text fontSize="sm">Scroll to Explore</Text>
        <ScrollLink to="contentSection" smooth={true} duration={500}>
          <Icon as={FaArrowDown} w={6} h={6} mt={2} cursor="pointer" />
        </ScrollLink>
      </Flex>
    </Box>
  );
};

export default ProjectsLandingSpace;

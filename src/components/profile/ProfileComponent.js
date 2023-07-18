import React from 'react';
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react';
import Techstack from '../softwareSkills/TechStack.js';

const ProfileComponent = () => {
  const [isLargerThanMd] = useMediaQuery('(min-width: 768px)');

  const bg = isLargerThanMd
    ? 'linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(12, 8, 24, 0.904))'
    : 'base';
  // const bg = useBreakpointValue({ base: "base", md: "rgba(173, 216, 230, 0.7)" });
  const color = isLargerThanMd ? 'white' : 'black';

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      width="100%"
      flexDirection="column"
      background={bg}
      color={color}
    >
      <Container centerContent marginTop={8}>
        <Heading as="h2" size="xl" textAlign="center" mb={4}>
          Profile Section
        </Heading>
        <Divider borderColor={'red.500'} />
        <Heading as="h3" size="md" mt={4}>
          Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </Heading>
      </Container>
      <Flex
        width="100%"
        flexDirection={{ base: 'column-reverse', md: 'column' }}
        height="calc(100vh - 120px)" // Adjust the value 120px according to your heading and divider height
        justifyContent="center"
        alignItems="center"
      >
        <Box width="90%" mt={8} height="50%" flexGrow={1}>
          <Techstack />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ProfileComponent;

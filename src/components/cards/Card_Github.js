import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Box, Heading, Flex } from '@chakra-ui/react';

function Github() {
  return (
    <Flex
      justifyContent="center"
      paddingBottom="10px"
      flexDirection="column"
      alignItems="center"
    >
      <Heading as="h1" size="xl" textAlign="center" paddingBottom="20px">
        Days I{' '}
        <Box as="strong" color="purple.500">
          Code
        </Box>
      </Heading>
      <GitHubCalendar
        username="reedoooo"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Flex>
  );
}

export default Github;

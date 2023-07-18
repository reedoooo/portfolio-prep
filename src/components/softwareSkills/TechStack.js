import {
  Grid,
  GridItem,
  Box,
  Flex,
  Icon,
  Heading,
  Text,
  AspectRatio,
} from '@chakra-ui/react';
import React from 'react';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from 'react-icons/di';
import { SiFirebase, SiNextdotjs } from 'react-icons/si';

function Techstack() {
  return (
    // <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
    // <GridItem
    //   display="flex"
    //   justifyContent="center"
    //   alignItems="center"
    //   backgroundColor="transparent"
    // >
    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
      <GridItem
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="transparent"
      >
        <Box maxWidth={{ base: '100%', md: '100%' }} w="full">
          <Heading as="h4" size="lg" color={'white'}>
            About Me
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'xl' }}
            color={'white'}
            textAlign={'left'}
            lineHeight={'9'}
          >
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Ut enim ad minim veniam.
          </Text>
        </Box>
      </GridItem>
      <GridItem>
        <Box>
          <Heading as="h4" size="lg" color={'white'}>
            Tech Skills
          </Heading>
        </Box>
        <Grid
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(3, 1fr)"
          gap={4}
        >
          <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={DiJavascript1} boxSize={8} />
            </Flex>
          </GridItem>
          <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={DiJavascript1} boxSize={8} />
            </Flex>
          </GridItem>
          <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={DiNodejs} boxSize={8} />
            </Flex>
          </GridItem>
          <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={DiReact} boxSize={8} />
            </Flex>
          </GridItem>
          <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={DiMongodb} boxSize={8} />
            </Flex>
          </GridItem>
          <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={SiNextdotjs} boxSize={8} />
            </Flex>
          </GridItem>
          <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={DiGit} boxSize={8} />
            </Flex>
          </GridItem>
          <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={SiFirebase} boxSize={8} />
            </Flex>
          </GridItem>
          <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={DiPython} boxSize={8} />
            </Flex>
          </GridItem>
          {/* <GridItem
            as={Flex}
            justifyContent="center"
            alignItems="center"
            className="tech-icons"
          >
            <Icon as={SiFirebase} boxSize={8} />
          </GridItem>
          <GridItem
            as={Flex}
            justifyContent="center"
            alignItems="center"
            className="tech-icons"
          >
            <Icon as={DiPython} boxSize={8} />
          </GridItem> */}
        </Grid>
      </GridItem>{' '}
      <GridItem></GridItem>
    </Grid>
  );
}

export default Techstack;

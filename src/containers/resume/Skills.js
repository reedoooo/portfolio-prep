import { Box, Flex, Grid, GridItem, VStack } from '@chakra-ui/react';
import AboutMe from '../../components/softwareSkills/AboutMe';
import TechSkills from '../../components/softwareSkills/TechSkills';

const Skills = () => {
  return (
    <VStack
      align="start"
      mt={10}
      zIndex={'100'}
      className="resume-skills-vstack"
    >
      {/* <Heading size="lg">Skills</Heading> */}
      <Flex
        width="100%"
        flexDirection={{ base: 'column-reverse', md: 'column' }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width="90%"
          mt={8}
          height="50%"
          flexGrow={1}
          className="resume-skills-techskills-aboutme-box"
        >
          <Grid
            templateColumns={{ base: '1fr', md: '1fr 1fr' }}
            gap={4}
            className="resume-skills-techskills-aboutme-grid"
          >
            <AboutMe />
            <TechSkills />
            <GridItem></GridItem>
          </Grid>
        </Box>
      </Flex>
    </VStack>
  );
};

export default Skills;

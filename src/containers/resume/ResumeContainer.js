import React from 'react';
import { Box, Container, useColorModeValue, Flex } from '@chakra-ui/react';
import ResumeFooter from './ResumeFooter';
import Skills from './Skills';
import Experience from './Experience';
import ResumeComponent from '../../components/resume/ResumeComponent';
import ResumeLandingSpace from './ResumeLandingSpace';
import HeaderCreator from '../../pages/utils/HeaderCreator';

function ResumeContainer() {
  const bgColor = useColorModeValue('white', 'gray.800');
  // const color = useColorModeValue('gray.800', 'white');

  return (
    <Box width="100%">
      <Container maxW="100%" py={4}>
        <Box width="100%" borderRadius="lg" boxShadow="md" overflow="hidden">
          <ResumeLandingSpace id="resumeLanding" />

          <Container py={4} maxW="container.xl" id="resumeHeader">
            <Box display="flex" justifyContent="center">
              {HeaderCreator('resume-skills-experience')}
            </Box>
          </Container>
          <Box
            mt={6}
            border="1px"
            borderColor="customColors.translucentQuaternary200"
            p={4}
            borderRadius="md"
            id="resumeContent"
          >
            <Container maxW="container.lg">
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                bg={bgColor}
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                w="100%"
              >
                <ResumeComponent />
              </Flex>
            </Container>
          </Box>

          <Box
            mt={6}
            bg="customColors.translucentQuaternary300"
            id="skillsSection"
          >
            <Skills />
          </Box>

          <Box
            mt={6}
            bg="customColors.translucentQuaternary400"
            id="experienceSection"
          >
            <Experience />
          </Box>

          <Box
            mt={6}
            bg="customColors.translucentQuaternary500"
            id="resumeFooter"
          >
            <ResumeFooter />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ResumeContainer;

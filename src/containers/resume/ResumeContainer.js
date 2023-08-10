import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import ResumeFooter from './ResumeFooter';
import Skills from './Skills';
import Experience from './Experience';
import ResumeHeader from './ResumeHeader';
import ResumeComponent from '../../components/resume/ResumeComponent';
import ResumeLandingSpace from './ResumeLandingSpace';

function ResumeContainer() {
  return (
    <Box width="100%">
      <Container maxW="100%" py={4}>
        <Box
          // bg="customColors.translucentQuaternary100"
          width="100%"
          borderRadius="lg"
          boxShadow="md"
          // p={8}
          overflow="hidden"
        >
          <ResumeLandingSpace />
          <ResumeHeader />

          <Box
            mt={6}
            border="1px"
            borderColor="customColors.translucentQuaternary200"
            p={4}
            borderRadius="md"
          >
            <ResumeComponent />
          </Box>

          <Box mt={6} bg="customColors.translucentQuaternary300">
            <Skills />
          </Box>

          <Box mt={6} bg="customColors.translucentQuaternary400">
            <Experience />
          </Box>

          <Box mt={6} bg="customColors.translucentQuaternary500">
            <ResumeFooter />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ResumeContainer;

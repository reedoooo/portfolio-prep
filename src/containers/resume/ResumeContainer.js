import React from 'react';
import { Box, Container, Grid, Center } from '@chakra-ui/react';
import ResumeFooter from './ResumeFooter';
import Skills from './Skills';
import Experience from './Experience';
import ResumeHeader from './ResumeHeader';

function ResumeContainer() {
  return (
    <Box width="100%">
      <Container py={4} maxW="100%">
        <Center>
          <Grid
            templateColumns={{ base: '1fr' }}
            gap={4}
            alignItems="center"
            justifyContent="center"
          >
            <ResumeHeader />
            <Skills />
            <Experience />
            <ResumeFooter />
          </Grid>
        </Center>
      </Container>
    </Box>
  );
}

export default ResumeContainer;

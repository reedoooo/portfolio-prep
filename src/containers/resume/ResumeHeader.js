import React from 'react';
import { Box, Container } from '@chakra-ui/react';
// import Particle from '../../pages/resume/Particle';
// import ResumeComponent from '../../components/resume/ResumeComponent';
import HeaderCreator from '../../pages/utils/HeaderCreator';

const HeaderComponent = () => {
  return (
    <Container py={4} maxW="container.xl">
      {/* <Heading mb={6} fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'}>
        My Resume
      </Heading> */}
      <Box display="flex" justifyContent="center">
        {HeaderCreator('resume')}
      </Box>

      {/* {Particle && <Particle />}
      <ResumeComponent /> */}
    </Container>
  );
};

export default HeaderComponent;

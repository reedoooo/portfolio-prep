import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import HeaderCreator from '../../pages/utils/HeaderCreator';

const HeaderComponent = () => {
  return (
    <Container py={4} maxW="container.xl">
      <Box display="flex" justifyContent="center">
        {HeaderCreator('resume')}
      </Box>
    </Container>
  );
};

export default HeaderComponent;

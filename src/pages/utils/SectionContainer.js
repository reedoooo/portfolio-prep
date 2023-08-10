import React from 'react';
import { Flex, useMediaQuery } from '@chakra-ui/react';

const SectionContainer = ({ children }) => {
  const [isLargerThanMd] = useMediaQuery('(min-width: 768px)');

  const bg = isLargerThanMd
    ? 'rgba(0, 31, 34, 0.4)' // quaternary.900 with 60% opacity
    : 'base';
  const color = isLargerThanMd ? 'white' : 'black';

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      minHeight="60vh"
      width="100%"
      flexDirection="column"
      background={bg}
      color={color}
    >
      {children}
    </Flex>
  );
};

export default SectionContainer;

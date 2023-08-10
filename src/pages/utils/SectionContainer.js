import React from 'react';
import { Flex, useMediaQuery } from '@chakra-ui/react';

const SectionContainer = ({ children }) => {
  const [isLargerThanMd] = useMediaQuery('(min-width: 768px)');

  const primaryBg = 'rgba(49, 151, 149, 0.4)'; // translucentQuaternary50
  const secondaryBg = isLargerThanMd
    ? 'rgba(0, 31, 34, 0.6)' // translucentQuaternary901
    : 'base';
  const color = isLargerThanMd ? 'white' : 'black';

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      minHeight="60vh"
      width="100%"
      p={4} // Added padding for spacing
      flexDirection="column"
      background={primaryBg}
      color={color}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        // width="auto" // Adjusted to auto for a snug fit
        p={4} // Added padding for spacing
        flexDirection="column"
        background={secondaryBg}
        borderRadius="lg" // Added for rounded appearance
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default SectionContainer;

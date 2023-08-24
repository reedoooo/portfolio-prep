import React from 'react';
import {
  Text,
  Flex,
  Button,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';

const ResumeFooter = () => {
  // const footerColor = useColorModeValue('blue.500', 'blue.200');
  const footerBg = useColorModeValue('gray.50', 'rgb(10, 4, 22)');
  const footerText = useColorModeValue('black', 'white');

  return (
    <Flex
      as="footer"
      align="center"
      mt={8}
      py={{ base: '2', md: '4' }}
      color={footerText}
      borderTopWidth={1}
      borderColor="gray.200"
      bg={footerBg}
      direction={{ base: 'column', md: 'row' }}
      textAlign={{ base: 'center', md: 'start' }}
      px={{ base: '4', md: '8' }}
      w="100%"
    >
      <Text mb={{ base: '2', md: '0' }}>
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Text>
      <Spacer />
      <Button colorScheme="quaternary" size="sm">
        Contact
      </Button>
    </Flex>
  );
};

export default ResumeFooter;

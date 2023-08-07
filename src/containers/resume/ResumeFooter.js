import React from 'react';
import {
  Text,
  Flex,
  Button,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';

const ResumeFooter = () => {
  const footerColor = useColorModeValue('blue.500', 'blue.200');

  return (
    <Flex
      as="footer"
      align="center"
      mt={8}
      py={4}
      color={footerColor}
      borderTopWidth={1}
      borderColor="gray.200"
    >
      <Text>
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

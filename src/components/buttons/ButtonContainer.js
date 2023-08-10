// ButtonContainer.js
import React from 'react';
import { Button, Box, Link } from '@chakra-ui/react';
import { AiOutlineDownload } from 'react-icons/ai';

const ButtonContainer = ({ resumeLink, buttonText }) => (
  <Box textAlign="center" my={5}>
    <Link href={resumeLink} isExternal>
      <Button
        colorScheme="quaternary"
        leftIcon={<AiOutlineDownload />}
        variant="solid"
        size="lg"
      >
        {buttonText}
      </Button>
    </Link>
  </Box>
);

export default ButtonContainer;

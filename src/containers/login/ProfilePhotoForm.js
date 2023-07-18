import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Box, Text, useColorModeValue } from '@chakra-ui/react';

const ProfilePhotoForm = ({ onSubmit }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      onSubmit(file);
    },
    [onSubmit],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });

  // Use the useColorModeValue hook to switch colors based on the current color mode.
  const bg = useColorModeValue('blue.500', 'blue.300');
  const color = useColorModeValue('white', 'gray.800');

  return (
    <Box
      {...getRootProps()}
      borderWidth={2}
      borderRadius="md"
      p={4}
      borderColor={bg}
      w="full"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg={isDragActive ? 'blue.50' : 'white'}
      color={color}
      style={{ marginBottom: '20px' }}
    >
      <input {...getInputProps()} />
      <Button colorScheme="blue" size="lg" mb={3}>
        {isDragActive
          ? 'Drop your photo here...'
          : 'Click or drag your photo here to upload'}
      </Button>
      {isDragActive && (
        <Text fontSize="sm">Release to drop the files here</Text>
      )}
    </Box>
  );
};

export default ProfilePhotoForm;

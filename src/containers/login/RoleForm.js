import React, { useState } from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  Input,
  Stack,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
const RoleForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [capabilities, setCapabilities] = useState([]);

  const addCapability = () => setCapabilities([...capabilities, '']);
  const removeCapability = (index) =>
    setCapabilities(capabilities.filter((_, i) => i !== index));
  const handleChangeCapability = (index, value) => {
    const newCapabilities = [...capabilities];
    newCapabilities[index] = value;
    setCapabilities(newCapabilities);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, capabilities });
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Heading as="h3" size="md">
        Add Role
      </Heading>
      <Stack spacing={3}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Role Name"
        />
        {capabilities.map((cap, i) => (
          <HStack key={i}>
            <Input
              value={cap}
              onChange={(e) => handleChangeCapability(i, e.target.value)}
              placeholder="Capability"
            />
            <IconButton
              icon={<DeleteIcon />}
              onClick={() => removeCapability(i)}
            />
          </HStack>
        ))}
        <Button onClick={addCapability}>Add Capability</Button>
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default RoleForm;

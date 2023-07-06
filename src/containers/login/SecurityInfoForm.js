import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import { Input } from "postcss";
import React, { useState } from "react";
import RoleForm from "./RoleForm";

const SecurityInfoForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [roleData, setRoleData] = useState({ name: "", capabilities: [] });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password, email, roleData });
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Heading as="h3" size="md">
        Add Security Info
      </Heading>
      <Stack spacing={3}>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <RoleForm onSubmit={(roleData) => setRoleData(roleData)} />
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default SecurityInfoForm;

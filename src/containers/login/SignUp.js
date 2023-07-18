import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submit button clicked');
    onSignup({ username, password, basic_info: { firstName, lastName, age } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="username">
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>

      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <Input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormControl>

      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <Input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormControl>

      <FormControl id="age">
        <FormLabel>Age</FormLabel>
        <Input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </FormControl>

      <Button mt={4} colorScheme="teal" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default Signup;

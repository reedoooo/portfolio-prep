import React, { useState } from "react";
import { Button, Stack, Box, Input, IconButton, Heading, HStack } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const ExperienceForm = ({ onSubmit }) => {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [years, setYears] = useState("");
	// const [mainTech, setMainTech] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  const addTech = () => setTechnologies([...technologies, ""]);
  const removeTech = (index) => setTechnologies(technologies.filter((_, i) => i !== index));
  const handleChangeTech = (index, value) => {
    const newTech = [...technologies];
    newTech[index] = value;
    setTechnologies(newTech);
  };

  // Similar functions for mainTech...

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ company, title, years, technologies });
  };

  return (
		<Box as="form" onSubmit={handleSubmit}>
    <Heading as="h3" size="md">Add Experience</Heading>
    <Stack spacing={3}>
      <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />
      <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <Input value={years} onChange={(e) => setYears(e.target.value)} placeholder="Years" />
      {technologies.map((tech, i) => (
        <HStack key={i}>
          <Input value={tech} onChange={(e) => handleChangeTech(i, e.target.value)} placeholder="Tech" />
          <IconButton icon={<DeleteIcon />} onClick={() => removeTech(i)} />
        </HStack>
      ))}
      <Button onClick={addTech}>Add Tech</Button>
      <Button colorScheme="blue" type="submit">Submit</Button>
    </Stack>
  </Box>
  );
};

export default ExperienceForm;

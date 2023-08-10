import React from 'react';
import { InputGroup, InputLeftAddon, Select, Input } from '@chakra-ui/react';

const ProjectsFilter = ({
  value,
  handleChange,
  handleSelectChange,
  searchInput,
}) => (
  <InputGroup mb="5">
    <InputLeftAddon>Filter by:</InputLeftAddon>
    <Select onChange={handleSelectChange} value={value}>
      <option value="All">All</option>
      <option value="name">Name</option>
      <option value="popularity">Popularity</option>
      <option value="recent">Recent</option>
      <option value="size">Size</option>
    </Select>
    <Input
      type="search"
      onChange={handleChange}
      placeholder="Search"
      aria-label="Search"
      aria-describedby="basic-addon1"
      value={searchInput}
    />
  </InputGroup>
);

export default ProjectsFilter;

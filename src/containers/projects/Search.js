import { Input } from '@chakra-ui/react';

const Search = ({ value, onChange }) => (
  <Input
    type="text"
    value={value}
    onChange={onChange}
    bg="quaternary.900"
    borderColor="tertiary.400"
    color="tertiary.200"
    _placeholder={{ color: 'tertiary.400' }}
    _hover={{ borderColor: 'tertiary.300' }}
    _focus={{
      borderColor: 'tertiary.200',
      boxShadow: '0 0 0 2px rgba(40,171,175,0.6)',
    }}
    size="lg"
    rounded="md"
    placeholder="Search..."
  />
);

export default Search;

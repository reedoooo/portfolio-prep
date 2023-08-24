import { Select as ChakraSelect } from '@chakra-ui/react';

const Select = ({ value, onChange, options }) => (
  <ChakraSelect
    id="projectcontainer-select-input"
    value={value}
    onChange={onChange}
    bg="quaternary.900"
    borderColor="tertiary.400"
    color="tertiary.200"
    _hover={{ borderColor: 'tertiary.300' }}
    _focus={{
      borderColor: 'tertiary.200',
      boxShadow: '0 0 0 2px rgba(40,171,175,0.6)',
    }}
    size="lg"
    rounded="md"
  >
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </ChakraSelect>
);

export default Select;

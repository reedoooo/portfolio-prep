import { Text } from '@chakra-ui/react';

const ReusableParagraph = ({ children, style, id }) => (
  <Text
    id={`reusableparagraph-${id}`}
    as="h3"
    size="md"
    my={6}
    {...style}
    m={'auto'}
  >
    {children}
  </Text>
);

export default ReusableParagraph;

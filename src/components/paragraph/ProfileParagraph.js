import { Text } from '@chakra-ui/react';

const ProfileParagraph = ({ children }) => (
  <Text as="h3" size="md" my={6}>
    {children}
  </Text>
);

export default ProfileParagraph;

import { Box, Heading, Divider } from '@chakra-ui/react';

const ProfileHeader = () => (
  <Box width="90%" mt={8} flexGrow={1}>
    <Heading as="h2" size="xl" textAlign="center" mb={4}>
      Profile Section
    </Heading>
    <Divider borderColor={'red.500'} />
  </Box>
);

export default ProfileHeader;

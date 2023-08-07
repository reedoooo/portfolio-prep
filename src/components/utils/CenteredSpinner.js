import { Spinner, Box } from '@chakra-ui/react';

const CenteredSpinner = () => (
  <Box d="flex" justifyContent="center" alignItems="center" height="100vh">
    <Spinner size="xl" />
  </Box>
);

export default CenteredSpinner;

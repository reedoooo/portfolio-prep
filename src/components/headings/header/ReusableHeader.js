import { Box, Heading, Divider } from '@chakra-ui/react';

const ReusableHeader = ({ headerText, color = 'white' }) => (
  <Box
    id="reusable-header"
    width="90%"
    minH="2vh"
    maxH="5vh"
    flexGrow={1}
    // display="flex"
    // flexDirection="column"
    // justifyContent="space-between"
    height="100%"
    alignItems={'center'}
  >
    <Heading as="h2" size="xl" textAlign="center" color={color} mt={4} mb={4}>
      {headerText}
    </Heading>
    <Divider
      borderColor={'quaternary.50'}
      borderBottomWidth={'3px'}
      // mt={8}
      // mb={8}
    />
  </Box>
);

export default ReusableHeader;

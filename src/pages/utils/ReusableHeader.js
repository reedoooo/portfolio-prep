import { Box, Heading, Divider } from '@chakra-ui/react';

const ReusableHeader = ({ headerText, color = 'white', ...props }) => (
  <Box
    id={`reusable-header-${headerText}`} // Added
    margin={'auto'}
    width="90%"
    minH="2vh"
    maxH="5vh"
    flexGrow={1}
    height="100%"
    mb={4}
    // pb={2}
    alignItems={'center'}
    {...props}
  >
    <Heading as="h2" size="xl" textAlign="center" color={color} mt={2}>
      {headerText}
    </Heading>
    <Divider borderColor={'quaternary.50'} borderBottomWidth={'3px'} mb={2} />
  </Box>
);

export default ReusableHeader;

import { Box, Heading, Divider } from '@chakra-ui/react';

const ReusableHeaderWithSubHeader = ({
  headerText,
  color = 'white',
  subHeaderComponent: SubHeaderComponent = null,
}) => (
  <Box
    id={`reusable-header-with-subheader-${headerText}`} // Added
    width="100%"
    flexGrow={1}
    display="flex" // Added
    flexDirection="column" // Added
    alignItems={'center'} // Added
    justifyContent={'center'} // Added
    // p={4} // padding to ensure there's space around the content
  >
    <Heading as="h2" size="xl" textAlign="center" color={color} mt={4} mb={4}>
      {headerText}
    </Heading>
    <Divider
      borderColor={'quaternary.50'}
      borderBottomWidth={'3px'}
      m={'auto'}
    />
    {SubHeaderComponent ? (
      <SubHeaderComponent />
    ) : (
      <Heading as="h3" size="l" textAlign="center" color={color} mt={4} mb={4}>
        {headerText}
      </Heading>
    )}
    <Divider
      borderColor={'quaternary.50'}
      maxW={{ base: '90%' }}
      borderBottomWidth={'3px'}
      m={'auto'}
    />
  </Box>
);

export default ReusableHeaderWithSubHeader;

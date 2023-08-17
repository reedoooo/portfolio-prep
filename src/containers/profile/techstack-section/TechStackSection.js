// import { Box, Flex } from '@chakra-ui/react';
// import Techstack from '../../../components/softwareSkills/TechStack.js';
// const TechStackSection = () => (
//   <Flex
//     width="100%"
//     flexDirection={{ base: 'column-reverse', md: 'column' }}
//     justifyContent="center"
//     alignItems="center"
//     className="techstack-section-container"
//   >
//     <Box mt={8} height="50%" flexGrow={1}>
//       <Techstack />
//     </Box>
//   </Flex>
// );

// export default TechStackSection;
import { Box, Flex, useTheme } from '@chakra-ui/react';
import Techstack from '../../../components/softwareSkills/TechStack.js';

const TechStackSection = () => {
  const theme = useTheme();

  return (
    <Flex
      width="100%"
      flexDirection={{ base: 'column-reverse', md: 'column' }}
      justifyContent="center"
      alignItems="center"
      className="techstack-section-container"
    >
      <Box
        mt={8}
        height="50%"
        flexGrow={1}
        borderWidth={{ base: '0px', [theme.breakpoints.md]: '2px' }}
        borderRadius="md"
        p={{ base: '0', [theme.breakpoints.md]: 4 }}
      >
        <Techstack />
      </Box>
    </Flex>
  );
};

export default TechStackSection;

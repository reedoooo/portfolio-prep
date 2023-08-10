// ExperienceText.js
import { Box, Divider, Text } from '@chakra-ui/react';

const ExperienceContent = () => {
  return (
    <Box w="full">
      {/* <Heading
        as="h4"
        size="lg"
        color={'white'}
        textAlign={{ base: 'left', lg: 'center' }}
      >
        My Experiences
      </Heading> */}
      <Text
        fontSize={{ base: 'sm', md: 'md', lg: '3xl' }}
        color={'white'}
        textAlign={'center'}
        lineHeight={{ base: '7', md: '8', lg: '9' }}
        // mt={6}
        mt={4}
        mb={4}
        fontStyle="italic"
      >
        Over the course of my career, I&apos;ve worked in several roles and have
        gained a diverse set of skills and experiences. Here are a few
        highlights...
      </Text>
      <Divider
        borderColor={'quaternary.50'}
        borderBottomWidth={'3px'}
        // mt={8}
        // mb={8}
      />
    </Box>
  );
};

export default ExperienceContent;

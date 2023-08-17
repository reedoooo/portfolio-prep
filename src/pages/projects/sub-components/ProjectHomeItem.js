import {
  Text,
  Box,
  Flex,
  Button,
  AspectRatio,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ProjectHomeItem = ({ project, onDetails }) => {
  const displayDescription = () => {
    const maxCharsPerLine = 60; // This is an estimate. You might have to adjust this.
    const maxLines = 3;

    if (project.description.length > maxCharsPerLine * maxLines) {
      return project.description.substr(0, maxCharsPerLine * maxLines) + '...';
    }
    return project.description;
  };

  // const estimatedMaxHeight = `${16 + 2 * maxLines}vh`; // 16vh for the AspectRatio, and 2vh for each line of text.

  return (
    <MotionBox
      p="6"
      d="flex"
      flexDirection="column"
      bg={useColorModeValue(
        'rgba(17, 16, 16, 0.582)',
        'rgba(12, 8, 24, 0.904)',
      )}
      boxShadow="2xl"
      // maxHeight={estimatedMaxHeight}
      maxHeight="65vh"
      rounded="lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          title="project_website"
          src={project.images[0] + '.png'}
          alt="project_website"
          objectFit="cover"
        />
      </AspectRatio>
      <Box flex="1" overflowY="auto" height={'100%'}>
        <Text fontWeight="bold" fontSize="xl" mb="2" color="tertiary.600">
          {project.title}
        </Text>
        <Text fontSize="md" color="secondary.200" mb="4">
          {displayDescription()}
        </Text>
        <Flex mt="auto" justifyContent="space-between" width="100%">
          <Text fontWeight="bold" color="tertiary.600">
            {project.startDate}
          </Text>
          <Button
            onClick={() => onDetails(project)}
            colorScheme="tertiary"
            variant="outline"
            _hover={{ bg: 'quaternary.600', color: 'white' }}
          >
            Details
          </Button>
        </Flex>
      </Box>
    </MotionBox>
  );
};

export default ProjectHomeItem;

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
  return (
    <MotionBox
      p="6"
      d="flex"
      flexDirection="column"
      // height="100%"
      bg={useColorModeValue(
        'rgba(17, 16, 16, 0.582)',
        'rgba(12, 8, 24, 0.904)',
      )}
      boxShadow="2xl"
      rounded="lg"
      // overflow="hidden"
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
          {project.description}
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

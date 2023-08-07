import {
  GridItem,
  Text,
  Image,
  Box,
  Flex,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ProjectItem = ({ project, onDetails }) => (
  <GridItem>
    <MotionBox
      bg={useColorModeValue(
        'rgba(17, 16, 16, 0.582)',
        'rgba(12, 8, 24, 0.904)',
      )}
      boxShadow="lg"
      rounded="lg"
      overflow="hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={project.images[0]}
        alt="project_image"
        className="w-full h-full object-cover rounded-2xl"
        h="200px"
        objectFit="cover"
      />
      <Box p="6">
        <Text fontWeight="bold" fontSize="xl" mb="2">
          {project.title}
        </Text>
        <Text fontSize="md" color="gray.500" mb="4">
          {project.description}
        </Text>
        <Flex justify="space-between">
          <Text fontWeight="bold">{project.startDate}</Text>
          <Button
            onClick={() => onDetails(project)}
            colorScheme="teal"
            variant="outline"
            _hover={{ bg: 'teal.600', color: 'white' }}
          >
            Details
          </Button>
        </Flex>
      </Box>
    </MotionBox>
  </GridItem>
);

export default ProjectItem;

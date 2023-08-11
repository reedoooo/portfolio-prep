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

const ProjectHomeItem = ({ project, onDetails }) => (
  <MotionBox
    p="6"
    d="flex"
    flexDirection="column"
    height="100%"
    className="projects-home-item"
    bg={useColorModeValue('rgba(17, 16, 16, 0.582)', 'rgba(12, 8, 24, 0.904)')}
    boxShadow="lg"
    rounded="lg"
    overflow="hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}
  >
    <AspectRatio ratio={16 / 9} overflow="hidden">
      <Image
        title="project_website"
        id="scaled-frame"
        src={project.images[0] + '.png'}
        alt="project_website"
        // allowFullScreen
      />
    </AspectRatio>
    <Box flex="1" overflowY="auto">
      <Text fontWeight="bold" fontSize="xl" mb="2" color="tertiary.600">
        {project.title}
      </Text>
      <Text fontSize="md" color="secondary.200" mb="4">
        {project.description}
      </Text>
    </Box>
    <Flex mt="auto" justifyContent="space-between">
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
  </MotionBox>
);

export default ProjectHomeItem;

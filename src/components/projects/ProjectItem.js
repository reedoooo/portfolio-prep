import React, { useContext } from 'react';
import { Box, Text, Flex, Button, AspectRatio, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ProjectContext } from '../../context/ProjectContext';

const MotionBox = motion(Box);

const ProjectItem = ({ project }) => {
  const { showDetailsModal } = useContext(ProjectContext);

  return (
    <MotionBox
      bg={'rgba(0, 31, 34, 1)'}
      boxShadow="lg" // Moderate shadow
      rounded="lg"
      overflow="hidden"
      whileHover={{ scale: 1.03 }} // Toned down hover scale
      transition={{ duration: 0.3 }} // Faster transition for a snappier feel
    >
      <AspectRatio ratio={16 / 9} overflow="hidden">
        <Image
          title="project_website"
          id="scaled-frame"
          src={project.images[0] + '.png'}
          alt="project_website"
          allowFullScreen
        />
      </AspectRatio>
      <Box p="6">
        <Text fontWeight="bold" fontSize="xl" mb="2" color="white">
          {project.title}
        </Text>
        <Text
          fontSize="md"
          color="gray.500" // Adjusted text color for more contrast with new background
          mb="4"
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {project.description}
        </Text>
        <Flex justify="space-between">
          <Text fontWeight="bold" color="white">
            {project.startDate}
          </Text>
          <Button
            onClick={() => showDetailsModal(project)}
            bgColor="rgba(79, 79, 79, 0.7)" // Adjusted for better contrast
            color="white"
            border="1px solid quaternary.900"
            _hover={{
              transform: 'scale(1.02)', // Reduced hover scale for button
              overflow: 'hidden',
              boxShadow: '0 0 10px rgba(79, 183, 179, 0.7)', // Reduced boxShadow intensity
            }}
          >
            Details
          </Button>
        </Flex>
      </Box>
    </MotionBox>
  );
};

export default ProjectItem;

import React from 'react';
import { Box, Text, Flex, Button, AspectRatio } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ProjectItem = ({ project, bgColor, detailsModalShowHandler }) => (
  <MotionBox
    bg={bgColor}
    boxShadow="lg"
    rounded="lg"
    overflow="hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}
  >
    <AspectRatio ratio={16 / 9} overflow="hidden">
      <iframe
        title="project_website"
        id="scaled-frame"
        src={project.url}
        alt="project_website"
        allowFullScreen
      />
    </AspectRatio>
    <Box p="6">
      <Text fontWeight="bold" fontSize="xl" mb="2">
        {project.title}
      </Text>
      <Text
        fontSize="md"
        color="gray.500"
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
        <Text fontWeight="bold">{project.startDate}</Text>
        <Button
          onClick={() => detailsModalShowHandler(project)}
          colorScheme="quaternary"
          variant="outline"
          _hover={{
            transform: 'scale(1.05)',
            overflow: 'hidden',
            border: '1.7px solid rgba(79, 183, 179, 0.673)',
            boxShadow:
              '0 0 15px rgba(79, 183, 179, 0.8), 0 0 25px rgba(79, 183, 179, 0.8), 0 0 35px rgba(79, 183, 179, 0.8), 0 0 45px rgba(79, 183, 179, 1)',
          }}
        >
          Details
        </Button>
      </Flex>
    </Box>
  </MotionBox>
);

export default ProjectItem;

import React from 'react';
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

const ProjectHomeItem = ({ project, onDetails, isMd, isLg, isSm }) => {
  const displayDescription = () => {
    const maxCharsPerLine = 60;
    let maxLines = isSm ? 2 : 3;

    if (project.description.length > maxCharsPerLine * maxLines) {
      return project.description.substr(0, maxCharsPerLine * maxLines) + '...';
    }
    return project.description;
  };

  const getBoxStyles = () => {
    if (isLg) return { overflow: 'hidden' };
    return { overflow: 'visible' };
  };

  return (
    <MotionBox
      p="25px"
      height={isSm ? '100%' : '70vh'}
      width={isSm ? '100%' : 'none'}
      d="flex"
      flexDirection="column"
      bg={useColorModeValue(
        'rgba(17, 16, 16, 0.582)',
        'rgba(12, 8, 24, 0.904)',
      )}
      mx={isSm ? 'auto' : '0'}
      boxShadow="2xl"
      {...getBoxStyles()}
      rounded="lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="projecthomeitem-motionbox-container"
    >
      <AspectRatio ratio={4 / 3}>
        <Image
          title="project_website"
          src={project.images[0] + '.png'}
          alt={project.title}
          objectFit="cover"
          fallbackSrc="/images/project_placeholder.png"
        />
      </AspectRatio>
      <Box
        className="projecthomeitem-title-description-date-container"
        flex="1"
        overflowY="auto"
        pb={'25px'}
      >
        <Text fontWeight="bold" fontSize="xl" mb="2" color="tertiary.600">
          {project.title}
        </Text>
        <Text fontSize="md" color="secondary.200" mb="4">
          {displayDescription()}
        </Text>
        <Flex mt="auto" justifyContent="space-between" height="100%">
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

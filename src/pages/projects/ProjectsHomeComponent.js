import React from 'react';
import {
  Container,
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  Flex,
  Button,
  useColorModeValue,
  ScaleFade,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ProjectsHomeComponent = ({
  sectionName,
  projectArray,
  detailsModalShowHandler,
  profileData,
}) => {
  console.log('ProjectsHomeComponent.js: profileData', profileData);

  const bgColor = useColorModeValue(
    'rgba(17, 16, 16, 0.582)',
    'rgba(12, 8, 24, 0.904)',
  );
  const color = useColorModeValue('gray.800', 'white');

  return (
    <>
      <Box
        as="section"
        pt="5rem"
        pb="3rem"
        color={color}
        style={{
          backgroundColor: bgColor,
          backgroundImage: 'var(--section-background-color)',
        }}
      >
        <Container maxW="container.lg">
          <ScaleFade initialScale={0.9} in={true}>
            <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb="5">
              {sectionName}
            </Text>
            <Grid
              templateColumns="repeat(auto-fit, minmax(240px, 1fr))"
              gap={6}
            >
              {projectArray.slice(0, 3).map((project, index) => (
                <GridItem key={index}>
                  <MotionBox
                    bg={bgColor}
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
                          onClick={() => detailsModalShowHandler(project)}
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
              ))}
            </Grid>
          </ScaleFade>
        </Container>
      </Box>
    </>
  );
};

export default ProjectsHomeComponent;

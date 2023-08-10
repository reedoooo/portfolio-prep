import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {
  Box,
  Center,
  Grid,
  GridItem,
  Divider,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Avatar,
  HStack,
  Button,
  Circle,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import BasicInfoForm from './BasicInfoForm';
import SocialForm from './SocialForm';
import AddProjectForm from './AddProjectForm';
import ExperienceForm from './ExperienceForm';
import ProfilePhotoForm from './ProfilePhotoForm';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#f0f8ff', // AliceBlue color
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderWidth: '1px',
        borderColor: 'black',
        color: 'black',
      },
    },
  },
});

const UserProfile = () => {
  const toast = useToast();
  const [cookies] = useCookies(['auth']);
  const token = cookies.auth;
  const [userData, setUserData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [fetchError, setFetchError] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}/api/users/profile`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setUserData(response.data);
      setEditData(response.data); // Initiate the editable copy
    } catch (error) {
      console.error('Error fetching user data:', error);
      setFetchError(true);
      toast({
        title: 'Error fetching user data',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }, [token, toast]);

  const handleEditChange = (key, value) => {
    setEditData((prevData) => ({ ...prevData, [key]: value }));
  };

  const onSubmit = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_SERVER}/api/users/profile`,
        editData,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      toast({
        title: 'Profile updated successfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      fetchData();
      setEditMode(false);
    } catch (error) {
      toast({
        title: 'Error updating profile',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (token && !fetchError) {
      fetchData();
    }
  }, [token, toast, fetchData, fetchError]);

  if (!userData || !editData) return <Center>Loading...</Center>;

  const dataToDisplay = editMode ? editData : userData;

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box
        h="100vh"
        w="100vw"
        p={6}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={6}
          flexGrow={1}
          w="100%"
          maxW="90vw"
          alignItems="center"
          marginTop="128px"
        >
          {/* Profile Information VStack */}
          <GridItem h="100%">
            <Box
              borderRadius="md"
              boxShadow="md"
              p={6}
              bg="secondary.50"
              mb={6}
              h="100%"
            >
              <HStack mb={6}>
                <Button
                  colorScheme="brand"
                  color="seconday.300"
                  variant="outline"
                  onClick={() => setEditMode(!editMode)}
                >
                  {editMode ? 'Cancel' : 'Edit Profile'}
                </Button>
                {editMode && (
                  <Button
                    colorScheme="brand"
                    color="seconday.300"
                    variant="outline"
                    onClick={onSubmit}
                  >
                    Save Changes
                  </Button>
                )}
              </HStack>

              <VStack spacing={4} alignItems="center">
                <Circle
                  size="150px" // specify the size you want
                  bg="brand.500" // specify the color you want
                  padding="3px" // distance between Avatar and Circle
                >
                  <Avatar
                    src={dataToDisplay.basic_info?.image}
                    alt={dataToDisplay.basic_info?.name}
                    size="xl" // set avatar size
                    mb={4}
                    borderWidth="2px"
                    borderColor="brand.400"
                    bg="secondary.50"
                  />
                </Circle>
                <Heading as="h1" size="lg" color="brand.700">
                  {dataToDisplay.basic_info?.name}
                </Heading>
                <Text color="secondary.700">
                  Description: {dataToDisplay.basic_info?.description}
                </Text>
                <Box w="100%" textAlign="left">
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    color="brand.800"
                  >
                    Social:
                  </Text>
                  <UnorderedList>
                    {dataToDisplay.basic_info?.social?.map((social, index) => (
                      <ListItem key={`${social?.url}-${index}`}>
                        <HStack>
                          <Text color="brand.600">{social?.name}:</Text>
                          <Link to={social?.url} color="brand.500">
                            {social?.url}
                          </Link>
                        </HStack>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </VStack>
            </Box>
          </GridItem>

          {/* Projects and Experience Section */}
          <GridItem>
            <Box
              borderRadius="md"
              boxShadow="md"
              p={6}
              bg="secondary.50"
              mb={6}
            >
              <Text fontSize="lg" fontWeight="bold" mb={4} color="brand.700">
                Projects:
              </Text>
              {dataToDisplay.projects?.map((project, index) => (
                <Box key={`${project?.title}-${index}`} mb={4}>
                  <Divider mb={2} />
                  <Heading as="h2" size="md" my={2}>
                    {project?.title}
                  </Heading>
                  <Text>Start Date: {project?.startDate}</Text>
                  <Text>Description: {project?.description}</Text>
                  <Text>
                    URL: <Link to={project?.url}>{project?.url}</Link>
                  </Text>
                </Box>
              ))}
            </Box>

            <Box
              borderRadius="md"
              boxShadow="md"
              p={6}
              bg="secondary.50"
              mb={6}
            >
              <Text fontSize="lg" fontWeight="bold" mb={4} color="brand.700">
                Experience:
              </Text>
              {dataToDisplay.experience?.map((exp, index) => (
                <Box key={`${exp?.title}-${index}`} mb={4}>
                  <Divider mb={2} />
                  <Heading as="h2" size="md" my={2}>
                    {exp?.title} at {exp?.company}
                  </Heading>
                  <Text>Years: {exp?.years}</Text>
                </Box>
              ))}
            </Box>

            {editMode && (
              <>
                <BasicInfoForm
                  onSubmit={(formData) =>
                    handleEditChange('basic_info', formData)
                  }
                  initialValues={editData.basic_info}
                />
                <SocialForm
                  onSubmit={(formData) => handleEditChange('social', formData)}
                  initialValues={editData.social}
                />
                <AddProjectForm
                  onSubmit={(formData) =>
                    handleEditChange('projects', formData)
                  }
                  initialValues={editData.projects}
                />
                <ExperienceForm
                  onSubmit={(formData) =>
                    handleEditChange('experience', formData)
                  }
                  initialValues={editData.experience}
                />
                <ProfilePhotoForm
                  onSubmit={(file) => {
                    const formData = new FormData();
                    formData.append('profilePhoto', file);
                    handleEditChange('profilePhoto', formData);
                  }}
                  initialValues={editData.basic_info?.image}
                />
              </>
            )}
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default UserProfile;

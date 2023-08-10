import React from 'react';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import ProfileHeader from '../headings/header/ProfileHeader';
import ProfileDescription from '../paragraph/ProfileDescription';
import TechStackSection from '../../containers/profile/techstack-section/TechStackSection';

const ProfileComponent = () => {
  const [isLargerThanMd] = useMediaQuery('(min-width: 768px)');

  const bg = isLargerThanMd
    ? 'linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(12, 8, 24, 0.904))'
    : 'base';
  const color = isLargerThanMd ? 'white' : 'black';

  return (
    <Box as="section">
      <Flex
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        width="100%"
        flexDirection="column"
        background={bg}
        color={color}
      >
        <ProfileHeader />
        <ProfileDescription />
        <TechStackSection />
      </Flex>
    </Box>
  );
};

export default ProfileComponent;

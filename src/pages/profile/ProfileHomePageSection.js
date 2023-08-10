// ProfileHomePageSection.js
import React from 'react';
import ProfileDescription from '../../components/paragraph/ProfileDescription';
import TechStackSection from '../../containers/profile/techstack-section/TechStackSection';
import SectionContainer from '../utils/SectionContainer';
import HeaderCreator from '../utils/HeaderCreator';
import { Box, Divider } from '@chakra-ui/react';

const ProfileHomePageSection = () => {
  return (
    <SectionContainer>
      {HeaderCreator('profile')}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        // maxW={{ base: '90%' }}
      >
        <ProfileDescription />
        <Divider
          borderColor={'quaternary.50'}
          maxW={{ base: '90%' }}
          borderBottomWidth={'3px'}
        />
      </Box>
      <Box>
        <TechStackSection />
      </Box>
    </SectionContainer>
  );
};

export default ProfileHomePageSection;

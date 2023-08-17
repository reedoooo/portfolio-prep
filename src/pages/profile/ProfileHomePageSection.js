import React from 'react';
import ProfileDescription from '../../components/paragraph/ProfileDescription';
import TechStackSection from '../../containers/profile/techstack-section/TechStackSection';
import SectionContainer from '../utils/SectionContainer';
import ReusableHeaderWithSubHeader from '../utils/ReusableHeaderWithSubHeader';
import { Box, VStack, useTheme } from '@chakra-ui/react';

const ProfileHomePageSection = () => {
  const theme = useTheme();

  return (
    <SectionContainer id={'profile-home-page'}>
      <Box
        borderWidth={{ base: '0px', [theme.breakpoints.md]: '2px' }}
        borderRadius="md"
        p={{ base: '0', [theme.breakpoints.md]: 4 }}
      >
        <VStack
          id={'profile-home-page-vstack'}
          spacing={8}
          align="stretch"
          width="100%"
          alignItems={'center'}
          justifyContent={'center'}
        >
          <ReusableHeaderWithSubHeader
            headerText="Profile"
            subHeaderComponent={ProfileDescription}
          />
          <TechStackSection />
        </VStack>
      </Box>
    </SectionContainer>
  );
};

export default ProfileHomePageSection;

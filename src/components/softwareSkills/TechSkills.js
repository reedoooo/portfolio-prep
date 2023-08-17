import { Grid, Box } from '@chakra-ui/react';
import React from 'react';
import TechIcon from './TechIcon';
import { useResumeContext } from '../../context/ResumeContext';
import HeaderCreator from '../../pages/utils/HeaderCreator';

const TechSkills = () => {
  const { homeIcons, resumeIcons } = useResumeContext();

  const currentURL = `${window.location.href}`;
  const resumeURL = `${window.location.origin}/resume`;

  let icons = homeIcons;
  if (currentURL === resumeURL) {
    icons = [...homeIcons, ...resumeIcons];
  }

  const isResumePage = currentURL === resumeURL;

  return (
    <Box
      width="100%" // Explicitly set the width to 100%
      height="100%"
      display={'flex'}
      justifyContent={'center'}
      flexGrow={1}
      flexDirection="column"
      // alignItems={'center'}
    >
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        w={'50%'}
        ml={'auto'}
        mr={'auto'}
      >
        {HeaderCreator('techSkills')} {/* Modified this line */}
      </Box>
      <Grid
        className="techskills-griditem-grid"
        templateColumns={isResumePage ? 'repeat(5, 1fr)' : 'repeat(3, 1fr)'}
        templateRows={isResumePage ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)'}
        gap={4}
      >
        {icons.map((Icon, index) => (
          <TechIcon key={index} icon={Icon} />
        ))}
      </Grid>
    </Box>
  );
};

export default TechSkills;

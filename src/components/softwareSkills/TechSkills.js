import { Grid, GridItem, Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import TechIcon from './TechIcon';
import { PageContext } from '../../context/PageContext';
import { useResumeContext } from '../../context/ResumeContext'; // <-- Import this
import HeaderCreator from '../../pages/utils/HeaderCreator';

const TechSkills = () => {
  const { page } = useContext(PageContext);
  const { homeIcons, resumeIcons } = useResumeContext(); // <-- Use the new hook here

  const currentURL = `${window.location.href}`;
  const homeURL = `${window.location.origin}/home`;
  const resumeURL = `${window.location.origin}/resume`;

  const icons =
    currentURL === homeURL
      ? homeIcons
      : currentURL === resumeURL
      ? [...homeIcons, ...resumeIcons]
      : homeIcons;

  const isResumePage = currentURL === resumeURL;

  return (
    <GridItem className="techskills-griditem">
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        {HeaderCreator('techSkills')}
      </Box>{' '}
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
    </GridItem>
  );
};

export default TechSkills;

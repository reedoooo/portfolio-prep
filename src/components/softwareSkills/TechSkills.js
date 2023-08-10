import { Grid, GridItem, Box, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPostgresql,
  DiGit,
  DiAws,
  DiJqueryLogo,
} from 'react-icons/di';
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiJest,
  SiSocketdotio,
  SiMysql,
  SiChakraui,
} from 'react-icons/si';
import { BiLogoPostgresql, BiLogoVuejs } from 'react-icons/bi';
import { TbBrandThreejs } from 'react-icons/tb';
import { BsFiletypeSass, BsFillBootstrapFill } from 'react-icons/bs';
import { RiGatsbyLine } from 'react-icons/ri';
import TechIcon from './TechIcon';
import { PageContext } from '../../context/PageContext';
import HeaderCreator from '../../pages/utils/HeaderCreator';

const TechSkills = () => {
  const { page } = useContext(PageContext);

  console.log(`Current page is: ${page}`);

  const homeIcons = [
    DiJavascript1,
    DiAws,
    DiNodejs,
    DiReact,
    SiMongodb,
    SiNextdotjs,
    DiGit,
    DiPostgresql,
    DiAws,
  ];

  const resumeIcons = [
    BiLogoPostgresql,
    SiExpress,
    BiLogoVuejs,
    SiJest,
    SiSocketdotio,
    RiGatsbyLine,
    SiMysql,
    BsFiletypeSass,
    BsFillBootstrapFill,
    DiJqueryLogo,
    TbBrandThreejs,
    SiChakraui,
  ];
  const currentURL = `${window.location.href}`;
  const homeURL = `${window.location.origin}/home`;
  const resumeURL = `${window.location.origin}/resume`;
  console.log('current', currentURL);
  console.log('home', homeURL);
  console.log('resume', resumeURL);
  console.log('page', page);
  /* eslint-disable */

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

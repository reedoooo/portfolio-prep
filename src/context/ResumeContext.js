import { createContext, useContext } from 'react';
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
import {
  BiLogoPostgresql,
  BiLogoVuejs,
  BiLogoTypescript,
} from 'react-icons/bi';
import { TbBrandThreejs } from 'react-icons/tb';
import { BsFiletypeSass, BsFillBootstrapFill } from 'react-icons/bs';
import { RiGatsbyLine } from 'react-icons/ri';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
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
    BiLogoTypescript,
    SiMysql,
    BsFiletypeSass,
    BsFillBootstrapFill,
    DiJqueryLogo,
    TbBrandThreejs,
    SiChakraui,
  ];

  const allIconsMapping = {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiPostgresql,
    DiGit,
    DiAws,
    DiJqueryLogo,
    SiNextdotjs,
    SiMongodb,
    SiExpress,
    SiJest,
    SiSocketdotio,
    SiMysql,
    SiChakraui,
    BiLogoPostgresql,
    BiLogoVuejs,
    BiLogoTypescript,
    TbBrandThreejs,
    BsFiletypeSass,
    BsFillBootstrapFill,
    RiGatsbyLine,
  };

  // No need to combine as before, directly use the above object
  const allIcons = allIconsMapping;

  return (
    <ResumeContext.Provider value={{ homeIcons, resumeIcons, allIcons }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeContext = () => useContext(ResumeContext);

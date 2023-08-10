import { createContext, useContext, useState } from 'react';
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
    SiMysql,
    BsFiletypeSass,
    BsFillBootstrapFill,
    DiJqueryLogo,
    TbBrandThreejs,
    SiChakraui,
  ];

  return (
    <ResumeContext.Provider value={{ homeIcons, resumeIcons }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeContext = () => useContext(ResumeContext);

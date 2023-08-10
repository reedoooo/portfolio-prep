import {
  Box,
  VStack,
  Flex,
  Text,
  Tooltip,
  Grid,
  IconButton,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import ExperienceContent from './ExperienceContent';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css'; // <-- Imported the CSS
import HeaderCreator from '../../pages/utils/HeaderCreator';
import { ProfileContext } from '../../context/ProfileContext';
import { DiJavascript1, DiReact } from 'react-icons/di';
import { BsFiletypeSass } from 'react-icons/bs';
import { BiLogoPostgresql, BiLogoVuejs } from 'react-icons/bi';
import { SiExpress, SiJest } from 'react-icons/si';

const MotionBox = motion(Box);

// Sample mapping from technology names to icons and descriptions.
// You can expand this to cover all your technologies.
// Sample mapping from technology names to icons and descriptions.
// You can expand this to cover all your technologies.
const technologyMapping = {
  react: {
    icon: <DiReact />,
    description: 'React is a JavaScript library for building user interfaces.',
  },
  typescript: {
    icon: <DiJavascript1 />,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  sass: {
    icon: <BsFiletypeSass />,
    description:
      'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).',
  },
  postgresql: {
    icon: <BiLogoPostgresql />,
    description:
      'PostgreSQL is a powerful, open-source object-relational database system.',
  },
  express: {
    icon: <SiExpress />,
    description: 'Express.js is a web application framework for Node.js.',
  },
  vuejs: {
    icon: <BiLogoVuejs />,
    description: 'Vue.js is a progressive JavaScript framework.',
  },
  jest: {
    icon: <SiJest />,
    description:
      'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.',
  },
  // ... Add all the technologies you listed
};

const TechnologyGridItem = ({ technology }) => {
  // Check if technologyMapping has this technology
  if (!Object.prototype.hasOwnProperty.call(technologyMapping, technology)) {
    return null; // Do not render anything
  }

  const techData = technologyMapping[technology];

  return (
    <Tooltip label={techData.description} placement="top" hasArrow>
      <IconButton isRound icon={techData.icon} aria-label={technology} />
    </Tooltip>
  );
};

const ExperienceTimelineElement = ({ exp, direction }) => {
  const { title, startDate, description, technologies } = exp; // Adjusted based on your data structure.
  const slideDirection = direction === 'left' ? -50 : 50;

  return (
    <MotionBox
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, x: slideDirection },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={startDate}
        iconStyle={{ bg: 'quaternary.500', color: '#fff' }}
        icon={<i className="fab fa-angular experience-icon"></i>}
      >
        <Text as="h3" fontWeight="bold" textAlign="left">
          {title}
        </Text>
        <Text as="p" textAlign="left" mb={4}>
          {description}
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={4} mt={4}>
          {technologies.map((tech) =>
            Object.prototype.hasOwnProperty.call(
              technologyMapping,
              tech.name.toLowerCase(),
            ) ? (
              <TechnologyGridItem
                key={tech.name}
                technology={tech.name.toLowerCase()}
              />
            ) : null,
          )}
        </Grid>
      </VerticalTimelineElement>
    </MotionBox>
  );
};

const Experience = () => {
  const { profileData } = useContext(ProfileContext);

  const {
    profileData: { experience },
  } = useContext(ProfileContext);
  console.log('ProfileData from context: ', profileData);
  console.log('experiences from context: ', experience);

  return (
    <VStack align="start" mt={10} width="100%" className="Experience-vstack">
      <Flex
        width="100%"
        direction={{ base: 'column-reverse', md: 'column' }}
        justifyContent="center"
        alignItems="center"
      >
        <Box width="100%" mt={8} flexGrow={1} py={5} overflowY="scroll">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
          >
            <Box display="flex" justifyContent="center" width="100%">
              {HeaderCreator('experience')}
            </Box>
            <Box display="flex" justifyContent="center" width="100%">
              <ExperienceContent />
            </Box>
            <VerticalTimeline>
              {experience &&
                experience.map((exp, index) => (
                  <ExperienceTimelineElement
                    key={index}
                    experiences={experience}
                    exp={exp}
                    direction={index % 2 === 0 ? 'left' : 'right'}
                  />
                ))}

              <VerticalTimelineElement
                iconStyle={{ background: '#AE944F', color: '#fff' }}
                icon={
                  <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                }
              />
            </VerticalTimeline>
          </Box>
        </Box>
      </Flex>
    </VStack>
  );
};

export default Experience;

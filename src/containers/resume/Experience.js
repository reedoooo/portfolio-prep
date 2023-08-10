import {
  Box,
  Badge,
  VStack,
  Flex,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import ExperienceContent from './ExperienceContent';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css'; // <-- Added this line to import the CSS
import HeaderCreator from '../../pages/utils/HeaderCreator';

const MotionBox = motion(Box);

const ExperienceTimelineElement = ({ exp, direction }) => {
  const { role, company, duration, technologies } = exp;

  const slideDirection = direction === 'left' ? -50 : 50; // <-- Adjusted here. Left will be -50 and right will be 50.

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
        date={duration}
        iconStyle={{ bg: 'quaternary.500', color: '#fff' }}
        icon={<i className="fab fa-angular experience-icon"></i>}
      >
        <Box>
          {technologies.slice(0, 2).map((tech, techIndex) => (
            <Badge key={techIndex} mx={1} mb={2} colorScheme="quaternary">
              {tech}
            </Badge>
          ))}
        </Box>
        <Text as="h3" fontWeight="bold" textAlign="left">
          {role}
        </Text>
        <Text as="h4" fontWeight="medium" textAlign="left">
          {company}
        </Text>

        <Box mt={4}>
          {technologies.map((tech, techIndex) => (
            <Badge
              key={techIndex}
              mx={1}
              mb={2}
              variant="outline"
              colorScheme="gray"
            >
              {tech}
            </Badge>
          ))}
        </Box>
      </VerticalTimelineElement>
    </MotionBox>
  );
};

const Experience = () => {
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300');
  const experiences = [
    {
      role: 'Software Developer',
      company: 'XYZ',
      duration: '2020-present',
      description:
        'Developed several features for the product, contributing to significant growth in the user base.',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
    },
    {
      role: 'Junior Developer',
      company: 'ABC',
      duration: '2018-2020',
      description:
        'Worked on front-end development using HTML, CSS, JavaScript, and jQuery. Helped design and implement responsive web pages.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    },
  ];
  return (
    <VStack align="start" mt={10} width="100%" className="Experience-vstack">
      <Flex
        width="100%"
        direction={{ base: 'column-reverse', md: 'column' }}
        justifyContent="center"
        alignItems="center"
      >
        <Box width="100%" mt={8} flexGrow={1}>
          <Box
            py={5}
            // h="90vh"
            overflowY="scroll"
            borderY="1px"
            borderColor={borderColor}
          >
            <Box
              // maxW="xxl"
              display="flex"
              m={0}
              flexDirection="column"
              justifyContent="center"
              width="100%"
            >
              <Box display="flex" justifyContent="center" width="100%">
                {HeaderCreator('experiences')}
              </Box>
              <Box display="flex" justifyContent="center" width="100%">
                <ExperienceContent />
              </Box>

              <VerticalTimeline>
                {experiences.map((exp, index) => (
                  <ExperienceTimelineElement
                    key={index}
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
        </Box>
      </Flex>
    </VStack>
  );
};

export default Experience;

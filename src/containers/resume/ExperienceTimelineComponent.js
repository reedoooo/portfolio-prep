import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Text, Grid, Box } from '@chakra-ui/react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { ProfileContext } from '../../context/ProfileContext';
import { useResumeContext } from '../../context/ResumeContext';
import TechnologyGridItem from './TechnologyGridItem';

const MotionBox = motion(Box);

const ExperienceTimelineElement = ({ exp, direction }) => {
  const { technologyMappingData } = useContext(ProfileContext);
  const { allIcons } = useResumeContext();
  const { title, duration, technologies } = exp;

  const actualTechnologies = technologies.map((tech) => tech.toLowerCase());
  const techIcons = actualTechnologies.map(
    (tech) => allIcons[technologyMappingData[tech]],
  );
  const firstIcon = techIcons[0];
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
        date={duration}
        iconStyle={{ bg: 'quaternary.500', color: '#fff' }}
        icon={firstIcon}
      >
        <Text as="h3" fontWeight="bold" textAlign="left">
          {title}
        </Text>
        <Text as="p" textAlign="left" mb={4}>
          {exp.description}
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={4} mt={4}>
          {techIcons.map((icon, index) => (
            <TechnologyGridItem key={index} technology={technologies[index]} />
          ))}
        </Grid>
      </VerticalTimelineElement>
    </MotionBox>
  );
};

export default ExperienceTimelineElement;

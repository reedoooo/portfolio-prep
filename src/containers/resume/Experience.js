import { Box, VStack, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import ExperienceContent from './ExperienceContent';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';
import HeaderCreator from '../../pages/utils/HeaderCreator';
import { ProfileContext } from '../../context/ProfileContext';
import ExperienceTimelineElement from './ExperienceTimelineComponent';

const Experience = () => {
  const { experienceData } = useContext(ProfileContext);

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
              {experienceData &&
                experienceData.map((exp, index) => (
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
      </Flex>
    </VStack>
  );
};

export default Experience;

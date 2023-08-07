import { GridItem, Flex, Icon, AspectRatio } from '@chakra-ui/react';
import React from 'react';

const TechIcon = ({ icon, size = 12 }) => (
  <GridItem as={AspectRatio} ratio={1} className="tech-icons">
    <Flex justifyContent="center" alignItems="center">
      <Icon as={icon} boxSize={size} />
    </Flex>
  </GridItem>
);

export default TechIcon;

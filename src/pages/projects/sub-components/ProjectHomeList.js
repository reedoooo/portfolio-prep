import React, { useEffect, useRef, useState } from 'react';
import { Container, useMediaQuery, useTheme } from '@chakra-ui/react';
import Carousel from './Carousel';

const ProjectHomeList = ({ projects, onDetails }) => {
  const [itemHeight, setItemHeight] = useState(0);
  const middleRef = useRef(null);
  const { breakpoints } = useTheme();
  const isSm = useMediaQuery(`(max-width: ${breakpoints.md})`)[0];
  const isMd = useMediaQuery(
    `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
  )[0];
  const isLg = useMediaQuery(`(min-width: ${breakpoints.lg})`)[0];
  useEffect(() => {
    if (middleRef.current) {
      setItemHeight(middleRef.current.offsetHeight);
    }
  }, [middleRef]);

  console.log('itemHeight', itemHeight);
  return (
    <Container
      maxW="container.lg"
      id="projects-home-list-container"
      height={'100%'}
      // width="100%"
      py={4}
    >
      <Carousel
        id={'projecthomelist-carousel'}
        items={projects}
        onDetails={onDetails}
        isLg={isLg}
        size={isSm ? 'sm' : isMd ? 'md' : 'lg'}
      />
    </Container>
  );
};

export default ProjectHomeList;

import React, { useEffect, useRef, useState } from 'react';
import { Container, useMediaQuery, useTheme } from '@chakra-ui/react';
import Carousel from './Carousel';

const ProjectHomeList = ({ projects, onDetails }) => {
  const [itemHeight, setItemHeight] = useState(0);
  const middleRef = useRef(null);
  const { breakpoints2 } = useTheme();
  const isSm = useMediaQuery(`(max-width: ${breakpoints2.md})`)[0];
  const isMd = useMediaQuery(
    `(min-width: ${breakpoints2.md}) and (max-width: ${breakpoints2.lg})`,
  )[0];
  const isLg = useMediaQuery(`(min-width: ${breakpoints2.lg})`)[0];

  useEffect(() => {
    if (middleRef.current) {
      setItemHeight(middleRef.current.offsetHeight);
    }
  }, [middleRef]);

  return (
    <Container
      maxW="container.lg"
      id="projects-home-list-container"
      height={'100%'}
      width={isSm ? '100%' : '100%'}
      py={4}
    >
      <Carousel
        id={'projecthomelist-carousel'}
        itemHeight={itemHeight}
        items={projects}
        onDetails={onDetails}
        isSm={isSm}
        isMd={isMd}
        isLg={isLg}
        size={isMd ? 'md' : isSm ? 'sm' : 'lg'}
      />
    </Container>
  );
};

export default ProjectHomeList;

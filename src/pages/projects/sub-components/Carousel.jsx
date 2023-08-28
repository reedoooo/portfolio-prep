import React, { useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import ProjectHomeItem from './ProjectHomeItem';
import CarouselControls from './CarouselControls';

const Carousel = ({ items, onDetails, size, itemHeight, isLg, isMd, isSm }) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const middleRef = useRef(null);

  const prevSlide = () => {
    const lastIndex = items.length - 1;
    setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);
  };

  const nextSlide = () => {
    const lastIndex = items.length - 1;
    setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1);
  };

  const computeTransform = (index) => {
    if (index === currentIndex) return 'translateX(-50%)';

    if (size === 'lg') {
      if (index === (currentIndex - 1 + items.length) % items.length)
        return 'translateX(-100%) scale(0.8)';
      if (index === (currentIndex + 1) % items.length)
        return 'translateX(0%) scale(0.8)';
    } else if (size === 'md' || size === 'sm') {
      return 'translateX(-200%)'; // Hide all non-current items off the screen
    }

    return 'translateX(-200%)';
  };

  return (
    <Box
      id="projectshomelist-carousel-container"
      style={{ height: itemHeight, minHeight: '60vh' }}
      position="relative"
      width={isSm ? '100%' : 'none'}
      height="100%"
      borderRadius="lg"
      perspective="1000px"
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Box
            ref={index === 2 ? middleRef : null}
            position="absolute"
            top="0"
            left="50%"
            height="100%"
            width={isSm ? '100%' : 'none'}
            bottom="0"
            transition="transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)"
            display={
              index === currentIndex ||
              (size === 'lg' &&
                (index === (currentIndex - 1 + items.length) % items.length ||
                  index === (currentIndex + 1) % items.length))
                ? 'block'
                : 'none'
            }
            zIndex={index === currentIndex ? '1' : '0'}
            transform={computeTransform(index)}
            boxShadow="-10px 10px 15px rgba(0, 0, 0, 0.2), 10px -10px 15px rgba(0, 0, 0, 0.2)"
            overflow={size === 'md' || size === 'sm' ? 'hidden' : 'visible'}
          >
            <ProjectHomeItem
              project={item}
              onDetails={onDetails}
              isSm={size === 'sm'}
              isMd={size === 'md'}
              isLg={size === 'lg'}
            />
          </Box>
        </React.Fragment>
      ))}
      <CarouselControls
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        isLg={isLg}
        isMd={isMd}
        isSm={isSm}
      />
    </Box>
  );
};

export default Carousel;

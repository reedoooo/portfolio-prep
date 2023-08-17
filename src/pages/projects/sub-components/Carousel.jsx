import React, { useRef, useState } from 'react';
import { Box, Fade } from '@chakra-ui/react'; // Changed ScaleFade to Fade
import ProjectHomeItem from './ProjectHomeItem';
import CarouselControls from './CarouselControls';

const Carousel = ({ items, onDetails, size }) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [itemHeight, setItemHeight] = useState(0);
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
    }
    return 'translateX(-200%)';
  };

  return (
    <Box
      id="projectshomelist-carousel-container"
      style={{ height: itemHeight, minHeight: '45vh' }}
      position="relative"
      width="100%"
      height="100%"
      borderRadius="lg"
      bottom="0"
      perspective="1000px"
    >
      {items.map((item, index) => (
        <Fade in={true} key={index}>
          <Box
            ref={index === 2 ? middleRef : null}
            position="absolute"
            top="0"
            left="50%"
            height="100%"
            bottom="0"
            transition="transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)" // Added cubic-bezier for smoother transition
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
            _after={{
              content: '""',
              display: 'block',
              mt: '10px',
              bottom: '-10px',
              left: '10%',
              right: '10%',
              height: '8px',
              borderRadius: '50%',
              background:
                'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 100%)',
            }}
            boxShadow="-10px 10px 15px rgba(0, 0, 0, 0.2), 10px -10px 15px rgba(0, 0, 0, 0.2)"
          >
            <ProjectHomeItem project={item} onDetails={onDetails} />
          </Box>
        </Fade>
      ))}
      <CarouselControls prevSlide={prevSlide} nextSlide={nextSlide} />
    </Box>
  );
};

export default Carousel;

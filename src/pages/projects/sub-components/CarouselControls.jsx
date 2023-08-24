import React from 'react';
import { HStack, Button, Box } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const CarouselControls = ({ prevSlide, nextSlide, isLg, isMd, isSm }) => {
  const getChevronSize = () => {
    if (isLg) return '48px';
    if (isMd) return '36px';
    if (isSm) return '24px';
    return '48px'; // default to large if nothing matches
  };

  const buttonStyles = {
    bg: 'rgba(0, 0, 0, 0.3)',
    _hover: {
      opacity: 1,
      transform: 'scale(1.05)',
      boxShadow: 'md',
    },
    _active: {
      bg: 'rgba(0, 0, 0, 0.8)',
    },
    transition: 'all 0.3s',
    opacity: 1,
    height: '100%',
    p: isSm ? '8px 2px' : '16px 4px', // Adjust padding based on breakpoint
  };

  return (
    <HStack
      position="absolute"
      top="65%"
      left="50%"
      transform="translateX(-50%)"
      zIndex="2"
      spacing={8}
      width={isSm ? '140%' : '70%'}
      px={4}
      alignItems={'center'}
      justifyContent="space-between"
    >
      <Button
        {...buttonStyles}
        onClick={prevSlide}
        leftIcon={
          <Box as={ChevronLeftIcon} boxSize={getChevronSize()} color="white" />
        }
      >
        {/* Prev */}
      </Button>
      <Button
        {...buttonStyles}
        onClick={nextSlide}
        rightIcon={
          <Box as={ChevronRightIcon} boxSize={getChevronSize()} color="white" />
        }
      >
        {/* Next */}
      </Button>
    </HStack>
  );
};

export default CarouselControls;

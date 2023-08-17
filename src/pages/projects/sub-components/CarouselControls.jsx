import React from 'react';
import { HStack, Button, useColorModeValue, Box } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const CarouselControls = ({ prevSlide, nextSlide }) => {
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
    p: '16px 4px', // Increased vertical padding while keeping horizontal padding at 4px
  };

  return (
    <HStack
      position="absolute"
      top="65%"
      left="50%"
      transform="translateX(-50%)"
      zIndex="2"
      spacing={8}
      width="80%"
      px={4}
      justifyContent="space-between"
    >
      <Button
        {...buttonStyles}
        onClick={prevSlide}
        leftIcon={<Box as={ChevronLeftIcon} boxSize="48px" color="white" />}
      >
        {/* Prev */}
      </Button>
      <Button
        {...buttonStyles}
        onClick={nextSlide}
        rightIcon={<Box as={ChevronRightIcon} boxSize="48px" color="white" />}
      >
        {/* Next */}
      </Button>
    </HStack>
  );
};

export default CarouselControls;

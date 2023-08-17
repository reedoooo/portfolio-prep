import React from 'react';
import { HStack, Button, useColorModeValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const CarouselControls = ({ prevSlide, nextSlide }) => {
  const buttonStyles = {
    bg: useColorModeValue(
      'translucentQuaternary300',
      'translucentQuaternary700',
    ),
    _hover: {
      bg: useColorModeValue(
        'translucentQuaternary500',
        'translucentQuaternary900',
      ),
      opacity: 1,
      transform: 'scale(1.05)',
      boxShadow: 'md',
    },
    _active: {
      bg: 'quaternary.50',
    },
    transition: 'all 0.3s',
    color: 'quaternary.50',
    fontWeight: 'bold',
    fontSize: 'lg',
    opacity: 1,
  };

  return (
    <HStack
      position="absolute"
      top="65%"
      left="50%"
      transform="translateX(-50%)"
      zIndex="2"
      spacing={8}
      width="50%"
      px={4}
      justifyContent="space-between"
    >
      <Button
        {...buttonStyles}
        onClick={prevSlide}
        leftIcon={<ChevronLeftIcon />}
      >
        Prev
      </Button>
      <Button
        {...buttonStyles}
        onClick={nextSlide}
        rightIcon={<ChevronRightIcon />}
      >
        Next
      </Button>
    </HStack>
  );
};

export default CarouselControls;

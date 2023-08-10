import React, { useEffect } from 'react';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollTo } from 'react-scroll-to';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const ScrollToTopButton = () => {
  const { isOpen, onToggle } = useDisclosure();
  const scrollThreshold = 400;

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      onToggle();
    } else {
      onToggle();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionBox
          position="fixed"
          bottom="2em"
          right="2em"
          animate={{ scale: [0, 1.2, 1] }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ScrollTo>
            {({ scroll }) => (
              <MotionButton
                onClick={() => scroll({ x: 0, y: 0, smooth: true })}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <ArrowUpIcon />
              </MotionButton>
            )}
          </ScrollTo>
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;

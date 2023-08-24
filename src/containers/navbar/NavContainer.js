import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

export function NavContainer({ children }) {
  const [navOpacity, setNavOpacity] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    const maxScrollValue = 400;

    const opacity = Math.min(Math.max(position / maxScrollValue, 0), 1);
    setNavOpacity(opacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const originalRed = 49;
  const originalGreen = 151;
  const originalBlue = 149;

  const interpolateColor = (start, end, factor) =>
    start + (end - start) * factor;

  const red = interpolateColor(originalRed, 255, navOpacity);
  const green = interpolateColor(originalGreen, 255, navOpacity);
  const blue = interpolateColor(originalBlue, 255, navOpacity);

  const textColor = `rgba(${red}, ${green}, ${blue}, 1)`;

  return (
    <Box
      as="nav"
      display="flex"
      p="0.3rem 2rem"
      fontSize="1.2rem"
      alignItems="center"
      color={textColor}
      bg={`rgba(0, 31, 34, ${navOpacity})`}
      transition="all 0.3s ease-out 0s"
      position="sticky"
      height="10vh"
      top="0"
      zIndex="500"
      maxWidth="100%"
      flexDirection="row"
      justifyContent="space-between"
      boxShadow={
        navOpacity > 0.5 ? '0px 10px 10px 0px rgba(9, 5, 29, 0.171)' : 'none'
      }
    >
      {React.cloneElement(children, { textColor })}
    </Box>
  );
}

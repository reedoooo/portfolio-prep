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

  // Starting color is RGB(49, 151, 149)
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
      padding="0.3rem 2rem"
      fontSize="1.2rem"
      alignItems={'center'}
      color={textColor}
      backgroundColor={`rgba(0, 31, 34, ${navOpacity})`} // Adjust if you don't want the background to change
      transition="all 0.3s ease-out 0s"
      position="sticky"
      minWidth={'100vw'}
      height="10vh"
      top="0"
      zIndex="500"
    >
      {React.cloneElement(children, { textColor })}
    </Box>
  );
}

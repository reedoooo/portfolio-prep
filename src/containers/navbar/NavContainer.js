import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

export function NavContainer({ children }) {
  const [navOpacity, setNavOpacity] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    const maxScrollValue = 400; // Adjust this value to change the scroll length over which the transition happens

    // Clamp position / maxScrollValue between 0 and 1
    const opacity = Math.min(Math.max(position / maxScrollValue, 0), 1);
    setNavOpacity(opacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      as="nav"
      display="flex"
      padding="0.3rem 2rem"
      fontSize="1.2rem"
      alignItems={'center'}
      backgroundColor={`rgba(0, 31, 34, ${navOpacity})`} // Change color accordingly
      transition="all 0.3s ease-out 0s"
      position="sticky"
      height="10vh"
      top="0"
      zIndex="100"
    >
      {children}
    </Box>
  );
}

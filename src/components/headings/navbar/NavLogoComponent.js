import { Box, Image, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../../assets/navlogo.png';

export function NavLogoComponent({ textColor }) {
  return (
    <Box display="flex" alignItems="center">
      <RouterLink to="/home">
        <Box
          className="logo-container"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxSize="4em"
          position="relative"
        >
          <Image src={logo} alt="Logo" boxSize="2em" />
          <Box
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
            backgroundColor="teal.500"
            opacity="0.5"
            borderRadius="full"
          />
        </Box>
      </RouterLink>
      <Text
        ml={3}
        fontSize="xxl"
        fontWeight="bold"
        color={textColor} // Use the textColor here
        fontFamily="'Roboto Slab', serif"
      >
        ReedVogt.com
      </Text>
    </Box>
  );
}

export default NavLogoComponent;

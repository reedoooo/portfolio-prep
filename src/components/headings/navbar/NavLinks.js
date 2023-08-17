import { useContext } from 'react';
import {
  Stack,
  Link,
  Button,
  useMediaQuery,
  Text,
  Flex,
  useTheme,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../../../context/Auth/authContext';
import SideBar from './SideBar';
import NavLogoComponent from './NavLogoComponent';
import { LoginModal } from './AuthControls';

function NavLinks({ textColor }) {
  const theme = useTheme();
  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`); // Using md breakpoint from theme
  const { isLoggedIn, logout } = useContext(AuthContext);

  // Abstracting the navigation links to a reusable variable
  const links = (
    <>
      <Link
        as={RouterLink}
        to="/home"
        fontSize="lg"
        fontWeight="bold"
        color={textColor}
        _hover={{ color: 'secondary.50', transition: 'color 0.3s' }}
      >
        Home
      </Link>
      <Link
        as={RouterLink}
        to="/projects"
        fontSize="lg"
        fontWeight="bold"
        color={textColor}
        _hover={{ color: 'secondary.200', transition: 'color 0.3s' }}
      >
        Projects
      </Link>
      <Link
        as={RouterLink}
        to="/resume"
        fontSize="lg"
        fontWeight="bold"
        color={textColor}
        _hover={{ color: 'secondary.50', transition: 'color 0.3s' }}
      >
        Resume
      </Link>
      {isLoggedIn && (
        <Link
          as={RouterLink}
          to="/profile"
          fontSize="lg"
          fontWeight="bold"
          color={textColor}
          _hover={{ color: 'quaternary.400', transition: 'color 0.3s' }}
        >
          Profile
        </Link>
      )}
      {!isLoggedIn && <LoginModal />}
      {isLoggedIn && (
        <Button onClick={logout} variant="outline" color={textColor}>
          Logout
        </Button>
      )}
    </>
  );

  return (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      width="100%"
      maxWidth={isMobile ? '768px' : '100%'}
      top="0"
      height="10vh"
      color={textColor}
      id="navlinks-container"
    >
      {isMobile ? (
        <SideBar>
          <Text fontSize="lg" fontWeight="bold" color="secondary.50">
            ReedVogt.com
          </Text>
          {links}
        </SideBar>
      ) : (
        <>
          <Stack spacing={4} direction="row" align="center">
            <NavLogoComponent textColor={textColor} />
          </Stack>
          <Stack
            spacing={20}
            direction="row"
            justifyContent="right"
            align="center"
            width="100%"
            flexGrow={'1'}
          >
            {links}
          </Stack>
        </>
      )}
    </Flex>
  );
}

export default NavLinks;

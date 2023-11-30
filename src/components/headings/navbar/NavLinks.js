import { useContext } from 'react';
import {
  Stack,
  Link,
  Button,
  useMediaQuery,
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
        position="relative"
        zIndex="1"
        _after={{
          content: "''",
          position: 'absolute',
          width: '0',
          borderRadius: '16px',
          background: '#319795',
          bottom: '1px',
          left: '0',
          zIndex: '-1',
          transition: 'all 0.3s ease-out',
        }}
        _hover={{
          _after: {
            width: '100%',
          },
        }}
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
      position={'sticky'}
      justify="space-between"
      width="100%"
      top="0"
      height="10vh"
      color={textColor}
      id="navlinks-container"
      justifyContent="space-between"
      p="0.3rem 2rem"
      _hover={{ textDecoration: 'none' }}
    >
      {isMobile ? (
        <SideBar>{links}</SideBar>
      ) : (
        <>
          <Stack spacing={4} direction="row" align="center">
            <NavLogoComponent textColor={textColor} />
          </Stack>
          {links}
        </>
      )}
    </Flex>
  );
}

export default NavLinks;

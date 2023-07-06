import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Link as ChakraLink,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Button,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineDashboard,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/Auth/authContext";
import Login from "../../Auth/login";
import logo from "../../../assets/navlogo.png";

<Box
  className="logoGroup"
  display="flex"
  flexDirection="row"
  alignItems="center"
  justifyContent="space-between"
>
  <ChakraLink
    className="logo-button"
    as={Link}
    to="/home"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Image src={logo} alt="Logo" boxSize="3em" />
  </ChakraLink>
</Box>;

function NavBar() {
  const loginDisclosure = useDisclosure();
  const signupDisclosure = useDisclosure();
  const toggler = useDisclosure(); // assuming toggler is used for sidebar/hamburger menu
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [navBackground, setNavBackground] = useState("transparent");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position > 50) {
      setNavBackground("rgba(173, 216, 230, 0.7)");
    } else {
      setNavBackground("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <Box
      id="home"
      className="navbar"
      as="nav"
      top={0}
      left={0}
      right={0}
      zIndex={52}
      display="flex"
      flexDirection="row"
      flex={1}
      alignItems="center"
      justifyContent="space-between"
      padding="0.3rem 2rem"
      fontSize="1.2rem"
      position="fixed"
      // backgroundColor="transparent"
      backgroundColor={navBackground}
      transition="all 0.3s ease-out 0s"
    >
      <Box
        className="logo-nav"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Box
          className="logoGroup"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <ChakraLink
            className="logo-button"
            as={Link}
            to="/home"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            <Image src={logo} alt="Logo" boxSize="3em" />
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
          </ChakraLink>
        </Box>

        <Box
          display={{ base: "block", md: "none" }}
          onClick={toggler.onToggle} // change to the actual toggle function for your sidebar
          className="navbar-toggler"
          position="relative"
          backgroundColor="transparent"
          borderColor="transparent"
        >
          {toggler.isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18 6L6 18"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </Box>

        <Box
          display={{ base: toggler.isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Stack
            spacing={4}
            direction="row"
            align="center"
            justify="space-around" // change justify to 'space-around'
            pt={[4, 4, 0, 0]}
            pb={[4, 4, 0, 0]}
            width="100%" // Add this to ensure items span the entire width
          >
            <ChakraLink
              as={Link}
              to="/home"
              fontSize="md"
              fontWeight="bold"
              color="teal.500"
              onClick={toggler.onClose}
            >
              <Box display="flex" alignItems="center">
                <AiOutlineHome />
                Home
              </Box>
            </ChakraLink>

            {isLoggedIn && (
              <ChakraLink
                as={Link}
                to="/profile"
                fontSize="md"
                fontWeight="bold"
                color="teal.500"
                onClick={toggler.onClose}
              >
                <Box display="flex" alignItems="center">
                  <AiOutlineUser />
                  Profile
                </Box>
              </ChakraLink>
            )}

            <ChakraLink
              as={Link}
              to="/projects"
              fontSize="md"
              fontWeight="bold"
              color="teal.500"
              onClick={toggler.onClose}
            >
              <Box display="flex" alignItems="center">
                <AiOutlineFundProjectionScreen />
                Projects
              </Box>
            </ChakraLink>

            <ChakraLink
              as={Link}
              to="/resume"
              fontSize="md"
              fontWeight="bold"
              color="teal.500"
              onClick={toggler.onClose}
            >
              <Box display="flex" alignItems="center">
                <AiOutlineDashboard />
                Resume
              </Box>
            </ChakraLink>

            {isLoggedIn ? (
              <ChakraLink
                as={Button}
                variant="outline"
                borderWidth={2}
                borderColor={"teal.500"}
                color="teal.500"
                size="md"
                fontWeight="bold"
                onClick={logout}
              >
                <Box display="flex" alignItems="center">
                  <CgFileDocument />
                  Logout
                </Box>
              </ChakraLink>
            ) : (
              <>
                <ChakraLink
                  fontSize="md"
                  fontWeight="bold"
                  color="teal.500"
                  borderWidth={2}
                  borderColor={"teal.500"}
                  size="md"
                  onClick={loginDisclosure.onOpen}
                >
                  <Box display="flex" alignItems="center">
                    <CgFileDocument />
                    Login
                  </Box>
                </ChakraLink>
                <Modal
                  isOpen={loginDisclosure.isOpen}
                  onClose={loginDisclosure.onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      {/* Replace this with your actual login component */}
                      <Login
                        signupMode={false}
                        onLogin={loginDisclosure.onClose}
                      />
                      <ChakraLink
                        fontSize="sm"
                        fontWeight="bold"
                        color="teal.500"
                        onClick={() => {
                          loginDisclosure.onClose();
                          signupDisclosure.onOpen();
                        }}
                      >
                        Don't have an account? Sign up here.
                      </ChakraLink>
                    </ModalBody>
                  </ModalContent>
                </Modal>

                <Modal
                  isOpen={signupDisclosure.isOpen}
                  onClose={signupDisclosure.onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Sign Up</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Login
                        signupMode={true}
                        onLogin={signupDisclosure.onClose}
                      />
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </>
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default NavBar;

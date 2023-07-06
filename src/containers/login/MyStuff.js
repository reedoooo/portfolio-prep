import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { AuthContext } from "../../context/Auth/authContext.js";
import Login from "../../components/Auth/login";

function MyStuff() {
  const [isOpen, setIsOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const toast = useToast();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (username, password) => {
    const loginResult = await authContext.login(username, password);
    return loginResult; // Should return true for success, false for failure
  };

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await axios.get("/api/users/profile");
        console.log(response.data);
        document.title = `${response.data.basic_info.name}`;

        toast({
          title: "Success!",
          description: `Welcome, ${response.data.basic_info.name}!`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "An error occurred.",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };

    loadUsers();
  }, [toast]);

  return (
    <VStack spacing={4} align="center" m={5}>
      <Box textAlign="center">
        <Text fontSize="xl" fontWeight="bold">
          Welcome to My Website
        </Text>
      </Box>

      <Button onClick={handleOpen} colorScheme="purple">
        Open Login Modal
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose} isCentered={true} size="lg">
        <ModalOverlay />
        <ModalContent bg="gray.100" h="70vh" w="45vh" borderRadius="10px">
          <ModalHeader
            textAlign="center"
            fontWeight="bold"
            colorScheme="purple"
          >
            Login
          </ModalHeader>
          <ModalCloseButton color="gray.500" />
          <ModalBody pb={6}>
            <Login onLogin={handleSubmit} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
}

export default MyStuff;

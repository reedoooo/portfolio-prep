import { useContext } from 'react';
import {
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import { AuthContext } from '../../../context/Auth/authContext';
import Login from '../../Auth/login';

export function LoginModal({ textColor }) {
  const { isLoggedIn } = useContext(AuthContext);
  const loginDisclosure = useDisclosure();

  return (
    <>
      {!isLoggedIn && (
        <>
          <Link
            variant="outline"
            borderWidth={2}
            borderColor={'quaternary.400'}
            color={textColor} // Use the textColor here
            size="md"
            fontSize="lg"
            fontWeight="bold"
            onClick={loginDisclosure.onOpen}
            _hover={{
              borderColor: 'quaternary.400',
              color: 'quaternary.400',
              transition: 'color 0.3s',
            }}
          >
            Login
          </Link>

          <Modal
            isOpen={loginDisclosure.isOpen}
            onClose={loginDisclosure.onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Login</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Login signupMode={false} onLogin={loginDisclosure.onClose} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
}

export function SignupModal({ textColor }) {
  const { isLoggedIn } = useContext(AuthContext);
  const signupDisclosure = useDisclosure();

  return (
    <>
      {!isLoggedIn && (
        <>
          <Link
            variant="outline"
            borderWidth={2}
            borderColor={'secondary.50'}
            color={textColor} // Use the textColor here
            size="md"
            fontSize="lg"
            fontWeight="bold"
            onClick={signupDisclosure.onOpen}
            _hover={{
              borderColor: 'quaternary.400',
              color: 'quaternary.400',
              transition: 'color 0.3s',
            }}
          >
            Sign Up
          </Link>

          <Modal
            isOpen={signupDisclosure.isOpen}
            onClose={signupDisclosure.onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Sign Up</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Login signupMode={true} onLogin={signupDisclosure.onClose} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
}

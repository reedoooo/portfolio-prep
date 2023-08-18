import React from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useColorModeValue,
  VStack,
  useTheme,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function SideBar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();

  const sidebarBgColor = theme.colors.quaternary[700];
  const sidebarOverlayColor =
    theme.colors.customColors.translucentQuaternary700;
  const sidebarTextColor = useColorModeValue('gray.700', 'gray.200');
  const closeButtonColor = useColorModeValue(
    theme.colors.quaternary[300],
    theme.colors.quaternary[600],
  );
  const headerBgColor = theme.colors.customColors.translucentQuaternary800;
  const footerBgColor = theme.colors.customColors.translucentQuaternary901;

  return (
    <Box>
      <Button
        onClick={onOpen}
        bg="transparent"
        _hover={{ bg: 'transparent', opacity: 0.8 }}
      >
        <HamburgerIcon boxSize={7} />
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="25%">
        <DrawerOverlay bg={sidebarOverlayColor}>
          <DrawerContent bg={sidebarBgColor} color={sidebarTextColor}>
            <DrawerCloseButton color={closeButtonColor} size="lg" m={2} />

            <DrawerHeader
              borderBottomWidth="1px"
              fontWeight="bold"
              fontSize="2xl"
              color={sidebarTextColor}
              pb={4}
              mb={4}
              bg={headerBgColor}
            >
              Navigation
            </DrawerHeader>

            <DrawerBody>
              <VStack spacing={4} align="start" width="100%">
                {children}
              </VStack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px" bg={footerBgColor}>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default SideBar;

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
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function SideBar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sidebarBgColor = useColorModeValue('gray.100', 'gray.700');
  const sidebarTextColor = useColorModeValue('gray.700', 'gray.200');
  const closeButtonColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box>
      <Button
        onClick={onOpen}
        bg="transparent"
        _hover={{ bg: 'transparent', opacity: 0.8 }}
      >
        <HamburgerIcon boxSize={7} />
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay>
          <DrawerContent bg={sidebarBgColor}>
            <DrawerCloseButton color={closeButtonColor} size="lg" m={2} />

            <DrawerHeader
              borderBottomWidth="1px"
              fontWeight="bold"
              fontSize="xl"
              color={sidebarTextColor}
              pb={4}
              mb={4}
            >
              Navigation
            </DrawerHeader>

            <DrawerBody>
              <Grid templateRows="repeat(auto-fill, minmax(60px, 1fr))" gap={4}>
                {React.Children.map(children, (child, index) => (
                  <GridItem key={index} p={3}>
                    {child}
                  </GridItem>
                ))}
              </Grid>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
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

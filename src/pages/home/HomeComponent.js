import React, { Component } from 'react';
import log02 from '../../assets/logo.png';
import { Box, Flex, Image, Text, ScaleFade, Button } from '@chakra-ui/react';
import ScrollButton from '../utils/ScrollButton';
import { ProfileContext } from '../../context/ProfileContext';

class HomeComponent extends Component {
  render() {
    return (
      <ProfileContext.Consumer>
        {(context) => (
          <Flex
            alignItems="center"
            justifyContent="center"
            h={'100vh'}
            w={'100vw'}
            // py={4}
            flexDirection="column"
            // backgroundColor="customColors.translucentQuaternary300" // Using your custom translucent color
            bg="customColors.translucentQuaternary900"
          >
            <ScaleFade initialScale={0.9} in={true}>
              <Box textAlign="center" zIndex={60} alignItems={'center'}>
                <Box
                  className="logoGroup"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{ transform: 'scale(1.1)', transition: '0.5s' }} // Adding hover effect to the logo group
                >
                  <Box
                    className="logo-button"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    borderRadius="full"
                    boxShadow="0px 0px 0px 4px black"
                    transition="0.5s"
                  >
                    <Image
                      src={log02}
                      alt="My Logo"
                      boxSize="4em"
                      position="relative"
                    />
                    <Box
                      position="absolute"
                      top="0"
                      bottom="0"
                      left="0"
                      right="0"
                      // backgroundColor="quaternary.500" // Using your brand color
                      bg="customColors.translucentQuaternary900"
                      opacity="0.5"
                      borderRadius="full"
                      transition="0.5s"
                    />
                  </Box>
                </Box>
                <Text
                  as="h1"
                  mt={4}
                  mb={2}
                  fontFamily={
                    "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                  }
                  fontSize={['2xl', '3xl', '4xl', '5xl']} // Making it responsive
                  textAlign={'center'}
                  fontWeight="600"
                  color={'white'} // Using your brand color
                >
                  Welcome to{' '}
                  {context.profileData && context.profileData.basic_info
                    ? context.profileData.basic_info.name
                    : 'Loading...'}
                  &apos;s Portfolio
                </Text>
                <Text
                  fontSize={['sm', 'md', 'lg', 'xl']} // Making it responsive
                  textAlign={'center'}
                  color={'secondary.300'} // Using your secondary color
                  mb={6}
                >
                  A passionate developer and designer.
                </Text>
                <ScrollButton
                  to="profileSection"
                  smooth={true}
                  duration={500}
                  mt={4}
                  colorScheme="quaternary"
                  size="md"
                >
                  Scroll
                </ScrollButton>
              </Box>
            </ScaleFade>
          </Flex>
        )}
      </ProfileContext.Consumer>
    );
  }
}

export default HomeComponent;

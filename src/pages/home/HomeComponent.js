import React, { Component } from "react";
import log02 from "../../assets/logo.png";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
// import logo from "../../../assets/navlogo.png";

class HomeComponent extends Component {
  render() {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        // h={`calc(100vh - 100px)`}
        h={'100vh'}

        w={"100vw"}
        flexDirection="column"
      >
        <Box
          textAlign="center"
          zIndex={60}
          alignItems={"center"}
        >
          <Box
            className="logoGroup"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              className="logo-button"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <Image
                src={log02}
                alt="My Logo"
                boxSize="4em"
                position="relative"
                // filter="brightness(0.5) sepia(1) hue-rotate(90deg) saturate(5) brightness(0.8)"
              />
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
          </Box>
          <br />
          <Text
            as="h1"
            mb={0}
            fontFamily={
              "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
            }
            fontSize={"300%"}
            textAlign={"center"}
            fontWeight="600 !important"
            color={"white"}
          >
            {/* {this.props.profileData.basic_info.name} */}
          </Text>
        </Box>
      </Flex>
    );
  }
}

export default HomeComponent;

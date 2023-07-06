import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ResumeComponent from "../../components/resume/ResumeComponent";
import Particle from "./Particle";

function ResumeContainer() {
	
  return (
    <Box
      marginTop="128px"
      minH="100vh"
      minW="100vw"
      bgGradient="linear(to-r, blue.300, blue.500)"
      p={8}
      justifyContent={"center"}
      flexGrow={1}
    >
      <Box>
        {Particle && <Particle />}
        <ResumeComponent />
        <Box
          as="footer"
          mt={8}
          py={4}
          textAlign="center"
          borderTop="1px"
          borderColor="gray.300"
        >
          <Text>
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default ResumeContainer;

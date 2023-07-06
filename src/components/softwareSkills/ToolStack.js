import { Grid, GridItem, Box, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { SiLinux, SiVisualstudiocode, SiPostman, SiHeroku, SiVercel } from "react-icons/si";

function Toolstack() {
  return (
    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
      <GridItem
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="transparent"
      >
        <Box as="h2" fontSize="4xl" color={"white"}>
          Tools
        </Box>
      </GridItem>
      <GridItem>
        <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={4}>
          <GridItem as={Flex} justifyContent="center" alignItems="center" className="tech-icons">
            <Icon as={SiLinux} boxSize={8} />
          </GridItem>
          <GridItem as={Flex} justifyContent="center" alignItems="center" className="tech-icons">
            <Icon as={SiVisualstudiocode} boxSize={8} />
          </GridItem>
          <GridItem as={Flex} justifyContent="center" alignItems="center" className="tech-icons">
            <Icon as={SiPostman} boxSize={8} />
          </GridItem>
          <GridItem as={Flex} justifyContent="center" alignItems="center" className="tech-icons">
            <Icon as={SiVercel} boxSize={8} />
          </GridItem>
          <GridItem as={Flex} justifyContent="center" alignItems="center" className="tech-icons">
            <Icon as={SiHeroku} boxSize={8} />
          </GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}

export default Toolstack;

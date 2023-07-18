import React, { Component } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
// import Experience from "../../containers/experience/Experience.js";

class ProjectsComponent extends Component {
  render() {
    return (
      <Flex
        alignItems="center"
        justifyContent="top"
        h={'calc(100vh - 100px)'}
        w="100vw"
        flexDirection="column"
      >
        <Box textAlign="center" zIndex={60} w={'100vw'} h={'100vh'}>
          <Container>
            {/* <Experience profileData={this.props.profileData} /> */}
          </Container>
        </Box>
      </Flex>
    );
  }
}

export default ProjectsComponent;

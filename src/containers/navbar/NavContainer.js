import { Container } from "@chakra-ui/react";
import React, { Component } from "react";
import NavBar from "../../components/headings/navbar/Navigation";

class NavContainer extends Component {
  render() {
    return (
      <Container>
        <NavBar
          // profileData={profileData.basic_info}
        //   style={{
        //     display: "flex",
        //     zIndex: "100",
        //     justifyContent: "space-between",
        //     alignItems: "center",
        //     width: "100vw",
        //     height: "20vw",
        //     alignContent: "center",
        //     top: "0",
        //     backgroundColor: "black",
        //   }}
        />{" "}
      </Container>
    );
  }
}

export default NavContainer;

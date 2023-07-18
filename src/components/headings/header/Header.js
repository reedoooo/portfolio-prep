import { Box } from '@chakra-ui/react';
import React, { Component } from 'react';
// import { Container } from "react-bootstrap";
// import NavBar from "./Navigation.js";
// import { LinkContainer } from "react-router-bootstrap";
// import { Box, Center } from "@chakra-ui/react";
// import { motion } from "framer-motion";
class Header extends Component {
  titles = [];
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <header id="header" style={{ display: "block", minHeight: "100vh" }}>
      <header id="header" style={{ display: 'block' }}>
        <Box>
          {console.log(this.props)}
          {/* <NavBar
            profileData={this.props.basic_info} 
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "200%",
              alignContent: "center",
              top: "0", 
            }}
          /> */}

          <div
            className="row aligner"
            style={{
              height: '200%',
              alignContent: 'center',
              left: '0',
              top: '0',
            }}
          >
            <div className="bg"></div>
            <div className="star-field">
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
            </div>
          </div>
        </Box>
      </header>
    );
  }
}

export default Header;

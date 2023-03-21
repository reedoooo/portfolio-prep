import React, { Component } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./Navigation";
// import { LinkContainer } from "react-router-bootstrap";
import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
class Header extends Component {
  titles = [];

  render() {
    // const { basic_info } = this.props.profileData;
    // const name = basic_info.name;

    // if (this.props.profileData) {
    //   var name = this.props.profileData.name;
    //   this.titles = this.props.profileData.titles; //...map(x => [ x.toUpperCase(), 1500 ] ).flat();
    // }

    // const HeaderTitleTypeAnimation = React.memo(
    //   () => {
    //     return this.titles;
    //   },
    //   (props, prevProp) => true
    // );

    // function scrollHandler() {
    //   if (window.scrollY >= 20) {
    //     updateNavbar(true);
    //   } else {
    //     updateNavbar(false);
    //   }
    // }

    // window.addEventListener("scroll", scrollHandler);

    return (
      <header id="home" style={{ display: "block" }}>
        {console.log(this.props)}

        {/* <Nav
          activeKey="/LandingPage"
          fill
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          <Nav.Item>
            <LinkContainer to="/landingpage">
              <Nav.Link href="/">LandingPage</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <LinkContainer to="/profile">
            <Nav.Link href="/profile">Profile</Nav.Link>
          </LinkContainer>

          <Nav.Item>
            <LinkContainer to="/projects">
              <Nav.Link href="/projects">Projects</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/mystuff">
              <Nav.Link href="/mystuff">MyStuff</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav> */}
        <div className="row aligner" style={{ height: "100%" }}>
          {/* <div className="col-md-12"> */}
          <Navbar></Navbar>
          <Container
            className="frame-container"
            h="100vh"
            w="100vw"
            bg="gray.200"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <Center h="100vh" w="100vw" bg="gray.200">
                <iframe
                  scrolling="no"
                  title="hello"
                  style={{
                    width: "100vw",
                    height: "100vh",
                    alignItems: "center",
                    position: "static",
                    bottom: "0",
                  }}
                  src={"https://start-wring-042927.framer.app/"}
                />
              </Center>
            </motion.div>
          </Container>
        </div>
      </header>
    );
  }
}

export default Header;

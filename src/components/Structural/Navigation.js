import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
// import { CgFileDocument } from "react-icons/cg";
// import { LinkContainer } from "react-router-bootstrap";

function NavBar(props) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  let titles = [];
  if (props.profileData) {
    var name = props.profileData.name;
    titles = props.profileData.titles; //...map(x => [ x.toUpperCase(), 1500 ] ).flat();
  }

  return (
    <Navbar>
      <Container>
        <Navbar.Collapse
          expanded={expand}
          fixed="top"
          expand="md"
          className={navColour ? "sticky" : "navbar"}
        >
          <Nav>
            <Navbar.Brand href="/" className="d-flex">
              <img src={logo} className="img-fluid logo" alt="brand" />
            </Navbar.Brand>
            <Nav.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => {
                updateExpanded(expand ? false : "expanded");
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </Nav.Toggle>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/landingpage"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> LandingPage
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/profile"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/mystuff"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> MyStuff
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/reedoooo"
                target="_blank"
                className="fork-btn-inner"
              >
                {/* <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <CgFileDocument style={{ fontSize: "1.1em" }} /> */}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

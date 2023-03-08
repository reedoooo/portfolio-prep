import React, { Component } from "react";
// import { Navbar, Nav, NavItem } from "react-bootstrap";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landingpage from "./LandingPage";
// import MyStuff from "./MyStuff";
// import Projects2 from "./Projects2";
// import Projects2 from "./Projects2";

class Header extends Component {
  titles = [];

  render() {
    // if (this.props.sharedData) {
    //   var name = this.props.sharedData.name;
    //   this.titles = this.props.sharedData.titles;
    // }

    // const HeaderTitleTypeAnimation = React.memo(() => {
    //   return this.titles;
    // });

    return (
      <header
        id="landingpage"
        style={{ height: window.innerHeight - 100, display: "block" }}
      >
        {/* <Router>
          <Navbar
            fill
            style={{ position: "absolute", top: 10, right: 10 }}
          >
            <Nav>
              <NavItem>
                <Nav.Link href="/projects">Projects</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link href="/mystuff">My Stuff</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link href="/landingpage">Landing Page</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar>
          <Routes>
            <Route path="/projects" element={<Projects2 />} />
            <Route path="/mystuff" element={<MyStuff />} />
            <Route path="/landingpage" element={<Landingpage />} />
          </Routes>
        </Router>
                        <HeaderTitleTypeAnimation /> */}
      </header>
    );
  }
}

export default Header;

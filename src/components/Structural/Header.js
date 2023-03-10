import React, { Component } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Profile from "../Profile/Profile";
// import Skills from "../Profile/Skills";
// import StackProgress from "../Profile/StackProgress";
// import Education from "../Profile/Education";
// import Achievements from "../Profile/Achievements";
// import MyStuff from "../MyStuff/MyStuff";
// import Experience from "../Profile/Experience";
// import Projects from "../Projects/Projects";
import { Nav, Navbar } from "react-bootstrap";
// import Landingpage from "../LandingPage/LandingPage";

class Header extends Component {
  titles = [];
  constructor(props) {
    super(props);
    this.state = {
      profileData: this.props.profileData,
      // projectData: this.props.projectData,
    };
  }

  render() {
    return (
      <header
        id="home"
        style={{ height: window.innerHeight - 100, display: "block" }}
      >
        {console.log(this.state)}
        <Navbar>
          <Nav
            activeKey="/"
            fill
            style={{ position: "absolute", top: 10, right: 10 }}
          >
            <Nav.Item>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/mystuff">MyStuff</Nav.Link>
            </Nav.Item>
          </Nav>
          {/* <div className="row aligner" style={{ height: "100%" }}>
            <div className="col-md-12">
              <div>
                <span
                  className="iconify header-icon"
                  data-icon="la:laptop-code"
                  data-inline="false"
                ></span>
                <br />
                <h1 className="mb-0">{name}</h1>
                <div className="title-container">
                  <HeaderTitleTypeAnimation />
                </div>
              </div>
            </div>
          </div> */}
        </Navbar>
      </header>
    );
  }
}

export default Header;

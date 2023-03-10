import React, { Component } from "react";
// import $ from "jquery";
// import { Navbar, Nav, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Skills from "../Profile/Skills";
import StackProgress from "../Profile/StackProgress";
import Education from "../Profile/Education";
import Achievements from "../Profile/Achievements";
import MyStuff from "../MyStuff/MyStuff";
import Experience from "../Profile/Experience";
import Projects2 from "../Projects/Projects2";
import { Nav, Navbar } from "react-bootstrap";


class Header extends Component {
  titles = [];
  constructor(props) {
    super(props);
    this.state = {
      profileData: this.props.profileData.basic_info,
      projectData: this.props.projectData.basic_info
    };
  }
  render() {
    var name = this.props.name;
    this.titles = this.props.basic_info.titles; //...map(x => [ x.toUpperCase(), 1500 ] ).flat();


    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return this.titles;
      },
      (props, prevProp) => true
    );

    return (
      <Router>
        {/* <Navigation profileData={this.props.profileData}
              projectData={this.props.projectData}/> */}
        <Navbar>
          <Nav
            activeKey="/home"
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
          <div className="row aligner" style={{ height: "100%" }}>
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
          </div>
        </Navbar>
        <Routes>
          {/* <Route path="/data" element={<Navigation profileData={this.state.profileData}
              projectData={this.state.projectData}/>} /> */}

          {/* <Route path="/" element={<Landingpage profileData={this.props.profileData}
              projectData={this.props.projectData}/>} /> */}

          <Route path="/profile" element={<Profile />} />

          <Route
            path="/projects"
            element={
              <Projects2
                profileData={this.props.profileData}
                projectData={this.props.projectData}
              />
            }
          />

          <Route path="/mystuff" element={<MyStuff />} />

          <Route path="/profile/skills" element={<Skills />} />

          <Route path="/profile/stackprogress" element={<StackProgress />} />

          <Route path="/profile/education" element={<Education />} />

          <Route path="/profile/experience" element={<Experience />} />

          <Route path="/profile/achievements" element={<Achievements />} />
        </Routes>
      </Router>
    );
  }
}

export default Header;

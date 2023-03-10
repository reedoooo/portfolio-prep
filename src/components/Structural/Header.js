import React, { Component } from "react";
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
      profileData: this.props.profileData,
      projectData: this.props.projectData,
    };
  }
  // componentDidMount() {
  //   axios
  //     .get(
  //       "https://raw.githubusercontent.com/<your-github-username>/<your-repo-name>/main/public/profile.json"
  //     )
  //     .then((response) => {
  //       this.setState({ profileData: response.data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   axios
  //     .get(
  //       "https://raw.githubusercontent.com/<your-github-username>/<your-repo-name>/main/public/projects.json"
  //     )
  //     .then((response) => {
  //       this.setState({ projectData: response.data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    this.titles = [];
    if (this.state.profileData) {
      var name = this.state.profileData.name;
      this.titles = this.state.profileData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return this.titles;
      },
      (props, prevProp) => true
    );

    return (
      <header
        id="home"
        style={{ height: window.innerHeight - 100, display: "block" }}
      >
        <a
          href="https://github.com/reedoooo/portfolio-prep/blob/ec448c2d8401ec6dd2892d6ba5e7fca5a158d374/public/profile.json"
          target="_blank"
          rel="noreferrer"
          className="github-corner"
          aria-label="View source on GitHub"
        ></a>
        <Router>
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

            <Route path="/profile" element={<Profile />} />

            <Route
              path="/projects"
              element={
                <Projects2
                  profileData={this.props.profileData}
                  projectData={this.props.profileData}
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
      </header>
    );
  }
}

export default Header;

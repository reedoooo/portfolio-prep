import React, { Component } from "react";
import axios from "axios";
import "./reset.css";
import "./styles/App.scss";
// import data from "./projects.json";
import Header from "./components/Structural/Header";
// import Main from "./components/Structural/Main";
import Footer from "./components/Structural/Footer";
// import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
// import Skills from "../Profile/Skills";
// import StackProgress from "../Profile/StackProgress";
// import Education from "../Profile/Education";
// import Achievements from "../Profile/Achievements";
// import MyStuff from "../MyStuff/MyStuff";
// import Experience from "../Profile/Experience";
import Projects from "./components/Projects/Projects";
// import { Nav, Navbar } from "react-bootstrap";
// import Landingpage from "./components/LandingPage/LandingPage";
// import Main from "./components/Structural/Main";
import Landingpage from "./components/LandingPage/LandingPage";
import Main from "./components/Structural/Main";

class App extends Component {
  titles = [];

  constructor(props) {
    super(props);
    this.state = {
      profileData: {},
      projectData: {},
    };
  }

  componentDidMount = () => {
    this.loadProfileData();
    this.loadProjectData();
  };

  loadProfileData = async () => {
    try {
      let profile = `${process.env.REACT_APP_SERVER}/profile`;
      let response = await axios.get(profile);
      this.setState({
        profileData: response.data,
      });
    } catch (error) {
      console.log("Error loading profile data: ", error);
      alert(error.message);
    }
  };

  loadProjectData = async () => {
    try {
      let projects = `${process.env.REACT_APP_SERVER}/projects`;
      let response = await axios.get(projects);
      this.setState({
        projectData: response.data,
      });
    } catch (error) {
      console.log("Error loading project data: ", error);
      alert(error.message);
    }
  };

  render() {
    console.log(this.state);
    // this.titles = [];
    // if (this.state.profileData) {
    //   var name = this.state.profileData.name;
    //   this.titles = this.state.profileData.titles
    //     .map((x) => [x.toUpperCase(), 1500])
    //     .flat();
    // }

    // const HeaderTitleTypeAnimation = React.memo(
    //   () => {
    //     return this.titles;
    //   },
    //   (props, prevProp) => true
    // );

    return (
      <div className="MASTER-DIV">
        {/* <Header
          profileData={this.state.profileData.basic_info}
          projectData={this.state.projectData.basic_info}
        />
        <Main
          profileData={this.state.profileData}
          projectData={this.state.projectData}
        /> */}
        {/* <Navbar>
            <Nav
              activeKey="/home"
              fill
              style={{ position: "absolute", top: 10, right: 10 }}
            >
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
          </Navbar> */}
        <Landingpage
          profileData={this.state.profileData}
          projectData={this.state.profileData}
        />
        <Router>
          <Header
            profileData={this.state.profileData}
            projectData={this.state.profileData}
          />
          <Routes>
            {/* <Route
              exact
              path="/"
              element={
                <Landingpage
                  profileData={this.state.profileData}
                  projectData={this.state.profileData}
                />
              }
            >

            </Route> */}
            <Route exact path="/profile" element={<Profile />} />
            <Route
              exact
              path="/projects"
              element={
                <Projects
                  profileData={this.state.profileData}
                  projectData={this.state.profileData}
                />
              }
            />

            {/*
            <Route path="/mystuff" element={<MyStuff />} />

            <Route path="/profile/skills" element={<Skills />} />

            <Route path="/profile/stackprogress" element={<StackProgress />} />

            <Route path="/profile/education" element={<Education />} />

            <Route path="/profile/experience" element={<Experience />} />

            <Route path="/profile/achievements" element={<Achievements />} /> */}
          </Routes>
          {/* <main>
            <Landingpage
              profileData={this.state.profileData}
              projectData={this.state.profileData}
            />
          </main> */}
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;

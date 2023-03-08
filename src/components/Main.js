import React, { Component } from "react";
import $ from "jquery";
import Profile from "./Profile";
import { Navbar } from "react-bootstrap";
import Skills from "./Skills";
import StackProgress from "./StackProgress";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Achievements from "./Achievements";
import MyStuff from "./MyStuff";
import Splash from "./Splash";
import ProjectsDynamicSection from "./ProjectsDynamicSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Landingpage from "./LandingPage";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
      projectData: {},
    };
  }

  componentDidMount() {
    this.loadResumeFromPath(`resume.json`);
    this.loadProjectFromPath(`projects.json`);
  }

  loadResumeFromPath = (path) => {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: (data) => {
        this.setState({ resumeData: data });
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  loadProjectFromPath = (path) => {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: (data) => {
        this.setState({ projectData: data });
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  render() {
    const { resumeData, projectData } = this.state;
    return (
      <>
        <Router>
          <Navbar />
          <Header
            resumeBasicInfo={resumeData.basic_info}
            projectBasicInfo={projectData.basic_info}
          />
          <Routes>
            <Route path="/landingpage" element={<Landingpage />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/skills" element={<Skills />} />

            <Route path="/stackprogress" element={<StackProgress />} />

            <Route path="/education" element={<Education />} />

            <Route path="/workexperience" element={<WorkExperience />} />

            <Route path="/achievements" element={<Achievements />} />

            <Route
              path="/projectsdynamicsection"
              element={
                <ProjectsDynamicSection
                  resumeBasicInfo={resumeData.basic_info}
                  projectBasicInfo={projectData.basic_info}
                />
              }
            />
            <Route path="/splash" element={<Splash />} />
            <Route path="/mystuff" element={<MyStuff />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

import React, { Component } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";

class Home extends Component {
  render() {
    const projects = this.props.resumeData.projects;
    // const projects2 = this.props.resumeData.projects2;
    const allProjects =
    // this.props.location.pathname === "/projects2" ? projects :
    projects;
    const basicInfo = this.props.resumeData.basic_info;
    const skills = this.props.sharedData.skills;
    const experience = this.props.resumeData.experience;

    return (
      <div>
        <Projects resumeProjects={allProjects} resumeBasicInfo={basicInfo} />
        <Skills sharedSkills={skills} resumeBasicInfo={basicInfo} />
        <Experience resumeExperience={experience} resumeBasicInfo={basicInfo} />
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";

class Home extends Component {
  render() {
    const consOle = () => { console.log(Projects2) }
    const projects = this.props.resumeData.projects;
    const Projects2 = this.props.resumeData.projects;
    // const allProjects =
    //   this.props.location.pathname === "/projects2" ? projects :
    //     projects2;
    const basicInfo = this.props.resumeData.basic_info;
    const skills = this.props.sharedData.skills;
    const experience = this.props.resumeData.experience;
    consOle();


    return (
      <div>
        <Projects resumeProjects={projects} resumeBasicInfo={basicInfo} />
        <Skills sharedSkills={skills} resumeBasicInfo={basicInfo} />
        <Experience resumeExperience={experience} resumeBasicInfo={basicInfo} />
      </div>
    );
  }
}

export default Home;

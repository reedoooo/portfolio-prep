import React, { Component } from 'react';
import Projects from './Projects';

class Projects2 extends Component {
  render() {
    const projects = this.props.resumeData.projects;
    // const projects2 = this.props.resumeData.projects2;
    const allProjects = projects;
    // projects2 || projects;
    const basicInfo = this.props.resumeData.basic_info;

    return (
      <div className="background">
        <div className="transparentbox">
          <Projects resumeProjects={allProjects} resumeBasicInfo={basicInfo} />
        </div>
      </div>
    );
  }
}

export default Projects2;

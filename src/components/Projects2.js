import React, { Component } from 'react'
import Projects from "./Projects";


class Projects2 extends Component {

  render() {

    return (
      <div className='background'>
        <div className='transparentbox'>
          <Projects
            resumeProjects={this.props.resumeData.projects2}
            resumeBasicInfo={this.props.resumeData.basic_info}
          />
        </div>
      </div>
    );
  }
}

export default Projects2;


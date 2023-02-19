import React, { Component } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";

class Home extends Component {
  render() {
    // let name = null;
    return (
      <div>
        <Projects
          resumeProjects={this.props.resumeData.projects
            // (this.props.location.pathname === "/projects2" ? this.props.resumeData.projects2 : this.props.resumeData.projects)
              // name ? this.props.resumeData.projects || this.props.location.pathname === "/"
              // : this.props.resumeData.projects2 || this.props.location.pathname === "/projects2"
          }
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.props.sharedData.skills}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.props.resumeData.experience}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
      </div>
    );
  }
}

export default Home;

// import React, { Component } from "react";
// import Projects from "./Projects";
// import Skills from "./Skills";
// import Experience from "./Experience";

// class Home extends Component {
//   render() {
//     return (
//       <div>
//         <Projects
//           resumeHomeProjects={
//             if(to="/about") {
//               this.props.resumeData.projects
//               } else {
//                   this.props.resumeData.projects2
//               }
//           }
//           resumePageProjects={this.props.resumeData.projects}
//           resumeBasicInfo={this.props.resumeData.basic_info}
//         />
//         <Skills
//           sharedSkills={this.props.sharedData.skills}
//           resumeBasicInfo={this.props.resumeData.basic_info}
//         />
//         <Experience
//           resumeExperience={this.props.resumeData.experience}
//           resumeBasicInfo={this.props.resumeData.basic_info}
//         />
//       </div>
//     );
//   }
// }

// export default Home;

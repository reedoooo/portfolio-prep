import React, { Component } from "react";
import Landingpage from "../LandingPage/LandingPage";
import MyStuff from "../MyStuff/MyStuff";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
// import Navigation from "./Navigation";

export default class Main extends Component {
  render() {
    return (
      <>
        <main>
          {/* <Landingpage
            profileData={this.props.profileData}
            projectData={this.props.projectData}
          /> */}
          {/* <Profile
            profileData={this.props.profileData}
            projectData={this.props.projectData}
          />
          <Projects
            profileData={this.props.profileData.basic_info}
            projectData={this.props.projectData.projects}
          />
          <MyStuff
            profileData={this.props.profileData}
            projectData={this.props.projectData}
          /> */}
        </main>
      </>
    );
  }
}

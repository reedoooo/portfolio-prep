import React, { Component } from "react";
import Landingpage from "../LandingPage/LandingPage";
// import Navigation from "./Navigation";

export default class Main extends Component {

  render() {
    return (
      <>

<main>
  {/* <p>im stupid</p> */}
              <Landingpage profileData={this.props.profileData}
              projectData={this.props.projectData}/>
</main>
      </>
    );
  }
}

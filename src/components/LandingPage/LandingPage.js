import React from "react";
import Profile from "../Profile/Profile";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: this.props.profileData,
    };
  }

  render() {
    return (
      <div>
        <Profile
          profileData={this.state.profileData}
          styles={{ height: "100vh" }}
        />
        {/* <Projects profileData={this.state.profileData} styles={{ height: "100vh" }} /> */}
        {/* <MyStuff profileData={this.state.profileData} styles={{ height: "100vh" }} /> */}
      </div>
    );
  }
}

export default LandingPage;

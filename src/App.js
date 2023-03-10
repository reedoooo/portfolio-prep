import React, { Component } from "react";
import axios from "axios";
import "./reset.css";
import "./styles/App.scss";
// import $ from "jquery";
import Header from "./components/Structural/Header";
import Main from "./components/Structural/Main";
import Footer from "./components/Structural/Footer";

class App extends Component {
  titles = [];
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
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
      let apiFetch = `${process.env.REACT_APP_SERVER}/Data/profile.json`;
      let response = await axios.get(apiFetch);
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
      let apiFetch = `${process.env.REACT_APP_SERVER}/projects`;
      let response = await axios.get(apiFetch);
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
    console.log(this.state.projectData);

    return (
      <div className="MASTER-DIV">
        <Header
          profileData={this.state.profileData.basic_info}
          projectData={this.state.projectData.basic_info}
        />
        <Main
          profileData={this.state.profileData}
          projectData={this.state.projectData}
        />
        <Footer />
      </div>
    );
  }
}

export default App;


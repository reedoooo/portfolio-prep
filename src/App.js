import React, { Component } from "react";
import axios from "axios";
import "./reset.css";
import "./styles/App.scss";
import $ from "jquery";
import Header from "./components/Structural/Header";
import Main from "./components/Structural/Main";
import Footer from "./components/Structural/Footer";

class App extends Component {
  titles = [];
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      profileData: {},
      projectData: {},
    };
  }

  componentDidMount = () => {
    this.loadProjectData("projects.json");
    this.loadProfileData("profile.json");
  };

  loadProfileData = (filename) => {
    axios
      .get(
        `https://raw.githubusercontent.com/reedoooo/portfolio-prep/main/public/${filename}`
      )
      .then((response) => {
        this.setState({ profileData: response.data });
      })
      .catch((error) => {
        console.log("Error loading profile data: ", error);
        alert(error.message);
      });
  };

  loadProjectData = (filename) => {
    axios
      .get(
        `https://raw.githubusercontent.com/reedoooo/portfolio-prep/main/public/${filename}`
      )
      .then((response) => {
        this.setState(
          { projectData: response.data },
          () => (document.title = `${this.state.projectData.basic_info.name}`)
        );
      })
      .catch((error) => {
        console.log("Error loading project data: ", error);
        alert(error.message);
      });
  };

  render() {
    console.log(this.state.projectData);
    console.log(this.state.profileData);

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


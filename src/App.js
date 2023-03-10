import React, { Component } from "react";
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
    this.loadProjectData();
    this.loadProfileData("document.json");
  };

  loadProfileData = (path) => {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ profileData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  loadProjectData = () => {
    $.ajax({
      url: `portfolio_project_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState(
          { projectData: data },
          () => (document.title = `${this.state.projectData.basic_info.name}`)
        );
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  render() {
  console.log(this.state.projectData.basic_info);
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

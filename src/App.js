import React, { Component } from "react";
import $ from "jquery";
import "./reset.css";
import "./styles/App.scss";
import Header from "./components/Structural/Header";
import Footer from "./components/Structural/Footer";
import Main from "./components/Structural/Main";

class App extends Component {
  // titles = [];
  constructor(props) {
    super(props);
    this.state = {
      profileData: {},
      projectData: {},
    };
  }

  componentDidMount() {
    this.loadResumeFromPath(`profile.json`);
    this.loadProjectFromPath(`projects.json`);
  }

  loadResumeFromPath = (path) => {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: (data) => {
        this.setState({ profileData: data });
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  loadProjectFromPath = (path) => {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: (data) => {
        this.setState({ projectData: data });
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  render() {
    return (
      <div className="MASTER-DIV">
        <Header profileData={this.state.profileData}
              projectData={this.state.projectData}/>
        <Main profileData={this.state.profileData}
              projectData={this.state.projectData}/>
        <Footer />
      </div>
    );
  }
}

export default App;

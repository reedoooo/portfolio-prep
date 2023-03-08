import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import $ from "jquery";
import Profile from "./Profile";
import Projects from "./Projects";
import { Button } from "react-bootstrap";
import Skills from "./Skills";
import Greeting from "./Greeting";
import StackProgress from "./StackProgress";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Achievements from "./Achievements";
import MyStuff from "./MyStuff";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
      sharedData: {},
    };
  }

  componentDidMount() {
    this.loadSharedData();
    this.loadResumeFromPath(`res_primaryLanguage.json`);
  }

  loadResumeFromPath = (path) => {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: (data) => {
        this.setState({ resumeData: data });
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  loadSharedData = () => {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: (data) => {
        this.setState({ sharedData: data }, () => {
          document.title = `${this.state.sharedData.basic_info.name}`;
        });
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  render() {
    const { resumeData } = this.state;

    return (
      <>
        <div>
          <Greeting />
        </div>
        <LinkContainer to="/profile">
          <Profile as={Button} resumeBasicInfo={resumeData.basic_info} />
        </LinkContainer>
        <LinkContainer to="/skills">
          <Skills as={Button} />
        </LinkContainer>
        <LinkContainer to="/stackprogress">
          <StackProgress as={Button} />
        </LinkContainer>
        <LinkContainer to="/education">
          <Education as={Button} />
        </LinkContainer>
        <LinkContainer to="/workexperience">
          <WorkExperience as={Button} />
        </LinkContainer>
        <LinkContainer to="/achievements">
          <Achievements as={Button} />
        </LinkContainer>
        <LinkContainer to="/projects">
          <Projects as={Button} />
        </LinkContainer>
        <LinkContainer to="/mystuff">
          <MyStuff as={Button} />
        </LinkContainer>
      </>
    );
  }
}

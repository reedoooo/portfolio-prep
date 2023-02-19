import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects2 from "./components/Projects2";
import About from "./components/About";
import Home from "./components/Home";

class App extends Component {
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
    const { resumeData, sharedData } = this.state;

    return (
      <Router>
        <Header sharedData={sharedData.basic_info} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home resumeData={resumeData} sharedData={sharedData} />}
          />
          <Route
            path="/about"
            element={
              <About
                resumeBasicInfo={resumeData.basic_info}
                sharedBasicInfo={sharedData.basic_info}
              />
            }
          />
          <Route
            path="/projects2"
            element={
              <Projects2
                resumeData={resumeData}
                sharedData={sharedData}
              />
            }
          />
        </Routes>
        <Footer sharedBasicInfo={sharedData.basic_info} />
      </Router>
    );
  }
}

export default App;

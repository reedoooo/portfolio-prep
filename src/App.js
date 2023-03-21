import "./reset.css";
import "./styles/App.scss";
import { ChakraProvider } from "@chakra-ui/react";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Structural/Header";
import Landingpage from "./components/LandingPage/LandingPage";
import Profile from "./components/Profile/Profile";
import MyStuff from "./components/MyStuff/MyStuff";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Structural/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {},
    };
  }

  componentDidMount = () => {
    this.loadProfileData();
  };

  loadProfileData = async () => {
    try {
      let profile = `${process.env.REACT_APP_SERVER}/profile`;

      let response = await axios.get(profile);

      this.setState(
        {
          profileData: response.data,
        },
        () => {
          document.title = `${this.state.profileData.basic_info.name}`;
        }
      );
    } catch (error) {
      console.log("Error loading profile data: ", error);
      alert(error.message);
      return;
    }
  };

  render() {
    console.log(this.state);

    return (
      <ChakraProvider>
        <Router>
          <Header profileData={this.state.profileData.basic_info} />
          <main>
            <Landingpage profileData={this.state.profileData} />
          </main>
          <Routes>
            <Route
              exact
              path="/profile"
              element={<Profile profileData={this.state.profileData} />}
            />
            <Route
              path="/mystuff"
              element={<MyStuff profileData={this.state.profileData} />}
            />
            <Route
              exact
              path="/projects"
              element={<Projects profileData={this.state.profileData} />}
            />
          </Routes>
          <Footer />
        </Router>
      </ChakraProvider>
    );
  }
}

export default App;

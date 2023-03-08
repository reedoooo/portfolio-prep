import React, { Component } from "react";
// import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./Navbar";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

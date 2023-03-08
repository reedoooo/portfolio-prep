import React, { Component } from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="MASTER-DIV">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

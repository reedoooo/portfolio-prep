import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme(checked);
  }

  setTheme(checked) {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme = checked ? "dark" : "light";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles; //...map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return this.titles;
      }
    );

    return (
      <header
        id="home"
        style={{ height: window.innerHeight - 100, display: "block" }}
      >

        <Nav
          activeKey="/home"
          fill
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          <Nav.Item>
            <LinkContainer to="/">
              <Nav.Link href="/">Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/about">
              <Nav.Link eventKey="about">About</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/projects2">
              <Nav.Link eventKey="projects2">Projects</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/practice">
              <Nav.Link eventKey="practice">Practice</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>

          </Nav.Item>
        </Nav>
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <span
                className="iconify header-icon"
                data-icon="la:laptop-code"
                data-inline="false"
              ></span>
              <br />
              <h1 className="mb-0">{name}</h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
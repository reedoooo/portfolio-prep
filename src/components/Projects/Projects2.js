import React, { Component } from "react";
import ProjectDetailsModal from "../utils/ProjectDetailsModal";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

class Projects2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      value: "All",
      deps: {},
      detailsModalShow: false,
      filteredProjects: [],
    };
  }

  detailsModalShowHandler = (data) => {
    this.setState({ detailsModalShow: true, deps: data });
  };

  detailsModalCloseHandler = () => {
    this.setState({ detailsModalShow: false });
  };

  filterProjects = (query) => {
    const { projectData } = this.props;
    const { value } = this.state;
    const filtered = projectData.filter((project) =>
      project.title.toLowerCase().includes(query.toLowerCase())
    );
    if (value !== "All") {
      filtered.sort((a, b) => b[value] - a[value]);
    }
    this.setState({ filteredProjects: filtered });
  };

  handleChange = (e) => {
    const query = e.target.value;
    this.setState({ searchInput: query });
    this.filterProjects(query);
  };

  handleSelectChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
    this.filterProjects(this.state.searchInput);
  };


  renderProjects = () => {
    const { filteredProjects } = this.state;
    const { projectData } = this.props;
    const projects = filteredProjects.length
      ? filteredProjects
      : projectData;

    console.log("DynamicProjects Online");
    return projects.map((project) => (
      <div className="div-main" key={project.title}>
        <Col
          xs={4}
          className="wrapper2"
          style={{ cursor: "pointer" }}
          onClick={() => this.detailsModalShowHandler(project)}
        >
          <span className="portfolio-item d-block">
            <div className="foto">
              <div>
                <img
                  src={project.images[0]}
                  alt="projectImages"
                  height="230"
                  width="368"
                  style={{
                    marginBottom: 0,
                    paddingBottom: 0,
                    position: "relative",
                  }}
                />
                <span className="project-date">{project.startDate}</span>
                <br />
                <p className="project-title-settings mt-3">{project.title}</p>
              </div>
            </div>
          </span>
        </Col>
        <Col xs={8} className="wrapper">
          <h2 className="how-title">CSS3 Skill </h2>
          <div className="skill">
            <p>HTML5</p>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <p>CSS3</p>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <p>JQUERY</p>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </Col>
      </div>
    ));
  };

  render() {
    console.log("Projects Working");
    const { projectData, profileData } = this.props;
    const { filteredProjects, searchInput, value, detailsModalShow, deps } =
      this.state;

    const sectionName = profileData.section_name.projects || "";
    return (
      <Col>
        <Stack>
          <div className="background">
            <div className="transparentbox">
              <section id="portfolio">
                <InputGroup>
                  <Form.Control
                    type="search"
                    onChange={this.handleChange}
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    value={searchInput}
                  />
                  <InputGroup.Text id="basic-addon1">
                    Filter by:
                  </InputGroup.Text>
                  <Form.Control
                    as="select"
                    onChange={this.handleSelectChange}
                    value={value}
                  >
                    <option value="All">All</option>
                    <option value="name">Name</option>
                    <option value="popularity">Popularity</option>
                    <option value="recent">Recent</option>
                    <option value="size">Size</option>
                  </Form.Control>
                </InputGroup>
              </section>
            </div>
          </div>
        </Stack>

        <div className="background">
          <div className="transparentbox">
            <section id="portfolio">
              <div className="col-md-12">
                <h1 className="section-title" style={{ color: "black" }}>
                  <span>{sectionName}</span>
                </h1>
                <div className="col-md-12 mx-auto">
                  <div className="row mx-auto">
                    {filteredProjects.length || projectData.length ? (
                      <div>{this.renderProjects()}</div>
                    ) : null}
                    {/* {filteredProjects.length || projectData.length
                      ? this.renderProjects()
                      : null} */}
                  </div>
                </div>
                <ProjectDetailsModal
                  show={detailsModalShow}
                  onHide={this.detailsModalCloseHandler}
                  data={deps}
                />
              </div>
            </section>
          </div>
        </div>
      </Col>
    );
  }
}

export default Projects2;

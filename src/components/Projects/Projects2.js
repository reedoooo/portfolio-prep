import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectDetailsModal from "../utils/ProjectDetailsModal";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

class Projects2 extends Component {
  static propTypes = {
    projectData: PropTypes.object.isRequired,
    profileData: PropTypes.array.isRequired,
  };

  state = {
    deps: {},
    detailsModalShow: false,
    filteredProjects: [],
    searchInput: "",
    value: "All",
  };

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

  render() {
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

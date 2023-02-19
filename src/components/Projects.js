import React, { Component } from "react";
// import SearchBar from "../utils/SearchBar";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
      filteredProjects: []
    };
  }

  filterProjects = (query) => {
    const filtered = this.props.resumeProjects.filter((project) =>
      project.title.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ filteredProjects: filtered });
  };

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    let projects = [];

    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      projects = this.state.filteredProjects.length
        ? this.state.filteredProjects
        : this.props.resumeProjects;

      projects = projects.map(function (project) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={project.title} // <-- use project.title instead of projects.title
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(project)}>
                <div>
                  <img
                    src={project.images[0]}
                    alt="projectImages"
                    height="230"
                    width="368"
                    style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                  />
                  <span className="project-date">{project.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {project.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          {/* <div>
            <SearchBar filterProjects={this.filterProjects} />
          </div> */}
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
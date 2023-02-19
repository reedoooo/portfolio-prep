import React, { Component } from 'react'
import ProjectDetailsModal2 from './ProjectDetailsModal2';

class Projects2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow2: false,
    };
  }

  render() {
    let detailsModalShow2 = (data) => {
      this.setState({ detailsModalShow2: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow2: false });
    if (this.props.resumeProjects2 && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects2;
      var projects2 = this.props.resumeProjects2.map(function (projects2) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects2.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow2(projects2)}>
                <div>

                  <img
                    src={projects2.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                  />
                  <span className="project-date">{projects2.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects2.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio2">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects2}</div>
          </div>
          <ProjectDetailsModal2
            show={this.state.detailsModalShow2}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects2;


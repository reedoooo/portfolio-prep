import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectDetailsModal from './ProjectDetailsModal';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';


class Projects2 extends Component {
  static propTypes = {
    resumeProjects: PropTypes.array.isRequired,
    resumeBasicInfo: PropTypes.object.isRequired,
  };

  state = {
    deps: {},
    detailsModalShow: false,
    filteredProjects: [],
    searchInput: '',
    value: 'All',
  };

  detailsModalShow = (data) => {
    this.setState({ detailsModalShow: true, deps: data });
  };

  detailsModalClose = () => {
    this.setState({ detailsModalShow: false });
  };

  filterProjects = (query) => {
    const filtered = this.props.resumeProjects.filter((project) =>
      project.title.toLowerCase().includes(query.toLowerCase())
    );
    if (this.state.value !== "All") {
      filtered.sort((a, b) => b[this.state.value] - a[this.state.value]);
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
  };

  render() {
    const { resumeProjects, resumeBasicInfo } = this.props;
    const { filteredProjects, searchInput, value } = this.state;

    let projects = [];
    let sectionName = '';

    if (resumeProjects && resumeBasicInfo) {
      sectionName = resumeBasicInfo.section_name.projects || '';
      projects = filteredProjects.length ? filteredProjects : resumeProjects;

      projects = projects.map((project) => (

        <div className="div-main">
          <Col
            xs={4}
            className="wrapper2"
            key={project.title}
            style={{ cursor: 'pointer' }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => this.detailsModalShow(project)}>
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
                  <p className="project-title-settings mt-3">{project.title}</p>
                </div>
              </div>
            </span>
          </Col>
          <Col
          xs={8}
          className='wrapper'>
            <h2 className='how-title'>CSS3 Skill Progress bar</h2>
            <div className='skill'>
              <p>HTML5</p>
              <div className='skill-bar skill1'>
                <span className='skill-count1'>95%</span>
              </div>
            </div>
            <div className='skill'>
              <p>CSS3</p>
              <div className='skill-bar skill2'>
                <span className='skill-count2'>85%</span>
              </div>
            </div>
            <div className='skill'>
              <p>JQUERY</p>
              <div className='skill-bar skill3'>
                <span className='skill-count3'>75%</span>
              </div>
            </div>
          </Col>
        </div>
      ));
    }

    return (
      <div>
        <Stack>
          <div className="background">
            <div className="transparentbox">
              <section id="portfolio">

                <React.Fragment>
                  <InputGroup>
                    <Form.Control
                      type="search"
                      onChange={this.handleChange}
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      value={searchInput}
                    />
                    <InputGroup.Text id="basic-addon1">Filter by:</InputGroup.Text>
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
                </React.Fragment>
              </section>
            </div>
          </div>
        </Stack>

        <div className="background">
          <div className="transparentbox">
            <section id="portfolio">
              <div className="col-md-12">
                <h1 className="section-title" style={{ color: 'black' }}>
                  <span>{sectionName}</span>
                </h1>
                <div className="col-md-12 mx-auto">
                  <div className="row mx-auto">
                    {projects.length ? <div>{projects}</div> : null}

                  </div>
                </div>
                <ProjectDetailsModal
                  show={this.state.detailsModalShow}
                  onHide={this.detailsModalClose}
                  data={this.state.deps}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects2;

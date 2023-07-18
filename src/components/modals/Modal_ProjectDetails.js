import React from 'react';
import { Modal } from 'react-bootstrap';

const ProjectDetailsModal = ({ onHide, profileData, projects }) => {
  console.log(profileData);

  let technologies, title, description, url, tech;

  if (projects) {
    technologies = projects.technologies;
    title = projects.title;
    description = projects.description;
    url = projects.url;

    if (projects.technologies) {
      tech = technologies.map((icons, i) => (
        <li className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center">
              <i className={icons.class} style={{ fontSize: '300%' }}>
                <p className="text-center" style={{ fontSize: '30%' }}>
                  {icons.name}
                </p>
              </i>
            </div>
          </span>
        </li>
      ));
    }
  }

  return (
    <Modal
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
      zIndex={9999}
    >
      <span onClick={onHide} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: '50px' }}>
          <div className="slider-tab">
            <span
              className="iconify slider-iconfiy"
              data-icon="emojione:red-circle"
              data-inline="false"
              style={{ marginLeft: '5px' }}
            ></span>{' '}
            &nbsp;{' '}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:yellow-circle"
              data-inline="false"
            ></span>{' '}
            &nbsp;{' '}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>
          </div>
        </div>
        <div className="col-md-10 mx-auto">
          <h3 style={{ padding: '5px 5px 0 5px' }}>
            {title}
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ marginLeft: '10px' }}
                ></i>
              </a>
            ) : null}
          </h3>
          <p className="modal-description">{description}</p>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto">{tech}</ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;

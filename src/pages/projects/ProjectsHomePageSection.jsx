import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import CenteredSpinner from '../../components/utils/CenteredSpinner';
import Error from '../../components/utils/Error';
import ProjectsHomeContent from './sub-components/ProjectsHomeContent';
import SectionContainer from '../utils/SectionContainer';
import HeaderCreator from '../utils/HeaderCreator';
import { ProjectContext } from '../../context/ProjectContext';

const ProjectsHomePageSection = (props) => {
  const [projectArray, setProjectArray] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const {
    showDetailsModal,
    closeDetailsModal,
    detailsModalData,
    detailsModalShow,
  } = useContext(ProjectContext);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/api/myprofile`)
      .then((response) => {
        const data = response.data;
        if (data.length > 0 && data[0].projects) {
          setProjectArray(data[0].projects);
        } else {
          setProjectArray([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <SectionContainer id="projects-home-page-section">
      {HeaderCreator('projects')}
      {loading ? (
        <CenteredSpinner />
      ) : (
        <ProjectsHomeContent
          projects={projectArray}
          onDetails={showDetailsModal}
          showDetails={detailsModalShow}
          onHide={closeDetailsModal}
          detailsData={detailsModalData}
        />
      )}
      {error && <Error message={error.message} />}
    </SectionContainer>
  );
};

export default ProjectsHomePageSection;

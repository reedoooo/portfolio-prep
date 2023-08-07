// ProjectsHomePageSection.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CenteredSpinner from '../../components/utils/CenteredSpinner';
import Error from '../../components/utils/Error';
import ProjectsHomeContent from './sub-components/ProjectsHomeContent';
import SectionContainer from '../utils/SectionContainer';
import HeaderCreator from '../utils/HeaderCreator';

const ProjectsHomePageSection = (props) => {
  const [detailsModalData, setDetailsModalData] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [projectArray, setProjectArray] = useState([]);
  const [error, setError] = useState(null);
  // const sectionName = props.profileData?.section_name?.projects || '';
  const [loading, setLoading] = useState(true);

  const detailsModalShowHandler = (data) => {
    setDetailsModalShow(true);
    setDetailsModalData(data);
  };

  const detailsModalCloseHandler = () => {
    setDetailsModalShow(false);
  };

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
    <SectionContainer>
      {HeaderCreator('projects')}
      {loading ? (
        <CenteredSpinner />
      ) : (
        <>
          <ProjectsHomeContent
            projects={projectArray}
            onDetails={detailsModalShowHandler}
            showDetails={detailsModalShow}
            onHide={detailsModalCloseHandler}
            detailsData={detailsModalData}
          />
        </>
      )}
      {error && <Error message={error.message} />}
    </SectionContainer>
  );
};

export default ProjectsHomePageSection;

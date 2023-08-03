import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectDetailsModal from '../../components/modals/Modal_ProjectDetails';
import ProjectsHomeComponent from './ProjectsHomeComponent';
import { Spinner } from '@chakra-ui/react';

const ProjectsHomeContainer = (props) => {
  const [deps, setDeps] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [projectArray, setProjectArray] = useState([]);
  const [error, setError] = useState(null);
  const sectionName = props.profileData?.section_name?.projects || '';
  const [loading, setLoading] = useState(true);

  const detailsModalShowHandler = (data) => {
    setDetailsModalShow(true);
    setDeps(data);
  };

  const detailsModalCloseHandler = () => {
    setDetailsModalShow(false);
  };

  useEffect(() => {
    console.log('Starting request to /myprofile...');
    axios
      .get(`${process.env.REACT_APP_SERVER}/api/myprofile`)
      .then((response) => {
        console.log('Received response:', response);
        const data = response.data;
        if (data.length > 0 && data[0].projects) {
          console.log(
            'Setting projectArray to retrieved data:',
            data[0].projects,
          );
          setProjectArray(data[0].projects);
        } else {
          console.log('Data retrieved does not have expected structure');
          setProjectArray([]); // or handle this situation as you see fit
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(`Error occurred during request: ${error}`);
        setError(error);
      });
  }, []);

  console.log('ProjectContainer.js: props.profileData', props.profileData);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Spinner size="xl" />
        </div>
      ) : (
        <>
          <ProjectsHomeComponent
            sectionName={sectionName}
            projectArray={projectArray}
            detailsModalShowHandler={detailsModalShowHandler}
            profileData={props.profileData}
            marginTop="128px"
          />
          <ProjectDetailsModal
            show={detailsModalShow}
            onHide={detailsModalCloseHandler}
            data={deps}
          />
        </>
      )}

      {error && <div>Error: {error.message}</div>}
    </>
  );
};

export default ProjectsHomeContainer;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectDetailsModal from '../../components/modals/Modal_ProjectDetails';
import NavBar from '../../components/headings/navbar/Navigation';
import ProjectsComponent from '../../components/projects/ProjectsComponent';

const ProjectContainer = (props) => {
  const [searchInput, setSearchInput] = useState('');
  const [value, setValue] = useState('All');
  const [deps, setDeps] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);
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
    console.log('Starting request to /myProfileRoute...');
    axios
      .get(`${process.env.REACT_APP_SERVER}/api/myprofile`)
      .then((response) => {
        console.log('Received response:', response);
        const data = response.data[0].projects; // <--- Modification here
        console.log('Setting projectArray to retrieved data:', data);
        setProjectArray(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(`Error occurred during request: ${error}`);
        setError(error);
      });
  }, []);

  useEffect(() => {
    let filtered = [];

    if (searchInput.trim() === '') {
      filtered = projectArray;
    } else {
      filtered = projectArray.filter((project) =>
        project.title.toLowerCase().includes(searchInput.toLowerCase()),
      );
    }

    if (value !== 'All') {
      filtered.sort((a, b) => b[value] - a[value]);
    }

    setFilteredProjects(filtered);
  }, [projectArray, searchInput, value]);

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchInput(query);
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  console.log('ProjectContainer.js: props.profileData', props.profileData);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <NavBar />
          <ProjectsComponent
            searchInput={searchInput}
            value={value}
            sectionName={sectionName}
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}
            filteredProjects={filteredProjects}
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

export default ProjectContainer;

import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState('');
  const [value, setValue] = useState('All');
  const [deps, setDeps] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projectArray, setProjectArray] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null); // Add this line
  const [basicInfoData, setBasicInfoData] = useState(null); // Add this line
  const [skillsData, setSkillsData] = useState(null); // Add this line
  const [projectsData, setProjectsData] = useState(null); // Add this line
  const [experienceData, setExperienceData] = useState(null); // Add this line
  const [technologyMappingData, setTechnologyMappingData] = useState(null); // Add this line
  const detailsModalShowHandler = (data) => {
    setDetailsModalShow(true);
    setDeps(data);
  };

  const detailsModalCloseHandler = () => {
    setDetailsModalShow(false);
  };

  useEffect(() => {
    console.log('Starting request for profileData');
    axios
      .get(`${process.env.REACT_APP_SERVER}/api/myprofile`)
      .then((response) => {
        console.log('Received response:', response);
        const data = response.data[0].projects; // <--- Modification here
        console.log('Setting projectArray to retrieved data:', data);
        setProjectArray(data);
        setProfileData(response.data[0]); // Set the profile data here
        setBasicInfoData(response.data[0].basic_info); // Set the basic info data here
        setSkillsData(response.data[0].skills); // Set the skills data here
        setProjectsData(response.data[0].projects); // Set the projects data here
        setExperienceData(response.data[0].experience); // Set the experience data here
        setTechnologyMappingData(response.data[0].technologyMapping); // Set the technology mapping data here

        setLoading(false);
        console.log('loading:', loading);
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

  useEffect(() => {
    console.log('ProfileProvider.js: useEffect', {
      searchInput,
      value,
      deps,
      detailsModalShow,
      filteredProjects,
      projectArray,
      error,
      loading,
      profileData,
      basicInfoData,
      skillsData,
      projectsData,
      experienceData,
      technologyMappingData,
    });
  }, [
    profileData,
    basicInfoData,
    skillsData,
    projectsData,
    experienceData,
    technologyMappingData,
  ]);

  // console.log('exp', profileData.data.experience);

  return (
    <ProfileContext.Provider
      value={{
        searchInput,
        setSearchInput,
        value,
        setValue,
        deps,
        setDeps,
        detailsModalShow,
        setDetailsModalShow,
        filteredProjects,
        setFilteredProjects,
        projectArray,
        setProjectArray,
        error,
        profileData, // Add this line
        basicInfoData, // Add this line
        skillsData, // Add this line
        projectsData, // Add this line
        experienceData, // Add this line
        technologyMappingData, // Add this line
        setError,
        loading,
        setLoading,
        detailsModalShowHandler,
        detailsModalCloseHandler,
        handleChange,
        handleSelectChange,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

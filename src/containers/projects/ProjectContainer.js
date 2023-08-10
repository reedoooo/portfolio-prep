import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ProjectDetailsModal from '../../components/modals/Modal_ProjectDetails';
import './Project.css';
import Loading from '../../components/Loader/Loading';
import Search from './Search';
import Select from './Select';
import ProjectList from './ProjectList';
import Error from '../../components/utils/Error';
import { Box } from '@chakra-ui/react';
import ProjectsLandingSpace from './ProjectsLandingSpace';
import { ProfileContext } from '../../context/ProfileContext';

const ProjectContainer = (props) => {
  const {
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
    setError,
    loading,
    setLoading,
    detailsModalShowHandler,
    detailsModalCloseHandler,
    handleChange,
    handleSelectChange,
  } = useContext(ProfileContext);

  console.log('ProjectContainer.js: props.profileData', props.profileData);

  return (
    <>
      <Box
        className="project-container"
        p={4}
        // minHeight={'150vh'}
        // bg="gray.50"
        borderRadius="md"
        boxShadow="base"
      >
        <ProjectsLandingSpace />
        <Box id="contentSection" mt={4}>
          {loading ? (
            <Loading />
          ) : (
            <Box
              p={4}
              bg="customColors.translucentQuaternary50"
              borderRadius="md"
              boxShadow="base"
            >
              <Search value={searchInput} onChange={handleChange} />
              <Box mt={4}>
                <Select
                  value={value}
                  onChange={handleSelectChange}
                  options={['All', 'Option1', 'Option2']}
                />
              </Box>
              <ProjectList
                projects={filteredProjects}
                onDetails={detailsModalShowHandler}
              />
              <ProjectDetailsModal
                show={detailsModalShow}
                onHide={detailsModalCloseHandler}
                data={deps}
              />
            </Box>
          )}
          {error && <Error message={error.message} />}
        </Box>
      </Box>
    </>
  );
};

export default ProjectContainer;

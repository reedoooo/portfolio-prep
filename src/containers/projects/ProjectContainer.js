import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';

import ProjectDetailsModal from '../../components/modals/Modal_ProjectDetails';
import Loading from '../../components/Loader/Loading';
import Error from '../../components/utils/Error';
import { ProfileContext } from '../../context/ProfileContext';

import Search from './sub-components/Search';
import Select from './sub-components/Select';
import ProjectList from './sub-components/ProjectList';
import ProjectsLandingSpace from './sub-components/ProjectsLandingSpace';

import './Project.css';

const ProjectContainer = (props) => {
  const {
    searchInput,
    value,
    deps,
    detailsModalShow,
    filteredProjects,
    error,
    loading,
    detailsModalShowHandler,
    detailsModalCloseHandler,
    handleChange,
    handleSelectChange,
  } = useContext(ProfileContext);

  console.log('ProjectContainer.js: props.profileData', props.profileData);

  return (
    <Box className="project-container" p={4} borderRadius="md" boxShadow="base">
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
            <div id={'projectcontainer-search-input-group'}>
              <Search value={searchInput} onChange={handleChange} />
              <Box mt={4}>
                <Select
                  value={value}
                  onChange={handleSelectChange}
                  options={['All', 'Option1', 'Option2']}
                />
              </Box>
            </div>
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
  );
};

export default ProjectContainer;

import React, { useState } from 'react';
import { ProjectContext } from './ProjectContext';

export const ProjectsContextProvider = ({ children }) => {
  const [detailsModalData, setDetailsModalData] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);

  const showDetailsModal = (project) => {
    setDetailsModalShow(true);
    setDetailsModalData(project);
  };

  console.log('detailsModalData:', detailsModalData);

  const closeDetailsModal = () => {
    setDetailsModalShow(false);
  };

  return (
    <ProjectContext.Provider
      value={{
        detailsModalData,
        detailsModalShow,
        showDetailsModal,
        closeDetailsModal,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

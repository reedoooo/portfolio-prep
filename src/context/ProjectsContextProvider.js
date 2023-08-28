import { useState } from 'react';
import { ProjectContext } from './ProjectContext';

// Implement the provider for the context
export const ProjectsContextProvider = ({ children }) => {
  const [detailsModalData, setDetailsModalData] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);

  const showDetailsModal = (project) => {
    setDetailsModalShow(true);
    setDetailsModalData(project);
  };

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

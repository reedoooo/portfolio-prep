import { createContext } from 'react';

// Create the ProjectContext
// Empty function implementations are given comments to clarify their emptiness
export const ProjectContext = createContext({
  detailsModalData: {},
  detailsModalShow: false,
  showDetailsModal: (data) => {
    // This is empty by default until the provider overwrites it
  },
  closeDetailsModal: () => {
    // This is empty by default until the provider overwrites it
  },
});

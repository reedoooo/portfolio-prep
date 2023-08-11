import { createContext } from 'react';

export const ProjectContext = createContext({
  detailsModalData: {},
  detailsModalShow: false,
  showDetailsModal: (data) => {},
  closeDetailsModal: () => {},
});

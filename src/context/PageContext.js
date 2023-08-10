import React, { createContext, useState, useEffect } from 'react';

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(window.location.href); // initial state

  useEffect(() => {
    const updatePage = () => {
      setPage(window.location.href); // update state
    };

    // Attach listener
    window.addEventListener('popstate', updatePage);

    // Detach listener on unmount
    return () => window.removeEventListener('popstate', updatePage);
  }, []);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

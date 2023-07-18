import React from 'react';
import { useData } from './Data';

function ProfileData({ children }) {
  const { profileData } = useData();

  // Pass the fetched profileData down to the children
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { profileData });
  });
}

export default ProfileData;

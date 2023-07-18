import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

// import ProfileButton from "./ProfileButton";

export const ModalButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <LoginButton />
          {/* <ProfileButton /> */}
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

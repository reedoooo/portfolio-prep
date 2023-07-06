import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";
import React from "react";

export const ProfileButton = () => {
  const { ReRoute } = useAuth0();

  const handleReRoute = () => {
    ReRoute({
        ReRouteParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <Button className="button__login" onClick={handleReRoute}>
      Log Out
    </Button>
  );
};

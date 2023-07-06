import React, { useState, useEffect, useCallback } from "react";
import { useToast } from "@chakra-ui/react";
import UserProfileComponent from "../../components/profile/UserProfileComponent";
import axios from "axios";
import cookie from "react-cookies";
import { Center } from "@chakra-ui/react";

const UserProfileContainer = () => {
  const toast = useToast();
  const token = cookie.load("auth");
  const [userData, setUserData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [fetchError, setFetchError] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}/api/users/profile`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUserData(response.data);
      setEditData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setFetchError(true);
      toast({
        title: "Error fetching user data",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [token, toast]);

  const handleEditChange = (key, value) => {
    setEditData((prevData) => ({ ...prevData, [key]: value }));
  };

  const onSubmit = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_SERVER}/api/users/profile`,
        editData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast({
        title: "Profile updated successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      fetchData();
      setEditMode(false);
    } catch (error) {
      toast({
        title: "Error updating profile",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (cookie.load("userCookie") && token && !fetchError) {
      fetchData();
    }
  }, [token, toast, fetchData, fetchError]);

  if (!userData || !editData) return <Center>Loading...</Center>;

  const dataToDisplay = editMode ? editData : userData;

  return (
    <UserProfileComponent
      dataToDisplay={dataToDisplay}
      editMode={editMode}
      setEditMode={setEditMode}
      onSubmit={onSubmit}
      handleEditChange={handleEditChange}
    />
  );
};

export default UserProfileContainer;

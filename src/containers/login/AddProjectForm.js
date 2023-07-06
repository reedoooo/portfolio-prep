import {
	Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Toast,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth/authContext";

const AddProjectForm = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const { token } = useContext(AuthContext);
  // const [userData, setUserData] = useState(null);
  // console.log("userData", userData);
  const handleAddProject = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/api/users/addProject`,
        {
          title,
          startDate,
          description,
          url,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      // Handle successful project addition (e.g., show a success message, fetch the updated user data, etc.)
    } catch (error) {
      console.error(error);
      Toast({
        title: "Error adding project",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>Start Date</FormLabel>
        <Input
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>URL</FormLabel>
        <Input value={url} onChange={(e) => setUrl(e.target.value)} />
      </FormControl>
      <Button onClick={handleAddProject}>Add Project</Button>
    </Box>
  );
};

export default AddProjectForm;

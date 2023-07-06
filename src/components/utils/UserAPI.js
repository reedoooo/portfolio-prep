import axios from "axios";
const userAPI = {
  // Your object properties and methods here
    // Gets all the users
    getUsers: function() {
      return axios.get("/api/users");
    },
    // Gets the user with the given email
    getUser: function(email) {
      return axios.get("/api/users/" + email);
    },
    // Deletes the user with the given email
    deleteUser: function(email) {
      return axios.delete("/api/users/" + email);
    },
    // Saves a user to the database
    saveUser: function(userData) {
      return axios.post("/api/users", userData);
    }
};

export default userAPI;


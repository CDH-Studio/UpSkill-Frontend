const axios = require("axios");

const createUser = (email, name) => {
  axios.post("http://localhost:8080/api/user/", { email, name });
};

module.exports = { createUser };

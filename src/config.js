require("dotenv").config();

localStorage.setItem("api", process.env.REACT_APP_API_ADDRESS);

export default {
  backendAddress: process.env.REACT_APP_API_ADDRESS
};

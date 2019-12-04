require("dotenv").config();

localStorage.setItem("api", process.env.REACT_APP_API_ADDRESS);

export default {
  backendAddress:
    "http://upskill-backend-upskill.apps.dev.openshift.ised-isde.canada.ca/"
  // backendAddress: process.env.REACT_APP_API_ADDRESSs
};

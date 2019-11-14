import React, { Component } from "react";
import { injectIntl } from "react-intl";
import axios from "axios";
import config from "../config";
import ProfileLayoutController from "../components/profileLayout/profileLayoutController";

const backendAddress = config.backendAddress;
class Profile extends Component {
  goto = link => this.props.history.push(link);

  constructor(props) {
    super(props);
    this.state = { profileInfo: undefined };

    const handleSuccess = response => {
      console.log("Recieved", response);

      let profileInfo = response.data;

      this.setState({ profileInfo: profileInfo });
    };

    axios
      .get(
        // "http://localhost:8080/api/profile/6becd47a-ffe5-11e9-8d71-362b9e155667"
        // "http://localhost:8080/api/profile/faba08aa-ffe3-11e9-8d71-362b9e155667"
        backendAddress + "api/profile/" + localStorage.getItem("userId")
      )
      .then(handleSuccess)
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  render() {
    const { changeLanguage, keycloak } = this.props;

    return (
      <ProfileLayoutController
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        profileInfo={this.state.profileInfo}
        redirectFunction={this.goto}
      />
    );
  }
}

export default injectIntl(Profile);

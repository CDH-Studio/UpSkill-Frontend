import React, { Component } from "react";
import { injectIntl } from "react-intl";
import axios from "axios";

import ProfileLayoutController from "../components/profileLayout/profileLayoutController";
class Profile extends Component {
  goto = link => this.props.history.push(link);

  constructor(props) {
    super(props);
    this.state = { profileInfo: undefined };

    const handleSuccess = response => {
      this.setState({ profileInfo: response.data });
      console.log(response);
    };

    axios
      .get(
        "http://localhost:8080/api/profile/faba08aa-ffe3-11e9-8d71-362b9e155667"
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

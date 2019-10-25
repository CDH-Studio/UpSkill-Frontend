import React, { Component } from "react";
import { injectIntl } from "react-intl";

import ProfileLayoutController from "../components/profileLayout/profileLayoutController";

class Profile extends Component {
  goto = link => this.props.history.push(link);

  render() {
    const { changeLanguage, keycloak } = this.props;
    return (
      <ProfileLayoutController
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        redirectFunction={this.goto}
      />
    );
  }
}

export default injectIntl(Profile);

import React, { Component } from "react";
import { injectIntl } from "react-intl";

import HomeLayoutController from "../components/homeLayout/homeLayoutController";

class Home extends Component {
  goto = link => this.props.history.push(link);

  render() {
    return (
      <HomeLayoutController
        keycloak={this.props.keycloak}
        redirectFunction={this.goto}
        changeLanguage={this.props.changeLanguage}
      />
    );
  }
}

export default injectIntl(Home);

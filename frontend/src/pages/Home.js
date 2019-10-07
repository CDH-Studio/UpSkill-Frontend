import React, { Component } from "react";
import HomeLayout from "../components/homeLayout/homeLayoutController";
import { injectIntl } from "react-intl";

class Home extends Component {
  goto = link => this.props.history.push(link);

  render() {
    return (
      <HomeLayout
        keycloak={this.props.keycloak}
        redirectFunction={this.goto}
        changeLanguage={this.props.changeLanguage}
      />
    );
  }
}

export default injectIntl(Home);

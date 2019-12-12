import React, { Component } from "react";
import SetupLayoutController from "../components/setupLayout/setupLayoutController";

export default class Setup extends Component {
  render() {
    return (
      <SetupLayoutController
        redirectFunction={link => this.props.history.push("/secured/home")}
        keycloak={this.props.keycloak}
        changeLanguage={this.props.changeLanguage}
      />
    );
  }
}

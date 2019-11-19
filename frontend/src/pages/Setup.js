import React, { Component } from "react";
import SetupLayoutController from "../components/setupLayout/setupLayoutController";

export default class Setup extends Component {
  render() {
    return (
      <SetupLayoutController
        redirectFunction={link => this.props.history.push(link)}
        keycloak={this.props.keycloak}
      />
    );
  }
}

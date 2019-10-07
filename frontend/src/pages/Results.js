import React, { Component } from "react";
import ResultsLayout from "../components/resultsLayout/resultsLayoutController";

export default class Results extends Component {
  goto = link => this.props.history.push(link);

  render() {
    return (
      <ResultsLayout
        keycloak={this.props.keycloak}
        redirectFunction={this.goto}
      />
    );
  }
}

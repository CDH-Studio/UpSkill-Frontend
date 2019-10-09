import React, { Component } from "react";
import ResultsLayoutView from "./resultsLayoutView";

export default class ResultsLayoutController extends Component {
  render() {
    return (
      <ResultsLayoutView
        changeLanguage={this.props.changeLanguage}
        keycloak={this.props.keycloak}
      />
    );
  }
}

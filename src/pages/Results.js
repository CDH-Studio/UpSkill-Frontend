import React, { Component } from "react";
import ResultsLayout from "../components/resultsLayout/resultsLayoutController";

export default class Results extends Component {
  goto = link => this.props.history.push(link);

  render() {
    const { changeLanguage, keycloak } = this.props;
    let searchQuery = null;
    try {
      searchQuery = this.props.location.state.searchQuery;
    } catch (err) {
      if (!err instanceof ReferenceError) {
        throw err;
      }
    }

    return (
      <ResultsLayout
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        redirectFunction={this.goto}
        searchQuery={searchQuery}
      />
    );
  }
}

import React, { Component } from "react";
import ResultsLayoutView from "./resultsLayoutView";

export default class ResultsLayoutController extends Component {
  render() {
    const {
      changeLanguage,
      keycloak,
      redirectFunction,
      searchQuery,
      results
    } = this.props;

    return (
      <ResultsLayoutView
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        redirectFunction={redirectFunction}
        results={results}
        searchQuery={searchQuery}
      />
    );
  }
}

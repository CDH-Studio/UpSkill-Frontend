import React, { Component } from "react";
import ResultsLayoutView from "./resultsLayoutView";
import axios from "axios";

import config from "../../config";
const { backendAddress } = config;

export default class ResultsLayoutController extends Component {
  constructor(props) {
    super(props);
    this.state = { results: null };

    const handleResponse = response => {
      this.setState({ results: response });
    };
    this.handleResponse = handleResponse.bind(this);

    const handleError = error => {
      console.error(error);
      this.setState({ results: error });
    };
    this.handleError = handleError.bind(this);
  }

  componentDidMount() {
    const urlSections = window.location.toString().split("?");

    if (urlSections.length === 2) {
      this.queryString = urlSections[1];
      this.gatherResults(urlSections[1]);
    } else {
      this.queryString = "";
      this.setState({ results: new Error("invalid query") });
    }
  }

  async gatherResults(query) {
    const results = (
      await axios.get(backendAddress + "api/search/fuzzySearch?" + query)
    ).data;

    this.setState({ results: results });
  }

  render() {
    const {
      changeLanguage,
      keycloak,
      searchQuery,
      redirectFunction
    } = this.props;

    return (
      <ResultsLayoutView
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        results={this.state.results}
        redirectFunction={redirectFunction}
        searchQuery={searchQuery}
      />
    );
  }
}

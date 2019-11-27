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
      console.log("handleResponse", response);
      this.setState({ results: response });
    };
    this.handleResponse = handleResponse.bind(this);

    const handleError = error => {
      console.log("handleError", error);
      this.setState({ results: error });
    };
    this.handleError = handleError.bind(this);
  }

  componentDidMount() {
    const urlSections = window.location.toString().split("?");

    if (urlSections.length === 2) {
      console.log(urlSections[1]);
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

/*    const { searchQuery } = this.props;
    let url = "/search?";
    let validSearch = false;

    for (let key in searchQuery) {
      if (searchQuery[key]) {
        url += key + "=" + String(searchQuery[key]) + "&";
        validSearch = true;
      }
    }

    if (validSearch) {
      url.substring(0, url.length - 1);
      url = encodeURI(url);
      console.log("should run query with", url);

      // Make a request for a user with a given ID
      axios
        .get(
          backendAddress +
            "api/geds/" +
            encodeURI(searchQuery.firstName + " " + searchQuery.lastName)
        )
        .then(this.handleResponse)
        .catch(this.handleError)
        .finally(function() {
          // always executed
        });
    }*/

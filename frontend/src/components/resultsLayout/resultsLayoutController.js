import React, { Component } from "react";
import ResultsLayoutView from "./resultsLayoutView";
import axios from "axios";

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
    const { searchQuery } = this.props;
    let url = "/search?";
    let validSearch = false;

    for (var key in searchQuery) {
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
          "https://llk2ikcegh.execute-api.ca-central-1.amazonaws.com/dev/getEmployeeInfo/" +
            encodeURI(searchQuery.firstName + " " + searchQuery.lastName)
        )
        .then(this.handleResponse)
        .catch(this.handleError)
        .finally(function() {
          // always executed
        });
    }
  }

  render() {
    return (
      <ResultsLayoutView
        changeLanguage={this.props.changeLanguage}
        keycloak={this.props.keycloak}
        results={this.state.results}
        searchQuery={this.props.searchQuery}
      />
    );
  }
}

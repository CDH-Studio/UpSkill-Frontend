import React, { Component } from "react";
import ResultsLayoutView from "./resultsLayoutView";
import axios from "axios";

export default class ResultsLayoutController extends Component {
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
      console.log("should run query with", url);

      // Make a request for a user with a given ID
      axios
        .get(
          "https://llk2ikcegh.execute-api.ca-central-1.amazonaws.com/dev/getEmployeeInfo/" +
            searchQuery.firstName +
            "%20" +
            searchQuery.lastName
        )
        .then(function(response) {
          // handle success
          console.log(response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
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
        searchQuery={this.props.searchQuery}
      />
    );
  }
}

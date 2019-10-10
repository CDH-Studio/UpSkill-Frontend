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
      console.log("should run query with", url);
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

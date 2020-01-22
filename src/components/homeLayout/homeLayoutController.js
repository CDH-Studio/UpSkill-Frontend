import React, { Component } from "react";

import PropTypes from "prop-types";

import HomeLayoutView from "./homeLayoutView";

/**
 * Logic for the layout of the /home route
 */
class HomeLayoutController extends Component {
  constructor(props) {
    super(props);
    // To add a user into Users table
    this.searchQuery = {};

    this.performSearch = this.performSearch.bind(this);
    this.updateSearch = this.updateSearch.bind(this);

    this.state = {
      isEmpty: false
    };
  }

  updateSearch(e, { name, value }) {
    this.searchQuery[name] = value;
  }

  performSearch() {
    const { redirectFunction } = this.props;

    redirectFunction("/secured/results", { searchQuery: this.searchQuery });
  }

  setEmpty(isEmpty) {
    this.setState({ isEmpty: isEmpty });
  }

  render() {
    const {
      changeLanguage,
      keycloak,
      redirectFunction,
      showAdvancedFields
    } = this.props;

    return (
      <HomeLayoutView
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        redirectFunction={redirectFunction}
        showAdvancedFields={showAdvancedFields}
        typeButtonText={typeButtonText}
        typeButtonURL={typeButtonURL}
        updateSearch={this.updateSearch}
        setEmpty={this.setEmpty.bind(this)}
        isEmpty={this.state.isEmpty}
      />
    );
  }
}

HomeLayoutController.defaultProps = {
  showAdvancedFields: false
};

export default HomeLayoutController;

import React, { Component } from "react";

import PropTypes from "prop-types";

import HomeLayoutView from "./homeLayoutView";

/**
 * Logic for the layout of the /home route
 */
class HomeLayoutController extends Component {
  static propTypes = {
    /** Function used to change the language intl-react is using */
    changeLanguage: PropTypes.func.isRequired,
    /** The object representing the keycloak session */
    keycloak: PropTypes.object,
    /** Function to change route */
    redirectFunction: PropTypes.func.isRequired,
    /** Whether should display advanced search form or not */
    showAdvancedFields: PropTypes.bool
  };

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
      />
    );
  }
}

HomeLayoutController.defaultProps = {
  showAdvancedFields: false
};

export default HomeLayoutController;

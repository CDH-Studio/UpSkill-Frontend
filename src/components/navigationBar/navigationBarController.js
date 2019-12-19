import React, { Component } from "react";
import PropTypes from "prop-types";

import NavigationBarView from "./navigationBarView";

/** Logic for the navigation bar used by the secured routes */
export default class NavigationBarController extends Component {
  static propTypes = {
    /** Function used to change the language intl-react is using */
    changeLanguage: PropTypes.func.isRequired,
    /** Whether should display search form or not */
    includeSearchForm: PropTypes.bool,
    /** The object representing the keycloak session */
    keycloak: PropTypes.object,
    /** Function to change route */
    redirectFunction: PropTypes.func.isRequired
  };

  render() {
    const {
      changeLanguage,
      includeSearchForm,
      keycloak,
      redirectFunction
    } = this.props;

    const admin = sessionStorage.getItem("admin") === "true";

    return (
      <NavigationBarView
        admin={admin}
        changeLanguage={changeLanguage}
        includeSearchForm={includeSearchForm}
        keycloak={keycloak}
        redirectFunction={redirectFunction}
      />
    );
  }
}

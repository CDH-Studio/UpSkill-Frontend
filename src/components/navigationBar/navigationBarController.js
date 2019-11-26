import React, { Component } from "react";

import NavigationBarView from "./navigationBarView";

export default class NavigationBarController extends Component {
  render() {
    const { changeLanguage, keycloak, includeSearchForm } = this.props;

    return (
      <NavigationBarView
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        includeSearchForm={includeSearchForm}
      />
    );
  }
}

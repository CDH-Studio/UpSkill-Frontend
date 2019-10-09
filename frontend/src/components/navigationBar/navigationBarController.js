import React, { Component } from "react";

import NavigationBarView from "./navigationBarView";

export default class NavigationBarController extends Component {
  render() {
    return (
      <NavigationBarView
        changeLanguage={this.props.changeLanguage}
        keycloak={this.props.keycloak}
      />
    );
  }
}

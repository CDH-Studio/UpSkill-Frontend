import React, { Component } from "react";
import NavigationBarView from "./NavigationBarView";

export default class NavigationBarController extends Component {
  render() {
    return <NavigationBarView keycloak={this.props.keycloak} />;
  }
}

import React, { Component } from "react";
import HomeLayout from "../components/homeLayout/homeLayoutController";

export default class Home extends Component {
  goto = link => this.props.history.push(link);

  render() {
    return (
      <HomeLayout keycloak={this.props.keycloak} redirectFunction={this.goto} />
    );
  }
}

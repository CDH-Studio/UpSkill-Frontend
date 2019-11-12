import React, { Component, Profiler } from "react";
import { Label } from "semantic-ui-react";
import NavigationBarController from "../components/navigationBar/navigationBarController";

export default class ProfileGeneration extends Component {
  goto = link => this.props.history.push(link);

  render() {
    return (
      <div>
        <NavigationBarController></NavigationBarController>
        <h1>Create New Profile</h1>
      </div>
    );
  }
}

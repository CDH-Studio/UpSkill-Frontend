import React, { Component } from "react";
import EditDevelopmentGoalsView from "./editDevelopmentGoalsView";

export default class EditDevelopmentGoalsController extends Component {
  render() {
    return <EditDevelopmentGoalsView {...this.props} />;
  }
}


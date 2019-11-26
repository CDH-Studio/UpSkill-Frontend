import React, { Component } from "react";
import EditDevelopmentalGoalsView from "./editDevelopmentalGoalsView";

export default class EditDevelopmentalGoalsController extends Component {
  render() {
    return <EditDevelopmentalGoalsView {...this.props} />;
  }
}

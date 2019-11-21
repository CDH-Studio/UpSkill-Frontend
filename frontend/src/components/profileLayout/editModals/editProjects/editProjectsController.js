import React, { Component } from "react";
import EditProjectsView from "./editProjectsView";

export default class EditProjectsController extends Component {
  render() {
    return <EditProjectsView {...this.props} />;
  }
}

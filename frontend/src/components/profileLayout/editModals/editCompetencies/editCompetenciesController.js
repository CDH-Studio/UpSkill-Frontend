import React, { Component } from "react";
import EditCompetenciesView from "./editCompetenciesView";

export default class EditCompetenciesController extends Component {
  render() {
    return <EditCompetenciesView {...this.props} />;
  }
}

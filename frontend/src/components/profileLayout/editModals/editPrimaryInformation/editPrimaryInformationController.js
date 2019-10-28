import React, { Component } from "react";
import EditPrimaryInformationView from "./editPrimaryInformationView";

export default class EditPrimaryInformationController extends Component {
  render() {
    return <EditPrimaryInformationView {...this.props} />;
  }
}


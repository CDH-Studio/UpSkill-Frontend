import React, { Component } from "react";
import EditTalentManagerView from "./editTalentManagerView";

export default class EditTalentManagerController extends Component {
  render() {
    return <EditTalentManagerView {...this.props} />;
  }
}


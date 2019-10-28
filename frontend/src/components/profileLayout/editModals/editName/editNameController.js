import React, { Component } from "react";
import EditNameView from "./editNameView";

export default class EditNameController extends Component {
  render() {
    return <EditNameView {...this.props} />;
  }
}


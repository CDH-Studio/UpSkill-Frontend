import React, { Component } from "react";
import EditMangerView from "./editManagerView";

export default class EditMangerController extends Component {
  render() {
    return <EditMangerView {...this.props} />;
  }
}


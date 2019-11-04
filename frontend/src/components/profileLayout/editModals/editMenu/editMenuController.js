import React, { Component } from "react";
import EditMenuView from "./editMenuView";

export default class EditMenuController extends Component {
  render() {
    return <EditMenuView {...this.props} />;
  }
}


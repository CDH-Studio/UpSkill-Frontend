import React, { Component } from "react";
import EditWrapperView from "./editWrapperView";

export default class EditWrapperController extends Component {
  render() {
    return <EditWrapperView {...this.props} />;
  }
}

EditWrapperController.defaultProps = {
  buttonType: "innerButton",
  editFunction: true,
  wrapperType: "defaultWrapper"
};

import React, { Component } from "react";

import FieldManagingComponent from "../FieldManagingComponent";
import EditTagsView from "./editTagsModalView";

export default class EditTagsController extends FieldManagingComponent {
  render() {
    return (
      <EditTagsView
        handleApply={this.handleApply}
        updateField={this.updateField}
        {...this.props}
      />
    );
  }
}

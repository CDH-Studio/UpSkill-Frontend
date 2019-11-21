import React from "react";
import FieldManagingComponent from "../common/fieldManagingComponent";
import EditPrimaryInformationView from "./editPrimaryInformationView";

export default class EditPrimaryInformationController extends FieldManagingComponent {
  render() {
    return (
      <EditPrimaryInformationView
        handleApply={this.handleApply}
        updateField={this.updateField}
        {...this.props}
      />
    );
  }
}

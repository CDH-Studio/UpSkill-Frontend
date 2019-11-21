import React from "react";
import EditTalentManagementView from "./editTalentManagementView";
import FieldManagingComponent from "../common/fieldManagingComponent";

export default class EditTalentManagementController extends FieldManagingComponent {
  render() {
    return <EditTalentManagementView {...this.props} />;
  }
}

import React from "react";
import EditTalentManagerView from "./editTalentManagerView";
import FieldManagingComponent from "../common/fieldManagingComponent";

export default class EditTalentManagerController extends FieldManagingComponent {
  render() {
    return <EditTalentManagerView {...this.props} />;
  }
}

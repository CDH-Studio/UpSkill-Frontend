import React from "react";

import FieldManagingComponent from "../common/fieldManagingComponent";
import EditTalentMangementView from "./editTalentManagementView";

export default class EditTalentMangementController extends FieldManagingComponent {
  render() {
    return (
      <EditTalentMangementView
        profileInfo={{ manager: null }}
        {...this.props}
      />
    );
  }
}

import React from "react";

import FieldManagingComponent from "../common/fieldManagingComponent";
import EditCareerInterestsView from "./editCareerInterestsView";

export default class EditCareerInterestsController extends FieldManagingComponent {
  render() {
    return (
      <EditCareerInterestsView
        profileInfo={{ manager: null }}
        {...this.props}
      />
    );
  }
}

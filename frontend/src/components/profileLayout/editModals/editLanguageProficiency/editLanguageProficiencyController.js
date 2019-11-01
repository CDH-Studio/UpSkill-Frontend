import React from "react";

import FieldManagingComponent from "../common/fieldManagingComponent";
import EditLanguageProficiencyView from "./editLanguageProficiencyView";

export default class EditLanguageProficiencyController extends FieldManagingComponent {
  constructor(props) {
    super(props);
    const oldUpdateField = this.updateField;

    const { gradedOnSecondLanguage } = this.props.profileInfo;

    if (gradedOnSecondLanguage) {
      this.fields.gradedOnSecondLanguage = true;
    }
    this.updateField = (e, o) => {
      oldUpdateField(e, o);
      if (o.name === "gradedOnSecondLanguage") {
        this.forceUpdate();
      }
    };
  }

  render() {
    return (
      <EditLanguageProficiencyView
        handleApply={this.handleApply}
        showSecondaryGrading={this.fields.gradedOnSecondLanguage}
        updateField={this.updateField}
        {...this.props}
      />
    );
  }
}

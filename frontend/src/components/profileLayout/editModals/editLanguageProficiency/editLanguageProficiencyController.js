import React from "react";
import moment from "moment";

import FieldManagingComponent from "../common/fieldManagingComponent";
import EditLanguageProficiencyView from "./editLanguageProficiencyView";

export default class EditLanguageProficiencyController extends FieldManagingComponent {
  constructor(props) {
    super(props);
    const oldUpdateField = this.updateField;
    const oldHandleApply = this.handleApply;

    const { gradedOnSecondLanguage } = this.props.profileInfo;

    if (gradedOnSecondLanguage) {
      this.fields.gradedOnSecondLanguage = true;
    }
    this.updateField = ((e, o) => {
      oldUpdateField(e, o);
      if (o.name === "gradedOnSecondLanguage" || o.name.includes("Date")) {
        this.forceUpdate();
      }
    }).bind(this);

    this.handleApply = (() => {
      ["reading", "writing", "oral"].forEach(element => {
        if (this.fields[element + "Date"]) {
          this.fields[element + "Date"] = moment(
            this.fields[element + "Date"],
            "MMM DD YYYY"
          ).format();
        }
      });
      oldHandleApply();
    }).bind(this);
  }

  render() {
    return (
      <EditLanguageProficiencyView
        handleApply={this.handleApply}
        showSecondaryGrading={this.fields.gradedOnSecondLanguage}
        updateField={this.updateField}
        fields={this.fields}
        {...this.props}
      />
    );
  }
}

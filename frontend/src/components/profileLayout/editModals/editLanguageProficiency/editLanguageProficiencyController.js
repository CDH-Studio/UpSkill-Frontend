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
    this.updateField = (e, o) => {
      oldUpdateField(e, o);
      if (o.name === "gradedOnSecondLanguage" || o.name.includes("Date")) {
        this.forceUpdate();
      }
    };

    this.handleApply = () => {
      ["Reading", "Writing", "Oral"].forEach(element => {
        const name = "secondary" + element + "Date";
        if (this.fields[name]) {
          this.fields[name] = moment(this.fields[name], "MMM DD YYYY").format();
        }
      });
      oldHandleApply();
    };
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

import React from "react";

import FormManagingComponent from "../common/formTools";
import LanguageProficiencyFormView from "./languageProficiencyFormView";
import moment from "moment";

export default class LanguageProficiencyFormController extends FormManagingComponent {
  constructor(props) {
    super(props);
    const profileInfo = this.props;

    this.tempFields["gradedOnSecondLanguage"] =
      profileInfo["readingGrade"] ||
      profileInfo["writingingGrade"] ||
      profileInfo["oralGrade"];

    this.onChangeFuncs["gradedOnSecondLanguage"] = () => this.forceUpdate();
    this.onChangeFuncs["readingDate"] = () => this.forceUpdate();
    this.onChangeFuncs["writingDate"] = () => this.forceUpdate();
    this.onChangeFuncs["oralDate"] = () => this.forceUpdate();

    this.transformOnChangeValueFuncs["readingDate"] = value =>
      moment(value, "MMM DD YYYY");
    this.transformOnChangeValueFuncs["writingDate"] = value =>
      moment(value, "MMM DD YYYY");
    this.transformOnChangeValueFuncs["oralDate"] = value =>
      moment(value, "MMM DD YYYY");
  }

  render() {
    const { afterSubmit, buttons } = this.props;
    return (
      <LanguageProficiencyFormView
        onSubmit={() => {
          this.onSubmit();
        }}
        buttons={buttons}
        actingDisabled={Boolean(this.getCurrentValue("isActing"))}
        actingEndDate={this.getCurrentValue("actingEndDate")}
        actingEndDisabled={!Boolean(this.getCurrentValue("actingHasEndDate"))}
        actingStartDate={this.getCurrentValue("actingStartDate")}
        fields={this.fields}
        onFieldChange={this.onFieldChange}
        onTempFieldChange={this.onTempFieldChange}
        getCurrentValue={this.getCurrentValue}
        tempFields={this.tempFields}
        {...this.props}
      />
    );
  }
}

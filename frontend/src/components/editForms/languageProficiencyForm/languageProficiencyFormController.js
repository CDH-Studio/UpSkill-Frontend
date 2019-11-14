import React from "react";
import moment from "moment";

import FormManagingComponent from "../common/formTools";
import LanguageProficiencyFormView from "./languageProficiencyFormView";

export default class LanguageProficiencyFormController extends FormManagingComponent {
  constructor(props) {
    super(props);
    const profileInfo = this.props;

    this.tempFields["gradedOnSecondLanguage"] =
      profileInfo["oralProficiency"] ||
      profileInfo["readingProficiency"] ||
      profileInfo["writingingProficiency"];

    this.onChangeFuncs["gradedOnSecondLanguage"] = () => this.forceUpdate();
    this.onChangeFuncs["oralDate"] = () => this.forceUpdate();
    this.onChangeFuncs["readingDate"] = () => this.forceUpdate();
    this.onChangeFuncs["writingDate"] = () => this.forceUpdate();

    this.transformOnChangeValueFuncs["oralDate"] = value =>
      moment(value, "MMM DD YYYY");
    this.transformOnChangeValueFuncs["readingDate"] = value =>
      moment(value, "MMM DD YYYY");
    this.transformOnChangeValueFuncs["writingDate"] = value =>
      moment(value, "MMM DD YYYY");
  }

  render() {
    const { afterSubmit, buttons } = this.props;
    return (
      <LanguageProficiencyFormView
        buttons={buttons}
        fields={this.fields}
        getCurrentValue={this.getCurrentValue}
        onFieldChange={this.onFieldChange}
        onSubmit={() => {
          this.onSubmit();
        }}
        onTempFieldChange={this.onTempFieldChange}
        secondaryGradingDisabled={!this.tempFields["gradedOnSecondLanguage"]}
        tempFields={this.tempFields}
        {...this.props}
      />
    );
  }
}

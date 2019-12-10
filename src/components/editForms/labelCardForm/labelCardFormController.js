import React from "react";

import FormManagingComponent from "../common/formTools";
import LabelCardFormView from "./labelCardFormView";
import moment from "moment";

export default class LabelCardFormController extends FormManagingComponent {
  constructor(props) {
    super(props);
    const { profileInfo } = this.props;

    const isActing =
      Boolean(profileInfo["actingPeriodStartDate"]) &&
      Boolean(profileInfo["acting"]);

    this.tempFields["actingHasEndDate"] =
      isActing && Boolean(profileInfo["actingPeriodEndDate"]);
    this.tempFields["isActing"] = isActing;

    this.onChangeFuncs["actingPeriodEndDate"] = () => this.forceUpdate();
    this.onChangeFuncs["actingHasEndDate"] = () => this.forceUpdate();
    this.onChangeFuncs["actingPeriodStartDate"] = () => this.forceUpdate();
    this.onChangeFuncs["isActing"] = () => this.forceUpdate();

    this.transformOnChangeValueFuncs["actingPeriodStartDate"] = value =>
      moment(value, "MMM DD YYYY");
  }

  render() {
    const { buttons } = this.props;
    const actingDisabled = !Boolean(this.getCurrentValue("isActing"));
    return (
      <LabelCardFormView
        actingDisabled={actingDisabled}
        actingPeriodEndDate={this.getCurrentValue("actingPeriodEndDate")}
        actingEndDisabled={
          !Boolean(this.getCurrentValue("actingHasEndDate")) || actingDisabled
        }
        actingPeriodStartDate={this.getCurrentValue("actingPeriodStartDate")}
        buttons={buttons}
        fields={this.fields}
        getCurrentValue={this.getCurrentValue}
        onFieldChange={this.onFieldChange}
        onSubmit={() => {
          this.onSubmit();
        }}
        onTempFieldChange={this.onTempFieldChange}
        tempFields={this.tempFields}
        {...this.props}
      />
    );
  }
}

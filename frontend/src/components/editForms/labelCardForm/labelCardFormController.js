import React from "react";

import FormManagingComponent from "../common/formTools";
import LabelCardFormView from "./labelCardFormView";
import moment from "moment";

export default class LabelCardFormController extends FormManagingComponent {
  constructor(props) {
    super(props);
    const profileInfo = this.props;

    const isActing =
      Boolean(profileInfo["actingStartDate"]) && Boolean(profileInfo["acting"]);

    this.tempFields["actingHasEndDate"] =
      isActing && Boolean(profileInfo["actingEndDate"]);
    this.tempFields["isActing"] = isActing;

    this.onChangeFuncs["actingEndDate"] = () => this.forceUpdate();
    this.onChangeFuncs["actingHasEndDate"] = () => this.forceUpdate();
    this.onChangeFuncs["actingStartDate"] = () => this.forceUpdate();
    this.onChangeFuncs["isActing"] = () => this.forceUpdate();

    this.transformOnChangeValueFuncs["actingStartDate"] = value =>
      moment(value, "MMM DD YYYY");
  }

  render() {
    const { afterSubmit, buttons } = this.props;
    const actingDisabled = !Boolean(this.getCurrentValue("isActing"));
    return (
      <LabelCardFormView
        actingDisabled={actingDisabled}
        actingEndDate={this.getCurrentValue("actingEndDate")}
        actingEndDisabled={
          !Boolean(this.getCurrentValue("actingHasEndDate")) || actingDisabled
        }
        actingStartDate={this.getCurrentValue("actingStartDate")}
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

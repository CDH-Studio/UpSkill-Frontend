import React from "react";

import FormManagingComponent from "../common/FormTools";
import LabelCardFormView from "./labelCardFormView";
import moment from "moment";

export default class LabelCardFormController extends FormManagingComponent {
  constructor(props) {
    super(props);
    const profileInfo = this.props;

    const isActing =
      Boolean(profileInfo["actingStartDate"]) && Boolean(profileInfo["acting"]);

    this.tempFields["isActing"] = isActing;
    this.tempFields["actingHasEndDate"] =
      isActing && Boolean(profileInfo["actingEndDate"]);

    this.onChangeFuncs["isActing"] = () => this.forceUpdate();
    this.onChangeFuncs["actingHasEndDate"] = () => this.forceUpdate();
    this.onChangeFuncs["actingStartDate"] = () => this.forceUpdate();
    this.onChangeFuncs["actingEndDate"] = () => this.forceUpdate();

    this.transformOnChangeValueFuncs["actingStartDate"] = value =>
      moment(value, "MMM DD YYYY");
  }

  render() {
    const { afterSubmit, buttons } = this.props;
    return (
      <LabelCardFormView
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

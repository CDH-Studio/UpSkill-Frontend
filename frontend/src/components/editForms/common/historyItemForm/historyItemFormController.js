import React, { Component } from "react";

import FieldManagingComponent from "../FormTools";

import EditHistoryItemView from "./editHistoryItemView";

export default class EditHistoryItemController extends FieldManagingComponent {
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




    this.updateField = this.updateField.bind(this);
  }

  render() {
    return (
      <EditHistoryItemView updateField={this.updateField} {...this.props} />
    );
  }

  updateField(e, o) {
    const { index, updateListField } = this.props;
    const name = o.name;
    const value = typeof o.checked === "boolean" ? o.checked : o.value;
    updateListField(index, name, value);
    if (name === "isOngoing") {
      this.forceUpdate();
    }
  }
}

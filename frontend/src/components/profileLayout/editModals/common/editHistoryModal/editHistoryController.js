import React, { Component } from "react";

import FieldManagingComponent from "../fieldManagingComponent";
import EditHistoryView from "./editHistoryView";

export default class EditHistoryController extends Component {
  constructor(props) {
    super(props);

    const { items } = this.props;

    this.fields = items.slice(0);

    this.addItem = this.addItem.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.removeItemByIndex = this.removeItemByIndex.bind(this);
    this.updateListField = this.updateListField.bind(this);
  }

  addItem() {
    const items = this.fields;

    for (let i = 0; i < items.length; i++) {
      if (
        !(
          items[i].header ||
          items[i].subheader ||
          items[i].content ||
          items[i].startDate ||
          items[i].endDate
        )
      ) {
        alert("There is already an empty item you can fill in.");
        return;
      }
    }
    this.fields.push({
      content: null,
      endDate: null,
      header: null,
      startDate: null,
      subheader: null
    });

    this.forceUpdate();
  }

  removeItemByIndex(index) {
    const fields = this.fields;

    this.fields = fields
      .slice(0, index)
      .concat(fields.slice(index + 1, fields.length));

    this.forceUpdate();
  }

  render() {
    return (
      <EditHistoryView
        {...this.props}
        addItem={this.addItem}
        handleApply={this.handleApply}
        items={this.fields}
        removeItemByIndex={this.removeItemByIndex}
        updateListField={this.updateListField}
      />
    );
  }

  handleApply() {
    console.log("should perform update with", this.fields);
  }

  updateListField(index, name, value) {
    console.log("list field update", name, value);
    this.fields[index][name] = value;
  }
}

EditHistoryController.defaultProps = {
  buttonBackgroundColor: null,
  buttonClass: "innerButton",
  buttonColor: "#555555"
};

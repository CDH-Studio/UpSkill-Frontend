import React, { Component } from "react";
import EditHistoryItemView from "./editHistoryItemView";

export default class EditHistoryItemController extends Component {
  constructor(props) {
    super(props);

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
    const value = typeof o.value == "boolean" ? o.value : o.checked;
    updateListField(index, name, value);
    if (name == "isOngoing") {
      this.forceUpdate();
    }
  }
}

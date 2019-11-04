import { Component } from "react";

export default class FieldManagingComponent extends Component {
  constructor(props) {
    super(props);

    this.fields = {};
    this.handleApply = this.handleApply.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  handleApply() {
    console.log("should perform update with", this.fields);
    this.fields = {};
  }

  updateField(e, o) {
    const { name, checked, value } = o;
    let newVal;
    if (checked !== undefined) {
      newVal = checked;
    } else {
      newVal = value;
    }
    console.log("field update", name, newVal);
    this.fields[name] = newVal;
  }
}

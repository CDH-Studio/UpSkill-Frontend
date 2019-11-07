import React, { Component } from "react";
import { Checkbox, Form, Input, Select } from "semantic-ui-react";
import DateInputFieldsView from "./dateInputFieldGroupView.js";

export default class DateInputFieldGroupController extends Component {
  render() {
    return <DateInputFieldsView {...this.props} />;
  }
}

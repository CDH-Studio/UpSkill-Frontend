import React, { Component } from "react";
import { generateCommonProps } from "../common/FormTools";
import { Form, Checkbox, Input, Select } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

export default class ManagerFormView extends Component {
  render() {
    const { actingEndDisabled, actingDisabled, buttons, onSubmit } = this.props;
    const generateProps = generateCommonProps.bind(this, this.props);

    return (
      <Form onSubmit={onSubmit}>
        <Form.Field {...generateProps("manager", Input)} />
        {buttons}
      </Form>
    );
  }
}

import React, { Component } from "react";
import { Checkbox, Form, Input, Select, Grid } from "semantic-ui-react";
import "./dateInputFieldGroup.css";

export default class DateInputFieldGroupView extends Component {
  render() {
    const {
      disabled,
      includeDay,
      groupLabelText,
      updateField,
      name
    } = this.props;
    return (
      <Grid className="dateNumberGroup">
        <Grid.Row className="noGapAbove noGapBelow">
          {groupLabelText && (
            <React.Fragment>
              <label
                class={
                  disabled
                    ? "looksLikeFieldLabel disabled"
                    : "looksLikeFieldLabel"
                }
              >
                {groupLabelText}
              </label>
              <br />
            </React.Fragment>
          )}
        </Grid.Row>
        <Grid.Row className="noGapAbove noGapBelow">
          <Form.Group>
            <Form.Field>
              <Input
                className="dateNumberInput"
                disabled={disabled}
                placeholder="YY"
                type="number"
                name={name + "Year"}
                onChange={updateField}
              />
            </Form.Field>
            <Form.Field>
              <Input
                className="dateNumberInput"
                disabled={disabled}
                placeholder="MM"
                name={name + "Month"}
                type="number"
                onChange={updateField}
              />
            </Form.Field>
            {includeDay && (
              <Form.Field>
                <Input
                  className="dateNumberInput"
                  disabled={disabled}
                  placeholder="DD"
                  onChange={updateField}
                />
              </Form.Field>
            )}
          </Form.Group>
        </Grid.Row>
      </Grid>
    );
  }
}

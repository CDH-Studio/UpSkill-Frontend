import React, { Component } from "react";
import { Form, Input, Grid } from "semantic-ui-react";
import "./dateInputFieldGroup.css";

export default class DateInputFieldGroupView extends Component {
  render() {
    const {
      disabled,
      groupLabelText,
      initialMonth,
      initialYear,
      name,
      updateField
    } = this.props;
    return (
      <Grid className="dateNumberGroup">
        <Grid.Row className="noGapAbove noGapBelow">
          {groupLabelText && (
            <React.Fragment>
              <label
                className={
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
                name={name + "Year"}
                onChange={updateField}
                placeholder="YY"
                value={initialYear}
                type="number"
              />
            </Form.Field>
            <Form.Field>
              <Input
                className="dateNumberInput"
                disabled={disabled}
                name={name + "Month"}
                onChange={updateField}
                placeholder="MM"
                value={initialMonth}
                type="number"
              />
            </Form.Field>
          </Form.Group>
        </Grid.Row>
      </Grid>
    );
  }
}

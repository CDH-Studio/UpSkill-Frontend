import React, { Component } from "react";
import { Form, Grid, Icon, Input, TextArea, Checkbox } from "semantic-ui-react";
//import { MonthRangeInput, MonthInput } from "semantic-ui-calendar-react";
import DateInputFieldGroup from "../dateInputFieldGroup/dateInputFieldGroupController";

import "./editHistoryItem.css";

export default class EditHistoryItemController extends Component {
  render() {
    const { item, index, removeItemByIndex, updateField } = this.props;

    return (
      <Grid.Row style={{ position: "relative" }} width={16}>
        <div className="removeHistoryItemButton">
          <Icon
            name="trash alternate"
            onClick={e => removeItemByIndex(index)}
            href={null}
          />
        </div>

        <Form style={{ margin: "0px auto", width: "95%" }}>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Name"
              onChange={updateField}
              name="header"
              value={item.header}
            />
            <Form.Field
              control={Input}
              label="School"
              name="subheader"
              onChange={updateField}
              value={item.subheader}
            />
          </Form.Group>
          <Form.Group className="noHorizontalGaps">
            <Grid
              style={{ width: "100%", marginLeft: "0px" }}
              className="noHorizonalGaps"
            >
              <Grid.Column className="noHorizontalGaps" width={5}>
                <DateInputFieldGroup
                  name="startDate"
                  updateField={updateField}
                  groupLabelText="Start Date"
                />
              </Grid.Column>
              <Grid.Column className="noHorizontalGaps" width={3}>
                <Form.Field
                  label="item is ongoing"
                  name="isOngoing"
                  onChange={updateField}
                  control={Checkbox}
                />
              </Grid.Column>
              <Grid.Column className="smallLeftPadding" width={8}>
                <DateInputFieldGroup
                  name="endDate"
                  disabled={item.isOngoing}
                  updateField={updateField}
                  groupLabelText="End Date"
                />
              </Grid.Column>
            </Grid>
          </Form.Group>
          <Form.Field>
            <label>Additional Details</label>
            <TextArea
              name="content"
              onChange={updateField}
              value={item.content}
            />
          </Form.Field>
        </Form>
      </Grid.Row>
    );
  }
}

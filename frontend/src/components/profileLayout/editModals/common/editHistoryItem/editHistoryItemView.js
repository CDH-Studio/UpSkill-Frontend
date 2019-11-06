import React, { Component } from "react";
import { Form, Grid, Icon, Input, TextArea, Checkbox } from "semantic-ui-react";
import { MonthRangeInput, MonthInput } from "semantic-ui-calendar-react";
import "./editHistoryItem.css";

export default class EditHistoryItemController extends Component {
  constructor(props) {
    super(props);

    this.updateField = this.updateField.bind(this);
  }

  render() {
    const { item, index, removeItemByIndex } = this.props;

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
              onChange={this.updateField}
              name="header"
              placeholder={item.header}
            />
            <Form.Field
              control={Input}
              label="School"
              name="subheader"
              onChange={this.updateField}
              placeholder={item.subheader}
            />
          </Form.Group>
          <Form.Group>
            <Form.Field width={8}>
              <label>Date Range</label>
              <MonthInput
                closable
                dateFormat="MM YYYY"
                minDate="01 1990"
                maxDate="03 1998"
                name="monthRange"
                iconPosition="right"
                onChange={this.updateField}
                value={item.monthRange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Additional Details</label>
            <TextArea
              name="content"
              onChange={this.updateField}
              placeholder={item.content}
            />
          </Form.Field>
        </Form>
      </Grid.Row>
    );
  }

  updateField(e, { name, value }) {
    const { index, updateListField } = this.props;
    updateListField(index, name, value);
    if (name == "monthRange") {
      this.forceUpdate();
    }
  }
}

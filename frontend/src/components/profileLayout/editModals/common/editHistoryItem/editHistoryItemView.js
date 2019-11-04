import React, { Component } from "react";
import { Form, Icon, Grid, Input, TextArea } from "semantic-ui-react";
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
        <div
          className="removeHistoryItemButton"
          style={{
            backgroundColor: "rgba(0,0,0,0.05)",
            borderRadius: "12px",
            padding: "0px 2px 2px 5px"
          }}
        >
          <Icon
            name="trash alternate"
            onClick={e => removeItemByIndex(index)}
            href={null}
          />
        </div>

        <Form style={{ width: "100%" }}>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              name="header"
              label="Name"
              onChange={this.updateField}
              placeholder={item.header}
            />
            <Form.Field
              name="subheader"
              control={Input}
              label="School"
              onChange={this.updateField}
              placeholder={item.subheader}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              name="startDate"
              control={Input}
              label="Start"
              onChange={this.updateField}
              placeholder={item.startDate}
            />
            <Form.Field
              control={Input}
              label="Stop"
              name="endDate"
              onChange={this.updateField}
              placeholder={item.endDate}
            />
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
  }
}

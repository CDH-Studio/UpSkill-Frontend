import React, { Component } from "react";
import { Card, Form, Input, TextArea } from "semantic-ui-react";
import "./editHistoryItem.css";

export default class EditHistoryItemController extends Component {
  constructor(props) {
    super(props);

    this.updateField = this.updateField.bind(this);
  }

  render() {
    const { item, index, removeItemByIndex } = this.props;

    return (
      <Card className="historyItemCard" fluid style={{ position: "relative" }}>
        <a
          className="removeHistoryItemButton"
          onClick={e => removeItemByIndex(index)}
        >
          x
        </a>
        <Card.Content>
          <Form>
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
        </Card.Content>
      </Card>
    );
  }

  updateField(e, { name, value }) {
    const { index, updateListField } = this.props;
    updateListField(index, name, value);
  }
}

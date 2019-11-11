import React, { Component } from "react";
import { generateCommonProps } from "../common/FormTools";
import { Checkbox, Form, Grid, Icon, Input, TextArea } from "semantic-ui-react";

import { injectIntl } from "react-intl";

//import { MonthRangeInput, MonthInput } from "semantic-ui-calendar-react";
import DateInputFieldGroup from "../dateInputFieldGroup/dateInputFieldGroupController";

import "./editHistoryItem.css";

/*

import { Form, Checkbox, Input, Select } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

export default class LabelCardFormView extends Component {
  render() {
    const { actingEndDisabled, actingDisabled, buttons, onSubmit } = this.props;
    const generateProps = generateCommonProps.bind(this, this.props);
*/

class EditHistoryItemView extends Component {
  constructor(props){
    super(props);

    const generateProps = generateCommonProps.bind(this, this.props);
  }

  render() {
    const {
      contentName,
      headerName,
      index,
      intl,
      item,
      removeItemByIndex,
      subheaderName,
      onFieldChange,
      onTempFieldChange
    } = this.props;

    return (
      <Grid.Row style={{ position: "relative" }} width={16}>
        <div className="removeHistoryItemButton">
          <Icon
            href={null}
            name="trash alternate"
            onClick={e => removeItemByIndex(index)}
          />
        </div>

        <Form style={{ margin: "0px auto", width: "95%" }}>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label={headerName}
              name="header"
              onChange={onFieldChange}
              value={item.header}
            />
            <Form.Field
              control={Input}
              label={subheaderName}
              name="subheader"
              onChange={onFieldChange}
              value={item.subheader}
            />
          </Form.Group>
          <Form.Group
            className="noHorizontalGaps"
            style={{ marginBottom: "1em" }}
          >
            <Grid
              style={{ width: "100%", marginLeft: "0px", marginBottom: "1em" }}
              className="noHorizonalGaps"
            >
              <Grid.Column className="noHorizontalGaps" width={5}>
                <DateInputFieldGroup
                  initialMonth={item.startDateMonth}
                  initialYear={item.startDateYear}
                  name="startDate"
                  updateField={onFieldChange}
                  groupLabelText={intl.formatMessage({
                    id: "profile.history.item.start.date"
                  })}
                />
              </Grid.Column>
              <Grid.Column className="noHorizontalGaps" width={3}>
                <Form.Field
                  control={Checkbox}
                  label={intl.formatMessage({
                    id: "profile.history.item.is.ongoing"
                  })}
                  name="isOngoing"
                  onChange={onTempFieldChange}
                />
              </Grid.Column>
              <Grid.Column className="smallLeftPadding" width={8}>
                <DateInputFieldGroup
                  disabled={item.isOngoing}
                  groupLabelText={intl.formatMessage({
                    id: "profile.history.item.end.date"
                  })}
                  initialMonth={item.endDateMonth}
                  initialYear={item.endDateYear}
                  name="endDate"
                  updateField={onFieldChange}
                />
              </Grid.Column>
            </Grid>
          </Form.Group>
          <Form.Field>
            <label>{contentName}</label>
            <TextArea onChange={onFieldChange} value={item.content} />
          </Form.Field>
        </Form>
      </Grid.Row>
    );
  }
}

export default injectIntl(EditHistoryItemView);

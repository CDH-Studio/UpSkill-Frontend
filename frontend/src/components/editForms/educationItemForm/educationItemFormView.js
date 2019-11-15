import React, { Component } from "react";
import { generateCommonProps } from "../common/formTools";
import {
  Checkbox,
  Form,
  Select,
  Grid,
  Icon,
  Input,
  TextArea
} from "semantic-ui-react";

import { injectIntl } from "react-intl";

//import FormButtonsController from "../../profileLayout/editModals/common/";

//import { MonthRangeInput, MonthInput } from "semantic-ui-calendar-react";
import DateInputFieldGroup from "../../profileLayout/editModals/common/dateInputFieldGroup/dateInputFieldGroupController";

import "./historyItemForm.css";

/*

import { Form, Checkbox, Input, Select } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

export default class LabelCardFormView extends Component {
  render() {
    const { actingEndDisabled, actingDisabled, buttons, onSubmit } = this.props;
    const generateProps = generateCommonProps.bind(this, this.props);
*/

class EducationItemFormView extends Component {
  constructor(props) {
    super(props);

    const { item } = this.props;

    this.generateProps = generateCommonProps.bind(this, {
      ...this.props,
      profileInfo: item
    });
  }

  render() {
    const {
      contentName,
      disableEndDate,
      endDateMonth,
      endDateYear,
      headerName,
      index,
      intl,
      item,
      onFieldChange,
      onTempFieldChange,
      removeItem,
      startDateMonth,
      startDateYear,
      subheaderName,
      isOngoing
    } = this.props;

    return (
      <Grid.Row style={{ position: "relative" }} width={16}>
        <div className="removeHistoryItemButton">
          <Icon
            href={null}
            name="trash alternate"
            onClick={e => removeItem(index)}
          />
        </div>

        <Form style={{ margin: "0px auto", width: "95%" }}>
          <Form.Group widths="equal">
            <Form.Field {...this.generateProps("diploma", Select)} />
            <Form.Field {...this.generateProps("school", Select)} />
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
                  initialMonth={startDateMonth}
                  initialYear={startDateYear}
                  name="startDate"
                  updateField={onTempFieldChange}
                  groupLabelText={intl.formatMessage({
                    id: "profile.history.item.start.date"
                  })}
                />
              </Grid.Column>
              <Grid.Column className="noHorizontalGaps" width={3}>
                <Form.Field
                  {...this.generateProps("isOngoing", Checkbox, true)}
                />
              </Grid.Column>
              <Grid.Column className="smallLeftPadding" width={8}>
                <DateInputFieldGroup
                  disabled={isOngoing}
                  groupLabelText={intl.formatMessage({
                    id: "profile.history.item.end.date"
                  })}
                  initialMonth={endDateMonth}
                  initialYear={endDateYear}
                  name="endDate"
                  updateField={onTempFieldChange}
                />
              </Grid.Column>
            </Grid>
          </Form.Group>
        </Form>
      </Grid.Row>
    );
  }
}

export default injectIntl(EducationItemFormView);

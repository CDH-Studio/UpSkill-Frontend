import React, { Component } from "react";
import { Checkbox, Form, Grid, Icon, Input, TextArea } from "semantic-ui-react";

import { injectIntl } from "react-intl";

//import { MonthRangeInput, MonthInput } from "semantic-ui-calendar-react";
import DateInputFieldGroup from "../dateInputFieldGroup/dateInputFieldGroupController";

import "./editHistoryItem.css";

class EditHistoryItemView extends Component {
  render() {
    const {
      contentName,
      headerName,
      index,
      intl,
      item,
      removeItemByIndex,
      subheaderName,
      updateField
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
              onChange={updateField}
              value={item.header}
            />
            <Form.Field
              control={Input}
              label={subheaderName}
              name="subheader"
              onChange={updateField}
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
                  updateField={updateField}
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
                  onChange={updateField}
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
                  updateField={updateField}
                />
              </Grid.Column>
            </Grid>
          </Form.Group>
          <Form.Field>
            <label>{contentName}</label>
            <TextArea onChange={updateField} value={item.content} />
          </Form.Field>
        </Form>
      </Grid.Row>
    );
  }
}

export default injectIntl(EditHistoryItemView);

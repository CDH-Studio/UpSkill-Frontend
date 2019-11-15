import React, { Component } from "react";
import { Checkbox, Form, Input, Select } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import { injectIntl } from "react-intl";

import EditModalController, {
  generateCommonProps
} from "../common/editModal/editModalController.js";
import "./editLabelCards.css";

import LabelCardFormController from "../../../editForms/labelCardForm/labelCardFormController";

class EditLabelCardView extends Component {
  render() {
    const { intl, profileInfo, fields } = this.props;

    const currentValues = { ...profileInfo, ...fields };
    const allowActing = currentValues["isActing"];
    const allowActingEndDate = allowActing && currentValues["actingHasEndDate"];

    return (
      <EditModalController
        {...this.props}
        name="Edit Info"
        editOptionPaths={{
          tenure: "api/option/getTenure",
          security: "api/option/getSecurityClearance",
          groupOrLevel: "api/option/getGroupLevel"
        }}
        form={LabelCardFormController}
      />
    );
  }
}

export default injectIntl(EditLabelCardView);

/*
<Form onSubmit={handleApply}>
          <Form.Field {...generateCommonProps("status", Select, this.props)} />
          <Form.Field
            {...generateCommonProps("groupOrLevel", Select, this.props)}
          />
          <Form.Field
            input="number"
            {...generateCommonProps("yearsOfService", Input, this.props)}
          />
          <Form.Field
            {...generateCommonProps("security", Select, this.props)}
          />

          <Form.Field
            {...generateCommonProps("isActing", Checkbox, this.props)}
          />
          <Form.Field
            disabled={!allowActing}
            {...generateCommonProps("acting", Select, this.props)}
          />
          <Form.Group>
            <Form.Field
              disabled={!allowActing}
              {...generateCommonProps("actingStartDate", DateInput, this.props)}
            />

            <Form.Field
              disabled={!allowActing}
              {...generateCommonProps("actingHasEndDate", Checkbox, this.props)}
            />

            <Form.Field
              disabled={!allowActingEndDate}
              {...generateCommonProps("actingEndDate", DateInput, this.props)}
            />
          </Form.Group>
        </Form>
*/

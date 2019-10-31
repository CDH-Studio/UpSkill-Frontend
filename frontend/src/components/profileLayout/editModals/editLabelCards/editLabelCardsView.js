import React, { Component } from "react";
import FieldManagingComponent from "../common/fieldManagingComponent";
import { Form, Input, Select } from "semantic-ui-react";
import { FormattedMessage, injectIntl } from "react-intl";

import GenericEditModalController, {
  generateCommonProps
} from "../common/genericEditModalController.js";
import "./editLabelCards.css";

class EditLabelCardsView extends Component {
  render() {
    const {
      profileInfo,
      dropdownOptions,
      handleApply,
      intl,
      updateField
    } = this.props;
    const statusOptions = [
      { key: "1", value: "1", text: "1" },
      { key: "2", value: "2", text: "2" }
    ];
    return (
      <GenericEditModalController
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.label.cards" })}
      >
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
        </Form>
      </GenericEditModalController>
    );
  }
}

export default injectIntl(EditLabelCardsView);

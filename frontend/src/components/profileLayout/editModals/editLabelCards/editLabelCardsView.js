import React, { Component } from "react";
import FieldManagingComponent from "../common/fieldManagingComponent";
import { Form, Input, Select } from "semantic-ui-react";
import { FormattedMessage, injectIntl } from "react-intl";

import EditModalController, {
  generateCommonProps
} from "../common/editModal/editModalController.js";
import "./editLabelCards.css";

class EditLabelCardsView extends Component {
  render() {
    const { handleApply, intl } = this.props;
    return (
      <EditModalController
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
      </EditModalController>
    );
  }
}

export default injectIntl(EditLabelCardsView);

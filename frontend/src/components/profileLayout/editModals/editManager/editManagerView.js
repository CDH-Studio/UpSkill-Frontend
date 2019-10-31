import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Form, Input } from "semantic-ui-react";

import GenericEditModalController, {
  generateCommonProps
} from "../common/genericEditModalController.js";
import "./editManager.css";

class EditManagerView extends Component {
  render() {
    const { handleApply, intl } = this.props;
    return (
      <GenericEditModalController
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.manager" })}
      >
        <Form onSubmit={handleApply}>
          <Form.Field {...generateCommonProps("manager", Input, this.props)} />
        </Form>
      </GenericEditModalController>
    );
  }
}

export default injectIntl(EditManagerView);

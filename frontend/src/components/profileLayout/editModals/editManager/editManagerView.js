import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Form, Input } from "semantic-ui-react";

import EditModalController, {
  generateCommonProps
} from "../common/editModal/editModalController.js";
import "./editManager.css";

class EditManagerView extends Component {
  render() {
    const { handleApply, intl } = this.props;
    return (
      <EditModalController
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.manager" })}
      >
        <Form onSubmit={handleApply}>
          <Form.Field {...generateCommonProps("manager", Input, this.props)} />
        </Form>
      </EditModalController>
    );
  }
}

export default injectIntl(EditManagerView);

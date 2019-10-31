import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Form, Select, Input } from "semantic-ui-react";

import GenericEditModalController, {
  generateCommonProps
} from "../common/genericEditModalController.js";
import "./editPrimaryInformation.css";

class EditPrimaryInformationView extends Component {
  render() {
    const { handleApply, intl } = this.props;
    return (
      <GenericEditModalController
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.primary.information" })}
      >
        <Form onSubmit={handleApply}>
          <Form.Group fluid widths="equal">
            <Form.Field
              {...generateCommonProps("firstName", Input, this.props)}
            />
            <Form.Field
              {...generateCommonProps("lastName", Input, this.props)}
            />
          </Form.Group>

          <Form.Field {...generateCommonProps("team", Input, this.props)} />
          <Form.Field
            {...generateCommonProps("directorate", Select, this.props)}
          />
          <Form.Field
            {...generateCommonProps("division", Select, this.props)}
          />
          <Form.Field {...generateCommonProps("branch", Select, this.props)} />
          <Form.Field {...generateCommonProps("sector", Select, this.props)} />
          <Form.Field
            {...generateCommonProps("department", Select, this.props)}
          />
          <Form.Field
            {...generateCommonProps("telephone", Input, this.props)}
          />
          <Form.Field
            {...generateCommonProps("cellphone", Input, this.props)}
          />
          <Form.Field {...generateCommonProps("email", Input, this.props)} />
          <Form.Field
            {...generateCommonProps("location", Select, this.props)}
          />
        </Form>
      </GenericEditModalController>
    );
  }
}

export default injectIntl(EditPrimaryInformationView);

import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Form, Checkbox, Input, Select } from "semantic-ui-react";

import { generateCommonProps } from "../common/formTools";
import FormButtonsController from "../common/formButtons/formButtonsController";

class ManagerFormView extends Component {
  render() {
    const {
      actingEndDisabled,
      actingDisabled,
      buttons,
      fields,
      onSubmit,
      handleCancle,
      handleRegister,
      handleNext,
      handlePrevious
    } = this.props;
    const generateProps = generateCommonProps.bind(this, this.props);

    return (
      <Form onSubmit={onSubmit}>
        <Form.Field {...generateProps("manager", Input)} />
        <FormButtonsController
          handleApply={onSubmit}
          handleCancle={handleCancle}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleRegister={handleRegister}
        />
      </Form>
    );
  }
}

export default injectIntl(ManagerFormView);

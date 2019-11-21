import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Form, Input } from "semantic-ui-react";

import { generateCommonProps } from "../common/formTools";
import FormButtonsController from "../common/formButtons/formButtonsController";

import "../common/form.css";

class ManagerFormView extends Component {
  render() {
    const {
      onSubmit,
      isEarlyRegister,
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
          isEarlyRegister={isEarlyRegister}
        />
      </Form>
    );
  }
}

export default injectIntl(ManagerFormView);

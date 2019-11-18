import React, { Component } from "react";
import { generateCommonProps } from "../common/formTools";
import { Form, Checkbox, Input, Select } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import FormButtonsController from "../common/formButtons/formButtonsController";
import { injectIntl } from "react-intl";

import "../common/form.css";
class TalentManagementFormView extends Component {
  render() {
    const {
      actingDisabled,
      actingEndDisabled,
      buttons,
      fields,
      handleCancle,
      isEarlyRegister,
      handleNext,
      handlePrevious,
      handleRegister,
      onSubmit
    } = this.props;
    const generateProps = generateCommonProps.bind(this, this.props);

    return (
      <Form onSubmit={onSubmit}>
        <Form.Field {...generateProps("careerMobility", Select)} />
        <Form.Field {...generateProps("talentMatrixResult", Select)} />
        <Form.Field {...generateProps("exFeeder", Checkbox)} />
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

export default injectIntl(TalentManagementFormView);

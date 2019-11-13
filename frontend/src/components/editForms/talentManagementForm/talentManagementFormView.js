import React, { Component } from "react";
import { generateCommonProps } from "../common/formTools";
import { Form, Checkbox, Input, Select } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import FormButtonsController from "../common/formButtons/formButtonsController";
import { injectIntl } from "react-intl";

class TalentManagementFormView extends Component {
  render() {
    const {
      actingEndDisabled,
      actingDisabled,
      buttons,
      onSubmit,
      fields,
      handleCancle,
      handleNext,
      handleRegister,
      handlePrevious
    } = this.props;
    const generateProps = generateCommonProps.bind(this, this.props);

    return (
      <Form onSubmit={onSubmit}>
        <Form.Field {...generateProps("careerMobility", Select)} />
        <Form.Field {...generateProps("talentMatrixResult", Select)} />
        <Form.Field {...generateProps("exFeeder", Checkbox)} />
        <FormButtonsController
          handleRegister={handleRegister}
          handleApply={onSubmit}
          handleCancle={handleCancle}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </Form>
    );
  }
}

export default injectIntl(TalentManagementFormView);

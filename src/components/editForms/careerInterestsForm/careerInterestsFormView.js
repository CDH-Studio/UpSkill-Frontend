import React, { Component } from "react";
import { generateCommonProps } from "../common/formTools";
import { Form, Checkbox, Select } from "semantic-ui-react";
import FormButtonsController from "../common/formButtons/formButtonsController";
import { injectIntl } from "react-intl";

import "../common/form.css";
class CareerInterestsFormView extends Component {
  render() {
    const {
      handleCancle,
      handleNext,
      handlePrevious,
      handleRegister,
      isEarlyRegister,
      intl,
      onSubmit
    } = this.props;
    const generateProps = generateCommonProps.bind(this, this.props);
    return (
      <Form onSubmit={onSubmit}>
        <Form.Field
          {...generateProps("interestedInRemote", Select)}
          options={[
            {
              key: true,
              value: true,
              text: intl.formatMessage({ id: "profile.yes" })
            },
            {
              key: false,
              value: false,
              text: intl.formatMessage({ id: "profile.no" })
            },
            {
              key: null,
              value: null,
              text: intl.formatMessage({ id: "profile.do.not.specify" })
            }
          ]}
        />
        <Form.Field {...generateProps("willingToRelocateTo", Select)} />
        <Form.Field {...generateProps("lookingForNewJob", Select)} />
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

export default injectIntl(CareerInterestsFormView);

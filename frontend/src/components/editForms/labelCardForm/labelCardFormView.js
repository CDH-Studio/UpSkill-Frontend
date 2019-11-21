import React, { Component } from "react";
import { generateCommonProps } from "../common/formTools";
import { Form, Checkbox, Input, Select } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import FormButtonsController from "../common/formButtons/formButtonsController";

import { injectIntl } from "react-intl";
import "../common/form.css";

class LabelCardFormView extends Component {
  render() {
    const {
      actingDisabled,
      actingEndDisabled,
      editProfileOptions,
      handleCancle,
      handleNext,
      handlePrevious,
      handleRegister,
      isEarlyRegister,
      onSubmit
    } = this.props;
    const generateProps = generateCommonProps.bind(this, this.props);

    return (
      <Form onSubmit={onSubmit}>
        <Form.Field {...generateProps("tenure", Select)} />
        <Form.Field {...generateProps("security", Select)} />
        <Form.Field
          input="number"
          {...generateProps("yearsOfService", Input)}
        />
        <Form.Field {...generateProps("groupOrLevel", Select)} />

        <Form.Field {...generateProps("isActing", Checkbox, true)} />
        <Form.Field
          {...generateProps("acting", Select)}
          disabled={actingDisabled}
          options={editProfileOptions["groupOrLevel"]}
        />
        <Form.Group>
          <Form.Field
            {...generateProps("actingStartDate", DateInput)}
            disabled={actingDisabled}
            width={6}
          />

          <Form.Field
            {...generateProps("actingHasEndDate", Checkbox, true)}
            disabled={actingDisabled}
            width={4}
          />

          <Form.Field
            {...generateProps("actingEndDate", DateInput)}
            disabled={actingEndDisabled}
            width={6}
          />
        </Form.Group>
        <FormButtonsController
          handleRegister={handleRegister}
          isEarlyRegister={isEarlyRegister}
          handleApply={onSubmit}
          handleCancle={handleCancle}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </Form>
    );
  }
}

export default injectIntl(LabelCardFormView);

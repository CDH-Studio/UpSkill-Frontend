import React, { Component } from "react";
import { generateCommonProps } from "../common/formTools";
import { Form, Checkbox, Input, Select } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import FormButtonsController from "../common/formButtons/formButtonsController";

import { injectIntl } from "react-intl";

class LabelCardFormView extends Component {
  render() {
    const {
      actingEndDisabled,
      actingDisabled,
      buttons,
      fields,
      onSubmit,
      handleCancle,
      handleNext,
      handleRegister,
      handlePrevious
    } = this.props;
    const generateProps = generateCommonProps.bind(this, this.props);

    return (
      <Form onSubmit={onSubmit}>
        <Form.Field {...generateProps("status", Select)} />
        <Form.Field {...generateProps("groupOrLevel", Select)} />
        <Form.Field
          input="number"
          {...generateProps("yearsOfService", Input)}
        />
        <Form.Field {...generateProps("security", Select)} />

        <Form.Field {...generateProps("isActing", Checkbox, true)} />
        <Form.Field
          disabled={actingDisabled}
          {...generateProps("acting", Select)}
        />
        <Form.Group>
          <Form.Field
            width={6}
            disabled={actingDisabled}
            {...generateProps("actingStartDate", DateInput)}
          />

          <Form.Field
            width={4}
            disabled={actingDisabled}
            {...generateProps("actingHasEndDate", Checkbox, true)}
          />

          <Form.Field
            width={6}
            disabled={actingEndDisabled}
            {...generateProps("actingEndDate", DateInput)}
          />
        </Form.Group>
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

export default injectIntl(LabelCardFormView);

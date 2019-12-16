import React, { Component } from "react";
import { generateCommonProps } from "../common/formTools";
import { Form, Checkbox, Select } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import FormButtonsController from "../common/formButtons/formButtonsController";

import { injectIntl } from "react-intl";
import "../common/form.css";

class LabelCardFormView extends Component {
  render() {
    const {
      actingDisabled,
      actingEndDisabled,
      handleCancle,
      handleNext,
      handlePrevious,
      handleRegister,
      isEarlyRegister,
      onSubmit,
      profileInfo,
      intl
    } = this.props;
    const generateProps = generateCommonProps.bind(this, this.props);

    const classificationProps = generateProps("classification", Select);

    return (
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Field
            {...generateProps("substantive", Select)}
            options={[
              {
                key: null,
                value: null,
                text: intl.formatMessage({ id: "profile.do.not.specify" })
              },
              {
                key: true,
                value: true,
                text: intl.formatMessage({ id: "profile.indeterminate" })
              },
              {
                key: false,
                value: false,
                text: intl.formatMessage({ id: "profile.term" })
              }
            ]}
            defaultValue={profileInfo["indeterminate"]}
            width={8}
          />
          <Form.Field {...classificationProps} width={8} />
        </Form.Group>

        <Form.Field {...generateProps("temporaryRole", Select)} />
        <Form.Field
          {...generateProps("acting", Select)}
          disabled={actingDisabled}
          options={classificationProps.options}
        />
        <Form.Group>
          <Form.Field
            {...generateProps("actingPeriodStartDate", DateInput)}
            disabled={actingDisabled}
            width={6}
          />

          <Form.Field
            {...generateProps("actingHasEndDate", Checkbox, true)}
            disabled={actingDisabled}
            width={4}
          />

          <Form.Field
            {...generateProps("actingPeriodEndDate", DateInput)}
            disabled={actingEndDisabled}
            width={6}
          />
        </Form.Group>
        <Form.Field {...generateProps("security", Select)} />
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

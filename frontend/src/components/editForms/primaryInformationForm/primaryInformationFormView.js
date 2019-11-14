import React, { Component } from "react";
import { generateCommonProps } from "../common/formTools";
import { Form, Dropdown, Input, Select } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import FormButtonsController from "../common/formButtons/formButtonsController";

import { FormattedMessage, injectIntl } from "react-intl";

class PrimaryInformationFormView extends Component {
  render() {
    const {
      actingDisabled,
      actingEndDisabled,
      buttons,
      fields,
      handleCancle,
      handleNext,
      handlePrevious,
      handleRegister,
      onSubmit
    } = this.props;
    const generateProps = generateCommonProps.bind(this, this.props);

    return (
      <Form onSubmit={onSubmit}>
        <Form.Group fluid widths="equal">
          <Form.Field required {...generateProps("firstName", Input)} />
          <Form.Field {...generateProps("lastName", Input)} />
        </Form.Group>

        <Form.Group fluid>
          <Form.Field width={4} {...generateProps("telephone", Input)} />
          <Form.Field width={4} {...generateProps("cellphone", Input)} />
          <Form.Field width={8}>
            <label>
              <FormattedMessage id="profile.email" />
            </label>
            <Input
              defaultValue={(this.props.profileInfo["email"] || "").replace(
                "@canada.ca",
                ""
              )}
              label={
                <Dropdown
                  defaultValue="@canada.ca"
                  options={[
                    {
                      key: "@canada.ca",
                      text: "@canada.ca",
                      value: "@canada.ca"
                    }
                  ]}
                />
              }
              labelPosition="right"
            />
          </Form.Field>
        </Form.Group>
        <Form.Field {...generateProps("location", Select)} />

        <Form.Field {...generateProps("team", Input)} />

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

export default injectIntl(PrimaryInformationFormView);

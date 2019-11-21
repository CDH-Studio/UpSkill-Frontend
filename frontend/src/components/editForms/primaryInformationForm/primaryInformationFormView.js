import React, { Component } from "react";
import { generateCommonProps } from "../common/formTools";
import { Form, Input, Select } from "semantic-ui-react";
import FormButtonsController from "../common/formButtons/formButtonsController";

import { injectIntl } from "react-intl";

import "../common/form.css";

class PrimaryInformationFormView extends Component {
  render() {
    const {
      handleCancle,
      handleNext,
      handlePrevious,
      isEarlyRegister,
      handleRegister,
      onSubmit
    } = this.props;
    const generateProps = generateCommonProps.bind(this, this.props);

    let emailProps = generateProps("email", Input);

    return (
      <Form onSubmit={onSubmit}>
        <Form.Group fluid widths="equal">
          <Form.Field {...generateProps("firstName", Input)} />
          <Form.Field {...generateProps("lastName", Input)} />
        </Form.Group>

        <Form.Group fluid>
          <Form.Field width={4} {...generateProps("telephone", Input)} />
          <Form.Field width={4} {...generateProps("cellphone", Input)} />
          <Form.Field width={8} {...emailProps} />
        </Form.Group>

        <Form.Field {...generateProps("location", Select)} />
        <Form.Field {...generateProps("team", Input)} />

        <Form.Group fluid widths="equal">
          <Form.Field {...generateProps("linkedinUrl", Input)} />
          <Form.Field {...generateProps("githubUrl", Input)} />
          <Form.Field {...generateProps("twitterUrl", Input)} />
        </Form.Group>

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

export default injectIntl(PrimaryInformationFormView);

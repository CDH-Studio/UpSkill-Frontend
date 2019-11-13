import React, { Component } from "react";
import { generateCommonProps } from "../common/formTools";
import { Form, Checkbox, Input, Select, Grid } from "semantic-ui-react";
import { injectIntl } from "react-intl";
import { DateInput } from "semantic-ui-calendar-react";
import FormButtonsController from "../common/formButtons/formButtonsController";

class LanguageProficiencyFormView extends Component {
  constructor(props) {
    super(props);

    this.generateProps = generateCommonProps.bind(this, this.props);
  }

  render() {
    const {
      actingEndDisabled,
      actingDisabled,
      buttons,
      fields,
      onSubmit,
      handleRegister,
      handleCancle,
      handleNext,
      handlePrevious
    } = this.props;

    return (
      <Form onSubmit={onSubmit}>
        <Grid columns="one" divided>
          <Grid.Row>
            <Grid.Column>
              <Form.Field {...this.generateProps("firstLanguage", Select)} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form.Field
                {...this.generateProps("gradedOnSecondLanguage", Checkbox)}
              />
            </Grid.Column>
          </Grid.Row>
          {this.renderSecondaryGrading()}
        </Grid>
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

  renderSecondaryGrading() {
    const { showSecondaryGrading } = this.props;
    return (
      <React.Fragment>
        <Grid.Row>
          <Grid.Column>
            {["reading", "writing", "oral"].map((value, index) => (
              <Form.Group>
                <Form.Field
                  disabled={!showSecondaryGrading}
                  width={8}
                  {...this.generateProps(value + "Grade", Select)}
                />
                <Form.Field
                  disabled={!showSecondaryGrading}
                  width={8}
                  className="dateField"
                  {...this.generateProps(value + "Date", DateInput)}
                />
              </Form.Group>
            ))}
          </Grid.Column>
        </Grid.Row>
      </React.Fragment>
    );
  }
}

export default injectIntl(LanguageProficiencyFormView);

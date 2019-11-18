import React, { Component } from "react";
import { generateCommonProps } from "../common/formTools";
import { Checkbox, Form, Grid, Select } from "semantic-ui-react";
import { injectIntl } from "react-intl";
import { DateInput } from "semantic-ui-calendar-react";
import FormButtonsController from "../common/formButtons/formButtonsController";
import "../common/form.css";

class LanguageProficiencyFormView extends Component {
  constructor(props) {
    super(props);

    this.generateProps = generateCommonProps.bind(this, this.props);
  }

  render() {
    const {
      handleCancle,
      handleNext,
      handlePrevious,
      handleRegister,
      isEarlyRegister,
      onSubmit,
      intl
    } = this.props;

    return (
      <Form onSubmit={onSubmit}>
        <Grid columns="one" divided>
          <Grid.Row>
            <Grid.Column>
              <Form.Field
                {...this.generateProps("firstLanguage", Select)}
                options={[
                  {
                    key: "en",
                    value: "en",
                    text: intl.formatMessage({ id: "language.english" })
                  },
                  {
                    key: "fr",
                    value: "fr",
                    text: intl.formatMessage({ id: "language.french" })
                  }
                ]}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form.Field
                {...this.generateProps(
                  "gradedOnSecondLanguage",
                  Checkbox,
                  true
                )}
              />
            </Grid.Column>
          </Grid.Row>
          {this.renderSecondaryGrading()}
        </Grid>
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

  renderSecondaryGrading() {
    const { secondaryGradingDisabled } = this.props;
    return (
      <React.Fragment>
        <Grid.Row>
          <Grid.Column>
            {["reading", "writing", "oral"].map((value, index) => (
              <Form.Group>
                <Form.Field
                  {...this.generateProps(value + "Proficiency", Select)}
                  disabled={secondaryGradingDisabled}
                  width={8}
                  options={[
                    { key: "a", value: "a", text: "a" },
                    { key: "b", value: "b", text: "b" },
                    { key: "c", value: "c", text: "c" },
                    { key: null, value: "ungraded", text: "ungraded" }
                  ]}
                />
                <Form.Field
                  disabled={secondaryGradingDisabled}
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

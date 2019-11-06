import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Select, Form, Input, Grid, Checkbox } from "semantic-ui-react";
import { DateInput, MonthInput } from "semantic-ui-calendar-react";

import EditModalController, {
  generateCommonProps
} from "../common/editModal/editModalController.js";
import "./editLanguageProficiency.css";

class EditLanguageProficiencyView extends Component {
  render() {
    const { handleApply, intl } = this.props;
    return (
      <EditModalController
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.language.proficiency" })}
      >
        <Form onSubmit={handleApply}>
          <Grid columns="one" divided>
            <Grid.Row>
              <Grid.Column>
                <Form.Field
                  {...generateCommonProps("firstLanguage", Select, this.props)}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Field
                  {...generateCommonProps(
                    "gradedOnSecondLanguage",
                    Checkbox,
                    this.props
                  )}
                />
              </Grid.Column>
            </Grid.Row>
            {this.renderSecondaryGrading()}
          </Grid>
        </Form>
      </EditModalController>
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
                  {...generateCommonProps(value + "Grade", Select, this.props)}
                />
                <Form.Field
                  disabled={!showSecondaryGrading}
                  width={8}
                  {...generateCommonProps(
                    value + "Date",
                    DateInput,
                    this.props
                  )}
                />
              </Form.Group>
            ))}
          </Grid.Column>
        </Grid.Row>
      </React.Fragment>
    );
  }
}

export default injectIntl(EditLanguageProficiencyView);

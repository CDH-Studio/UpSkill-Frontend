import React, { Component } from "react";
import { generateCommonProps } from "../common/FormTools";
import { Form, Checkbox, Input, Select, Grid } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

export default class LabelCardFormView extends Component {
  constructor(props) {
    super(props);

    this.generateProps = generateCommonProps.bind(this, this.props);
  }

  render() {
    const { actingEndDisabled, actingDisabled, buttons, onSubmit } = this.props;

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
                {...this.generateProps(
                  "gradedOnSecondLanguage",
                  Checkbox,
                  this.props
                )}
              />
            </Grid.Column>
          </Grid.Row>
          {this.renderSecondaryGrading()}
        </Grid>
        {buttons}
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

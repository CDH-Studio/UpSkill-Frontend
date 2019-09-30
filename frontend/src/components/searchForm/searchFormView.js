import React, { Component } from "react";
import { Dropdown, Form, Input } from "semantic-ui-react";

/**
 *
 * PROPS:                   DEFAULT VALUE:          DESCRIPTION:
 * advancedFieldWidth       400px                   The width to use for advanced fields
 * departments              []                      Array of department options
 * jobTitles                []                      Array of job title options
 * locations                []                      Array of location options
 * primaryFieldWidth        800px                   The width to use for the primary skills dropdown
 * securityClearances       []                      Array of security clearance options
 * showAdvancedFields       True                    Whether or not to show advanced options or just skills
 * skills                   []                      Array of skill options
 */
export default class SearchFormView extends Component {
  constructor(props) {
    super(props);
    this.renderAdvancedFields = this.renderAdvancedFields.bind(this);
  }

  render() {
    return (
      <Form style={styles.form}>
        <Form.Field style={styles.formRow}>
          <Dropdown
            fluid
            multiple
            options={this.props.skills}
            placeholder="Select desired skills..."
            search
            selection
            style={styles.primaryDropdown}
          />
        </Form.Field>
        {this.renderAdvancedFields()}
      </Form>
    );
  }

  renderAdvancedFields() {
    if (!this.props.showAdvancedFields) {
      return null;
    }
    return (
      <React.Fragment>
        <Form.Field style={styles.formRow}>
          <Dropdown
            fluid
            options={this.props.jobTitles}
            placeholder="Job Title"
            search
            selection
            style={styles.advancedComponent}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <Dropdown
            fluid
            options={this.props.departments}
            placeholder="Department"
            search
            selection
            style={styles.advancedComponent}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <Dropdown
            fluid
            options={this.props.locations}
            placeholder="Location"
            search
            selection
            style={styles.advancedComponent}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <Dropdown
            fluid
            options={this.props.securityClearances}
            placeholder="Security Clearance"
            search
            selection
            style={styles.advancedComponent}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <Input placeholder="First name" style={styles.advancedComponent} />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <Input placeholder="Last name" style={styles.advancedComponent} />
        </Form.Field>
      </React.Fragment>
    );
  }
}

const styles = {
  advancedComponent: {
    textAlign: "left",
    width: "400px"
  },

  form: {
    width: "100%",
    maxWidth: "800px"
  },

  formRow: {
    padding: "3px",
    height: "30px",
    textAlign: "left"
  },

  primaryDropdown: {
    textAlign: "left",
    maxWidth: "800px",
    width: "100%"
  }
};

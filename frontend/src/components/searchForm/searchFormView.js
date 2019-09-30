import React, { Component } from "react";
import { Dropdown, Form, Input } from "semantic-ui-react";

/**
 * A form for creating a search query
 *
 * PROPS:                   DEFAULT VALUE:          DESCRIPTION:
 * advancedFieldWidth       400px                   The width to use for advanced fields
 * primaryFieldWidth        800px                   The width to use for the primary skills dropdown
 * showAdvancedFields       True                    Whether or not to show advanced options or just skills
 * jobTitles                []                      Array of job title options
 * skills                   []                      Array of skill options
 * departments              []                      Array of department options
 * locations                []                      Array of location options
 * securityClearances       []                      Array of security clearance options
 */
export default class SearchFormView extends Component {
  constructor(props) {
    super(props);
    this.renderAdvancedFields = this.renderAdvancedFields.bind(this);
  }

  render() {
    return (
      <Form>
        <Form.Field style={styles.formRow}>
          <Dropdown
            placeholder="Select desired skills..."
            fluid
            multiple
            search
            selection
            options={this.props.skills}
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
            placeholder="Job Title"
            fluid
            search
            selection
            style={styles.advancedComponent}
            options={this.props.jobTitles}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <Dropdown
            placeholder="Department"
            fluid
            search
            selection
            style={styles.advancedComponent}
            options={this.props.departments}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <Dropdown
            placeholder="Location"
            fluid
            search
            selection
            style={styles.advancedComponent}
            options={this.props.locations}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <Dropdown
            placeholder="Security Clearance"
            fluid
            search
            selection
            style={styles.advancedComponent}
            options={this.props.securityClearances}
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
  primaryDropdown: {
    textAlign: "left",
    width: "800px"
  },

  advancedComponent: {
    textAlign: "left",
    width: "400px"
  },

  formRow: {
    padding: "3px",
    height: "30px",
    textAlign: "left"
  },

  form: {
    paddingLeft: "15px",
    paddingRight: "15px"
  }
};

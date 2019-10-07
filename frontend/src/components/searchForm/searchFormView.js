import React, { Component } from "react";
import { Dropdown, Form, Input } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

/**
 *
 * PROPS:                   DEFAULT VALUE:          DESCRIPTION:
 * advancedFieldWidth       400px                   The width to use for advanced fields
 * departments              []                      Array of department options
 * invertLabels             false                   Whether to invert the label text of form fields
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
      <Form inverted={this.props.invertLabels} style={styles.form}>
        <Form.Field style={styles.formRow}>
          <label>
            <FormattedMessage id="advanced.search.form.desired.skills" />
          </label>
          <Dropdown
            fluid
            multiple
            options={this.props.skills}
            placeholder={
              <FormattedMessage id="advanced.search.form.desired.skills" />
            }
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
          <label>
            <FormattedMessage id="advanced.search.form.job.title" />
          </label>
          <Dropdown
            fluid
            options={this.props.jobTitles}
            placeholder={
              <FormattedMessage id="advanced.search.form.job.title" />
            }
            search
            selection
            style={styles.advancedComponent}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <label>
            <FormattedMessage id="advanced.search.form.department" />
          </label>
          <Dropdown
            fluid
            options={this.props.departments}
            placeholder={
              <FormattedMessage id="advanced.search.form.department" />
            }
            search
            selection
            style={styles.advancedComponent}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <label>
            <FormattedMessage id="advanced.search.form.location" />
          </label>
          <Dropdown
            fluid
            options={this.props.locations}
            placeholder={
              <FormattedMessage id="advanced.search.form.location" />
            }
            search
            selection
            style={styles.advancedComponent}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <label>
            <FormattedMessage id="advanced.search.form.security.clearance" />
          </label>
          <Dropdown
            fluid
            options={this.props.securityClearances}
            placeholder={
              <FormattedMessage id="advanced.search.form.security.clearance" />
            }
            search
            selection
            style={styles.advancedComponent}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <label>
            <FormattedMessage id="advanced.search.form.first.name" />
          </label>
          <FormattedMessage
            id="advanced.search.form.first.name"
            defaultMessage="first.name"
          >
            {placeholder => (
              <Input
                placeholder={placeholder}
                style={styles.advancedComponent}
              />
            )}
          </FormattedMessage>
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <label>
            <FormattedMessage id="advanced.search.form.last.name" />
          </label>
          <FormattedMessage
            id="advanced.search.form.last.name"
            defaultMessage="last.name"
          >
            {placeholder => (
              <Input
                placeholder={placeholder}
                style={styles.advancedComponent}
              />
            )}
          </FormattedMessage>
        </Form.Field>
      </React.Fragment>
    );
  }
}

const styles = {
  advancedComponent: {
    textAlign: "left",
    maxWidth: "400px",
    width: "100%"
  },

  form: {
    width: "100%",
    maxWidth: "800px"
  },

  formRow: {
    padding: "3px",
    height: "55px",
    textAlign: "left"
  },

  primaryDropdown: {
    textAlign: "left",
    maxWidth: "800px",
    width: "100%"
  }
};

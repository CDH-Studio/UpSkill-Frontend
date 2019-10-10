import React, { Component } from "react";
import { injectIntl } from "react-intl";

import { Dropdown, Form, Input } from "semantic-ui-react";

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
class SearchFormView extends Component {
  constructor(props) {
    super(props);
    this.renderAdvancedFields = this.renderAdvancedFields.bind(this);
  }

  render() {
    return (
      <Form inverted={this.props.invertLabels} style={styles.form}>
        <Form.Field style={styles.formRow}>
          <label>
            {this.props.intl.formatMessage({
              id: "advanced.search.form.desired.skills"
            })}
          </label>
          <Dropdown
            fluid
            multiple
            name="primaryDropdown"
            onChange={this.props.updateSearch}
            options={this.props.skills}
            placeholder={this.props.intl.formatMessage({
              id: "advanced.search.form.desired.skills"
            })}
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
            {this.props.intl.formatMessage({
              id: "advanced.search.form.job.title"
            })}
          </label>
          <Dropdown
            fluid
            options={this.props.jobTitles}
            placeholder={this.props.intl.formatMessage({
              id: "advanced.search.form.job.title"
            })}
            search
            selection
            style={styles.advancedComponent}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <label>
            {this.props.intl.formatMessage({
              id: "advanced.search.form.department"
            })}
          </label>
          <Dropdown
            fluid
            options={this.props.departments}
            placeholder={this.props.intl.formatMessage({
              id: "advanced.search.form.department"
            })}
            search
            selection
            style={styles.advancedComponent}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <label>
            {this.props.intl.formatMessage({
              id: "advanced.search.form.location"
            })}
          </label>
          <Dropdown
            fluid
            options={this.props.locations}
            placeholder={this.props.intl.formatMessage({
              id: "advanced.search.form.location"
            })}
            search
            selection
            style={styles.advancedComponent}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <label>
            {this.props.intl.formatMessage({
              id: "advanced.search.form.security.clearance"
            })}
          </label>
          <Dropdown
            fluid
            options={this.props.securityClearances}
            placeholder={this.props.intl.formatMessage({
              id: "advanced.search.form.security.clearance"
            })}
            search
            selection
            style={styles.advancedComponent}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <label>
            {this.props.intl.formatMessage({
              id: "advanced.search.form.first.name"
            })}
          </label>

          <Input
            name="firstName"
            onChange={this.props.updateSearch}
            placeholder={this.props.intl.formatMessage({
              id: "advanced.search.form.first.name"
            })}
            style={styles.advancedComponent}
          />
        </Form.Field>

        <Form.Field style={styles.formRow}>
          <label>
            {this.props.intl.formatMessage({
              id: "advanced.search.form.last.name"
            })}
          </label>
          <Input
            name="lastName"
            onChange={this.props.updateSearch}
            placeholder={this.props.intl.formatMessage({
              id: "advanced.search.form.last.name"
            })}
            style={styles.advancedComponent}
          />
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

export default injectIntl(SearchFormView);

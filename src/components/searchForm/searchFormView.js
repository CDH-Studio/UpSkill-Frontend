import React, { Component } from "react";
import { injectIntl } from "react-intl";
import FormManagingComponent from "../editForms/common/formTools";
import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  Input,
  Select,
  Loader
} from "semantic-ui-react";

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
    const {
      intl,
      handleToggle,
      advancedSearch,
      handleChange,
      handleSubmit,
      maxFormWidth
    } = this.props;

    return (
      <Form
        style={{
          margin: "0px auto",
          paddingLeft: "50px",
          paddingRight: "50px",
          width: maxFormWidth
        }}
        fluid
      >
        {advancedSearch ? (
          this.renderAdvancedFields()
        ) : (
          <React.Fragment>
            <Form.Field
              name="searchValue"
              control={Input}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <Button color="blue" onClick={handleSubmit}>
              search
            </Button>
            {handleToggle && (
              <Button basic color="blue" onClick={handleToggle}>
                Advanced Search
              </Button>
            )}
          </React.Fragment>
        )}
      </Form>
    );
  }

  renderAdvancedFields() {
    const {
      handleChange,
      handleToggle,
      handleSubmit,
      horizontalLayout,
      advancedOptions,
      getAdvancedOptions
    } = this.props;

    if (!advancedOptions) {
      getAdvancedOptions();
      return (
        <Form.Field>
          <Loader />
        </Form.Field>
      );
    }

    const fields = (
      <React.Fragment>
        <Form.Field
          fluid
          control={Input}
          name="name"
          label="Name"
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <Form.Field
          fluid
          control={Select}
          name="skills"
          label="Skills"
          multiple
          search
          options={advancedOptions.developmentalGoals}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <Form.Field
          fluid
          control={Select}
          name="branch"
          label="Branch"
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <Form.Field
          fluid
          control={Select}
          name="location"
          label="Location"
          options={advancedOptions.location}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <Form.Field
          fluid
          control={Select}
          name="classification"
          label="classification"
          options={advancedOptions.groupOrLevel}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <Form.Field
          fluid
          control={Checkbox}
          name="exFeeder"
          label="Is Ex Feeder"
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <Form.Field
          fluid
          control={Button}
          color="blue"
          content="Search"
          onClick={handleSubmit}
        />
        {handleToggle && (
          <Form.Field
            fluid
            control={Button}
            content="Basic Search"
            basic
            color="blue"
            onClick={handleToggle}
          />
        )}
      </React.Fragment>
    );

    if (horizontalLayout) {
      return <Form.Group widths="equal">{fields}</Form.Group>;
    }
    return fields;
  }
}
/*

        <Form.Field style={styles.formRow}>
          <label>
            {intl.formatMessage({
              id: "advanced.search.form.desired.skills"
            })}
          </label>
          <Dropdown
            fluid
            multiple
            name="primaryDropdown"
            onChange={updateSearch}
            options={skills}
            placeholder={intl.formatMessage({
              id: "advanced.search.form.desired.skills"
            })}
            search
            selection
            style={styles.primaryDropdown}
          />
        </Form.Field>
  */

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
    textAlign: "left"
  },

  primaryDropdown: {
    textAlign: "left",
    maxWidth: "800px",
    width: "100%"
  }
};

export default injectIntl(SearchFormView);

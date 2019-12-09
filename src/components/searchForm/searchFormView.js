import React, { Component } from "react";
import { injectIntl } from "react-intl";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Loader,
  Select
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
      advancedSearch,
      advancedOptions,
      defaultValues,
      handleChange,
      handleSubmit,
      handleToggle,
      intl,
      disableSearch,
      maxFormWidth,
      navBarLayout
    } = this.props;

    return (
      <Form
        loading={advancedSearch && !advancedOptions}
        style={{
          margin: "0px auto",
          paddingLeft: "50px",
          paddingRight: "50px",
          width: maxFormWidth
        }}
      >
        {advancedSearch ? (
          this.renderAdvancedFields()
        ) : (
          <Form.Field
            control={Input}
            name="searchValue"
            defaultValue={defaultValues["searchValue"]}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )}
        {!navBarLayout && (
          <Form.Group style={{ padding: "0 auto" }}>
            <Form.Group style={{ margin: "0 auto" }}>
              <Form.Field
                fluid
                style={{ width: "200px" }}
                control={Button}
                color="blue"
                content={intl.formatMessage({
                  id: "search.button.text"
                })}
                disabled={disableSearch}
                onClick={handleSubmit}
              />
              {handleToggle && (
                <Form.Field
                  basic
                  color="blue"
                  content={intl.formatMessage({
                    id: advancedSearch
                      ? "basic.search.button.text"
                      : "advanced.search.button.text"
                  })}
                  control={Button}
                  fluid
                  onClick={handleToggle}
                  style={{ width: "200px" }}
                />
              )}
            </Form.Group>
          </Form.Group>
        )}
      </Form>
    );
  }

  generateCommonProps(name) {
    const { defaultValues, handleChange, handleSubmit } = this.props;

    let defaultVal = defaultValues[name];
    /*if (
      ["skills", "location", "classification"].includes(name) &&
      typeof defaultVal !== "object"
    ) {
      defaultVal = [defaultVal];
    }*/

    let retVal = {
      fluid: true,
      name: name,
      onChange: handleChange,
      onSubmit: handleSubmit
    };

    if (name === "exFeeder") {
      retVal.defaultChecked = defaultVal && defaultVal !== "false";
    } else {
      retVal.defaultValue = defaultVal;
    }

    return retVal;
  }

  renderAdvancedFields() {
    const {
      advancedOptions,
      getAdvancedOptions,
      handleSubmit,
      navBarLayout,
      disableSearch,
      intl
    } = this.props;

    if (!advancedOptions) {
      getAdvancedOptions();
      return null;
    }

    const fields = (
      <React.Fragment>
        {navBarLayout && (
          <Form.Field
            control={Input}
            label={intl.formatMessage({
              id: "advanced.search.form.broad.search"
            })}
            {...this.generateCommonProps("searchValue")}
          />
        )}
        <Form.Field
          control={Input}
          label={intl.formatMessage({ id: "advanced.search.form.name" })}
          {...this.generateCommonProps("name")}
        />
        <Form.Field
          control={Select}
          label={intl.formatMessage({ id: "advanced.search.form.skills" })}
          multiple
          options={advancedOptions.developmentalGoals}
          search
          {...this.generateCommonProps("skills")}
        />
        <Form.Field
          control={Select}
          label={intl.formatMessage({ id: "advanced.search.form.branch" })}
          multiple
          options={advancedOptions.branch}
          search
          {...this.generateCommonProps("branch")}
        />
        <Form.Field
          control={Select}
          label={intl.formatMessage({ id: "advanced.search.form.location" })}
          multiple
          options={advancedOptions.location}
          search
          {...this.generateCommonProps("location")}
        />
        <Form.Field
          control={Select}
          label={intl.formatMessage({
            id: "advanced.search.form.classification"
          })}
          multiple
          options={advancedOptions.groupOrLevel}
          search
          {...this.generateCommonProps("classification")}
        />
        <Form.Field
          control={Checkbox}
          label={intl.formatMessage({ id: "advanced.search.form.ex.feeder" })}
          {...this.generateCommonProps("exFeeder")}
        />
        {navBarLayout && (
          <Form.Field
            fluid
            style={{ width: "200px" }}
            control={Button}
            color="blue"
            content={intl.formatMessage({
              id: "apply.button.text"
            })}
            disabled={disableSearch}
            onClick={handleSubmit}
          />
        )}
      </React.Fragment>
    );

    if (navBarLayout) {
      return <Form.Group widths="equal">{fields}</Form.Group>;
    }
    return fields;
  }
}

export default injectIntl(SearchFormView);

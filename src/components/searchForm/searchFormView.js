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
      handleChange,
      handleSubmit,
      handleToggle,
      intl,
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
        fluid
      >
        {advancedSearch ? (
          this.renderAdvancedFields()
        ) : (
          <Form.Field
            control={Input}
            name="searchValue"
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

  renderAdvancedFields() {
    const {
      advancedOptions,
      defaultValues,
      getAdvancedOptions,
      handleChange,
      handleSubmit,
      navBarLayout,
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
            fluid
            label={intl.formatMessage({
              id: "advanced.search.form.broad.search"
            })}
            name="searchValue"
            defaultValue={defaultValues["searchValue"]}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )}
        <Form.Field
          control={Input}
          fluid
          label={intl.formatMessage({ id: "advanced.search.form.name" })}
          name="name"
          defaultValue={defaultValues["name"]}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <Form.Field
          control={Select}
          fluid
          label={intl.formatMessage({ id: "advanced.search.form.skills" })}
          multiple
          name="skills"
          defaultValue={defaultValues["skills"]}
          onChange={handleChange}
          onSubmit={handleSubmit}
          options={advancedOptions.developmentalGoals}
          search
        />
        <Form.Field
          control={Input}
          fluid
          label={intl.formatMessage({ id: "advanced.search.form.branch" })}
          name="branch"
          defaultValue={defaultValues["branch"]}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <Form.Field
          control={Select}
          fluid
          label={intl.formatMessage({ id: "advanced.search.form.location" })}
          multiple
          name="location"
          defaultValue={defaultValues["location"]}
          onChange={handleChange}
          onSubmit={handleSubmit}
          options={advancedOptions.location}
          search
        />
        <Form.Field
          control={Select}
          fluid
          label={intl.formatMessage({
            id: "advanced.search.form.classification"
          })}
          multiple
          name="classification"
          defaultValue={defaultValues["classification"]}
          onChange={handleChange}
          onSubmit={handleSubmit}
          options={advancedOptions.groupOrLevel}
          search
        />
        <Form.Field
          control={Checkbox}
          fluid
          label={intl.formatMessage({ id: "advanced.search.form.ex.feeder" })}
          name="exFeeder"
          defaultValue={defaultValues["exFeeder"]}
          onChange={handleChange}
          onSubmit={handleSubmit}
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

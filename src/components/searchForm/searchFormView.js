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
      handleChange,
      handleSubmit,
      handleToggle,
      intl,
      maxFormWidth,
      navBarLayout
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
              control={Input}
              name="searchValue"
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </React.Fragment>
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
      getAdvancedOptions,
      handleChange,
      handleSubmit,
      navBarLayout,
      intl
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
          control={Input}
          fluid
          label={intl.formatMessage({ id: "advanced.search.form.name" })}
          name="name"
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <Form.Field
          control={Select}
          fluid
          label={intl.formatMessage({ id: "advanced.search.form.skills" })}
          multiple
          name="skills"
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
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <Form.Field
          control={Select}
          fluid
          label={intl.formatMessage({ id: "advanced.search.form.location" })}
          multiple
          name="location"
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

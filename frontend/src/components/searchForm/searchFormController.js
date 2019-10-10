import React, { Component } from "react";
import { injectIntl } from "react-intl";

import SearchFormView from "./searchFormView";

/**
 * A form for creating a search query
 *
 * PROPS:                   DEFAULT VALUE:          DESCRIPTION:
 * advancedFieldWidth       400px                   The width to use for advanced fields
 * departments              []                      Array of department options
 * intl                     N/A                     provided by react-intl
 * invertLabels             false                   Whether to invert the label text of form fields
 * jobTitles                []                      Array of job title options
 * locations                []                      Array of location options
 * primaryFieldWidth        800px                   The width to use for the primary skills dropdown
 * securityClearances       []                      Array of security clearance options
 * showAdvancedFields       true                    Whether or not to show advanced options or just skills
 * skills                   []                      Array of skill options
 * updateSearch             []                      Function to call to update the search query
 */
class SearchFormController extends Component {
  render() {
    return (
      <SearchFormView
        advancedFieldWidth={this.props.advancedFieldWidth}
        departments={this.props.departments}
        intl={this.props.intl}
        invertLabels={this.props.invertLabels}
        jobTitles={this.props.jobTitles}
        locations={this.props.locations}
        primaryFieldWidth={this.props.primaryFieldWidth}
        securityClearances={this.props.securityClearances}
        showAdvancedFields={this.props.showAdvancedFields}
        skills={[
          {
            key: "axios",
            value: "axios",
            text: this.props.intl.formatMessage({
              id: "search.field.primary.dropdown.axios"
            })
          },
          {
            key: "css",
            value: "css",
            text: this.props.intl.formatMessage({
              id: "search.field.primary.dropdown.css"
            })
          },
          {
            key: "enzyme",
            value: "enzyme",
            text: this.props.intl.formatMessage({
              id: "search.field.primary.dropdown.enzyme"
            })
          },
          {
            key: "html",
            value: "html",
            text: this.props.intl.formatMessage({
              id: "search.field.primary.dropdown.html"
            })
          },
          {
            key: "javascript",
            value: "javascript",
            text: this.props.intl.formatMessage({
              id: "search.field.primary.dropdown.javascript"
            })
          },
          {
            key: "jest",
            value: "jest",
            text: this.props.intl.formatMessage({
              id: "search.field.primary.dropdown.jest"
            })
          }
        ]}
        updateSearch={this.props.updateSearch}
      />
    );
  }
}

SearchFormController.defaultProps = {
  advancedFieldWidth: "400px",
  departments: [
    { key: "department1", value: "department1", text: "department1" },
    { key: "department2", value: "department2", text: "department2" }
  ],
  invertLabels: false,
  jobTitles: [
    { key: "Job1", value: "Job1", text: "Job1" },
    { key: "Job2", value: "Job2", text: "Job2" }
  ],
  locations: [
    { key: "locations1", value: "locations1", text: "locations1" },
    { key: "locations2", value: "locations2", text: "locations2" }
  ],
  primaryFieldWidth: "800px",
  securityClearances: [
    {
      key: "securityClearances1",
      value: "securityClearances1",
      text: "securityClearances1"
    },
    {
      key: "securityClearances2",
      value: "securityClearances2",
      text: "securityClearances2"
    }
  ],
  showAdvancedFields: true
};

export default injectIntl(SearchFormController);

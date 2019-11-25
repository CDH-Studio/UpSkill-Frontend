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
    const {
      advancedFieldWidth,
      departments,
      intl,
      invertLabels,
      jobTitles,
      locations,
      primaryFieldWidth,
      securityClearances,
      showAdvancedFields,
      updateSearch
    } = this.props;

    return (
      <SearchFormView
        advancedFieldWidth={advancedFieldWidth}
        departments={departments}
        intl={intl}
        invertLabels={invertLabels}
        jobTitles={jobTitles}
        locations={locations}
        primaryFieldWidth={primaryFieldWidth}
        securityClearances={securityClearances}
        showAdvancedFields={showAdvancedFields}
        skills={[
          {
            key: "axios",
            text: intl.formatMessage({
              id: "search.field.primary.dropdown.axios"
            }),
            value: "axios"
          },
          {
            key: "css",
            text: intl.formatMessage({
              id: "search.field.primary.dropdown.css"
            }),
            value: "css"
          },
          {
            key: "enzyme",
            text: intl.formatMessage({
              id: "search.field.primary.dropdown.enzyme"
            }),
            value: "enzyme"
          },
          {
            key: "html",
            text: intl.formatMessage({
              id: "search.field.primary.dropdown.html"
            }),
            value: "html"
          },
          {
            key: "javascript",
            text: intl.formatMessage({
              id: "search.field.primary.dropdown.javascript"
            }),
            value: "javascript"
          },
          {
            key: "jest",
            text: intl.formatMessage({
              id: "search.field.primary.dropdown.jest"
            }),
            value: "jest"
          }
        ]}
        updateSearch={updateSearch}
      />
    );
  }
}

SearchFormController.defaultProps = {
  advancedFieldWidth: "400px",
  departments: [
    { key: "department1", text: "department1", value: "department1" },
    { key: "department2", text: "department2", value: "department2" }
  ],
  invertLabels: false,
  jobTitles: [
    { key: "Job1", text: "Job1", value: "Job1" },
    { key: "Job2", text: "Job2", value: "Job2" }
  ],
  locations: [
    { key: "locations1", text: "locations1", value: "locations1" },
    { key: "locations2", text: "locations2", value: "locations2" }
  ],
  primaryFieldWidth: "800px",
  securityClearances: [
    {
      key: "securityClearances1",
      text: "securityClearances1",
      value: "securityClearances1"
    },
    {
      key: "securityClearances2",
      text: "securityClearances2",
      value: "securityClearances2"
    }
  ],
  showAdvancedFields: true
};

export default injectIntl(SearchFormController);
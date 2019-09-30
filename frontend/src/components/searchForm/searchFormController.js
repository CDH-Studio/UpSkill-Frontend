import React, { Component } from "react";
import SearchFormView from "./searchFormView";

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
export default class SearchFormController extends Component {
  render() {
    return (
      <SearchFormView
        advancedFieldWidth={this.props.advancedFieldWidth}
        primaryFieldWidth={this.props.primaryFieldWidth}
        showAdvancedFields={this.props.showAdvancedFields}
        jobTitles={this.props.jobTitles}
        skills={this.props.skills}
        departments={this.props.departments}
        locations={this.props.locations}
        securityClearances={this.props.securityClearances}
      />
    );
  }
}

SearchFormController.defaultProps = {
  advancedFieldWidth: "400px",
  primaryFieldWidth: "800px",
  showAdvancedFields: true,
  jobTitles: [
    { key: "Job1", value: "Job1", text: "Job1" },
    { key: "Job2", value: "Job2", text: "Job2" }
  ],
  skills: [
    { key: "skills1", value: "skills1", text: "skill1" },
    { key: "skills2", value: "skills1", text: "skill2" }
  ],
  departments: [
    { key: "department1", value: "department1", text: "department1" },
    { key: "department2", value: "department2", text: "department2" }
  ],
  locations: [
    { key: "locations1", value: "locations1", text: "locations1" },
    { key: "locations2", value: "locations2", text: "locations2" }
  ],
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
  ]
};

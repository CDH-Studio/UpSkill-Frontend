import React, { Component } from "react";
import SearchFormView from "./searchFormView";

/**
 * A form for creating a search query
 *
 * PROPS:                   DEFAULT VALUE:          DESCRIPTION:
 * advancedFieldWidth       400px                   The width to use for advanced fields
 * departments              []                      Array of department options
 * invertLabels             false                   Whether to invert the label text of form fields
 * jobTitles                []                      Array of job title options
 * locations                []                      Array of location options
 * primaryFieldWidth        800px                   The width to use for the primary skills dropdown
 * securityClearances       []                      Array of security clearance options
 * showAdvancedFields       true                    Whether or not to show advanced options or just skills
 * skills                   []                      Array of skill options
 */
export default class SearchFormController extends Component {
  render() {
    return (
      <SearchFormView
        advancedFieldWidth={this.props.advancedFieldWidth}
        departments={this.props.departments}
        invertLabels={this.props.invertLabels}
        jobTitles={this.props.jobTitles}
        locations={this.props.locations}
        primaryFieldWidth={this.props.primaryFieldWidth}
        securityClearances={this.props.securityClearances}
        showAdvancedFields={this.props.showAdvancedFields}
        skills={this.props.skills}
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
  showAdvancedFields: true,

  skills: [
    { key: "skills1", value: "skills1", text: "skill1" },
    { key: "skills2", value: "skills1", text: "skill2" }
  ]
};

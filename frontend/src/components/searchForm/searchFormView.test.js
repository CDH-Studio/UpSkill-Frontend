import React from "react";

import wrapThenMount from "../../../__mocks__/componentWrapper";
import SearchFormView from "./searchFormView";

const searchFormProps = {
  departments: [],
  jobTitles: [],
  locations: [],
  securityClearances: [],
  skills: []
};

it("SearchFormView with showAdvancedFields=true renders critical components", () => {
  const wrapper = wrapThenMount(
    <SearchFormView showAdvancedFields={true} {...searchFormProps} />
  );

  const searchForms = wrapper.find("Form");
  expect(searchForms.length).toBe(1);

  const dropdowns = wrapper.find("Dropdown");
  expect(dropdowns.length).toBe(5);

  const inputs = wrapper.find("FormField");
  expect(inputs.length).toBe(7);
});

it("SearchFormView with showAdvancedFields=false renders critical components", () => {
  const wrapper = wrapThenMount(
    <SearchFormView showAdvancedFields={false} {...searchFormProps} />
  );

  const searchForms = wrapper.find("Form");
  expect(searchForms.length).toBe(1);

  const dropdowns = wrapper.find("Dropdown");
  expect(dropdowns.length).toBe(1);

  const inputs = wrapper.find("Input");
  expect(inputs.length).toBe(0);
});

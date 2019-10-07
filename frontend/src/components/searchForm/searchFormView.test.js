import React from "react";
import SearchFormView from "./searchFormView";

import { shallow } from "enzyme";

it("SearchFormView with showAdvancedFields=true renders critical components", () => {
  const wrapper = shallow(<SearchFormView showAdvancedFields={true} />);

  console.log(wrapper.html());
  const searchForms = wrapper.find("Form");
  expect(searchForms.length).toBe(1);

  const dropdowns = wrapper.find("Dropdown");
  expect(dropdowns.length).toBe(5);

  const inputs = wrapper.find("Input");
  expect(inputs.length).toBe(2);
});

it("SearchFormView with showAdvancedFields=false renders critical components", () => {
  const wrapper = shallow(<SearchFormView showAdvancedFields={false} />);

  console.log(wrapper.html());
  const searchForms = wrapper.find("Form");
  expect(searchForms.length).toBe(1);

  const dropdowns = wrapper.find("Dropdown");
  expect(dropdowns.length).toBe(1);

  const inputs = wrapper.find("Input");
  expect(inputs.length).toBe(0);
});

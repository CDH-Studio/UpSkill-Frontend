import React from "react";
import { shallow } from "enzyme";

import HomeLayoutView from "./homeLayoutView";

it("home layout view contains critical components", () => {
  const wrapper = shallow(<HomeLayoutView />);
  const searchButtons = wrapper.find("#searchButton");
  expect(searchButtons.length).toBe(1);

  const toggleAdvancedButtons = wrapper.find("#toggleAdvancedButton");
  expect(toggleAdvancedButtons.length).toBe(1);

  const searchForms = wrapper.find("SearchFormController");
  expect(searchForms.length).toBe(1);

  const navigationBars = wrapper.find("NavigationBarController");
  expect(navigationBars.length).toBe(1);
});

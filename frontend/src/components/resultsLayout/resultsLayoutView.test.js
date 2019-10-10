import React from "react";
import { shallow } from "enzyme";

import ResultsLayoutView from "./resultsLayoutView";

it("home layout view contains critical components", () => {
  const wrapper = shallow(<ResultsLayoutView />);

  //search button not added yet
  //const searchButtons = wrapper.find("#searchButton");
  //expect(searchButtons.length).toBe(1);

  const searchForms = wrapper.find("injectIntl(SearchFormController)");
  expect(searchForms.length).toBe(1);

  const navigationBars = wrapper.find("NavigationBarController");
  expect(navigationBars.length).toBe(1);
});

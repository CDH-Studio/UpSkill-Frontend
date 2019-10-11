import React from "react";
import { shallow } from "enzyme";

import ResultsLayoutView from "./resultsLayoutView";

it("home layout view contains critical components", () => {
  const wrapper = shallow(<ResultsLayoutView />);

  const searchButtons = wrapper.find(".resultContent");
  expect(searchButtons.length).toBe(1);

  const navigationBars = wrapper.find("NavigationBarController");
  expect(navigationBars.length).toBe(1);
});

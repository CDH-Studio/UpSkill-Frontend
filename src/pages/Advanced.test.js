import React from "react";

import Advanced from "./Advanced";
import wrapThenMount from "../__mocks__/componentWrapper";

it("Advanced contains critical components", () => {
  const wrapper = wrapThenMount(<Advanced />);
  const layouts = wrapper.find("HomeLayoutController");
  expect(layouts.length).toBe(1);

  /*const navigationBars = wrapper.find("NavigationBarController");
  expect(navigationBars.length).toBe(1);

  const dropdowns = wrapper.find("Dropdown");
  expect(dropdowns.length).toBe(5);

  const inputs = wrapper.find("Input");
  expect(inputs.length).toBe(2);*/
});

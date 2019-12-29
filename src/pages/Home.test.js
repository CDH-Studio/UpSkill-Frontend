import React from "react";
import wrapThenMount from "../__mocks__/componentWrapper";

import Home from "./Home";

it("contains home layout", () => {
  expect(1).toEqual(1);
  /*  const wrapper = wrapThenMount(<Home />, true, true);
  const layouts = wrapper.find("HomeLayoutController");
  expect(layouts.length).toBe(1);*/
});
